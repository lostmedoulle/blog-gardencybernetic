---
title: "Une boucle d'agents pour migrer 25 000 dossiers en environnement régulé"
description: "L'agent propose, un juge déterministe tranche. Ce qui rend l'automatisation acceptable dans un domaine audité n'est pas le modèle, c'est la porte."
dateCreated: 2026-09-03
dateUpdated: 2026-09-03
version: 0.1.0
status: validated
confidence: high
category: experiment
tags: ["migration", "agents", "donnees", "audit", "determinisme", "dagster"]
featured: false
draft: false
authors: ["Med"]
language: fr
readingTime: 12
---

Il y a un an, migrer les données d'un logiciel métier vers un autre me prenait deux semaines. Aujourd'hui la chaîne complète tourne en [À COMPLÉTER : durée réelle, et préciser ce qu'elle couvre], sur X milliers de dossiers d'assurés, dans un domaine où une erreur silencieuse n'est pas un incident technique mais un problème juridique.

Ce texte décrit comment. Il décrit surtout pourquoi ce n'est pas l'agent qui rend l'opération sûre.

## Pourquoi l'automatisation naïve échoue ici

Le cœur d'une migration est le mapping : décider que tel champ de l'ancien système correspond à tel champ du nouveau, et sous quelle transformation. C'est un travail fastidieux, répétitif, et les modèles de langage y sont excellents.

C'est précisément le problème. Un mapping produit par un modèle est plausible, rapide, et invérifiable. Il n'expose ni son niveau de confiance ni son raisonnement de manière auditable. Sur 25 000 dossiers, un mapping faux ne produit pas une erreur visible : il produit 25 000 lignes bien formées, correctement typées, et fausses.

Dans un domaine régulé, ce n'est pas une automatisation. C'est une manière de transformer un travail lent et vérifiable en un travail rapide et invérifiable.

La question n'était donc pas de savoir si un agent pouvait faire le mapping. Il le peut. Elle était de savoir sous quelle contrainte on peut accepter sa proposition.

## Le renversement : l'agent propose, un code externe juge

L'architecture repose sur une séparation stricte.

L'agent produit. Il analyse les sources, propose des mappings, écrit des transformations, corrige du code. Il travaille dans une zone où le non-déterminisme est toléré.

Un code externe juge. Il vérifie la conformité au modèle de données cible : colonnes attendues, types, règles de transformation, unicité, comptages. Son verdict est binaire. Pas de score, pas de zone grise.

Et surtout : ce code est isolé. Il ne fait pas partie du corpus de compétences que l'agent peut modifier. L'agent ne peut ni le lire pour s'y adapter, ni le réécrire pour le satisfaire. Il subit le jugement, il ne le négocie pas.

C'est la seule condition qui rend l'ensemble défendable devant un auditeur. Le non-déterminisme est admissible tant qu'il est confiné en amont d'une porte déterministe. Ce qui compte n'est pas que le processus soit prévisible de bout en bout, mais que la décision d'acceptation le soit.

## L'architecture, en séquence

Le système est une interface en ligne de commande, volontairement séquentielle. Peu d'états possibles, un ordre strict, aucune branche cachée.

**Profilage.** Avant toute transformation, un outil de diagnostic lit le système source et détermine quelles entités sont mappables vers le modèle cible, et lesquelles ne le sont pas. On sait donc ce qui manque avant d'avoir commencé, et non après.

**Mapping.** Les correspondances sont proposées automatiquement à partir d'heuristiques statistiques. Le résultat est exporté vers un fichier Excel que l'utilisateur métier peut corriger et réimporter. La reprise du fichier reconfigure l'ensemble des paramètres sans intervention technique.

**Chaînages manquants.** Les relations non résolues sont isolées et traitées explicitement, plutôt que silencieusement ignorées.

**Cockpit de validation.** Environ [À COMPLÉTER : nombre] tables, classées par thème, chacune auditable séparément. On voit table par table ce qui passe, ce qui est en attente, ce qui est en défaut, en fonction de la qualité des entrées. Une chaîne défaillante est identifiée avant la bascule, pas pendant.

À chaque étape, un artefact est généré : ce qui est entré, ce qui est sorti, quel mapping a été appliqué, quel écart a été constaté. La reconstruction post-mortem est possible sans relancer quoi que ce soit. C'est ce qui sauve devant un auditeur.

L'orchestration s'appuie sur Dagster, ce qui fournit le lignage et la matérialisation des artefacts sans avoir à les construire.

## La boucle de compétences

Le système n'a pas été spécifié à l'avance. Il s'est constitué par accrétion.

Le principe est simple : chaque bug résolu devient une règle écrite. Quand un défaut apparaît, un test déterministe permet d'en localiser l'origine — chaque variable peut être testée par un script externe, ce qui donne une forme de diagnostic par provenance plutôt qu'un simple échec global.

Deux cas se présentent alors.

Si le défaut est technique, on conserve la démarche méthodique qui a permis de l'isoler. La compétence enregistrée n'est pas la correction, c'est le chemin de diagnostic.

Si le défaut est métier, on écrit une règle qui décrit l'exception dans le langage du domaine.

Le corpus s'est ainsi construit jusqu'à [À COMPLÉTER : nombre de scripts et de règles], à mesure que les cas réels arrivaient. Il n'est pas une spécification. C'est un précipité d'incidents.

Le point qui m'intéresse le plus, et que je n'ai pas vu formulé ailleurs, est la symétrie. Le même format d'artefact sert des deux côtés : il guide l'agent qui écrit le code, et il capture la règle métier telle que l'expert la formule. Un seul objet, deux consommateurs. La conséquence est que la règle métier cesse d'être documentée à côté du code pour devenir une entrée d'exécution. La dérive habituelle entre la documentation et le comportement réel disparaît par construction, et non par discipline.

## La divergence entre modèles comme instrument de mesure

Un effet secondaire s'est révélé plus utile que prévu.

Le modèle de données cible étant figé, la sortie attendue est connue. En faisant lire une nouvelle source par deux modèles différents, on obtient parfois deux interprétations distinctes de la même règle, ou deux formatages incompatibles.

Le réflexe est de traiter ça comme un défaut à corriger. C'est une erreur de lecture. L'écart n'est pas un bug du modèle : c'est le signe que la règle est sous-spécifiée. Là où deux systèmes indépendants convergent, la règle est explicite. Là où ils divergent, il existe un implicite que personne n'avait écrit — et c'est exactement là que se logent les erreurs de migration.

Le désaccord entre modèles est donc un instrument de mesure de la qualité de spécification. Pas un problème d'ingénierie, un signal à lire.

Ce n'est mesurable que si on le compte. Un taux de divergence par table donne un indicateur de risque avant migration : une table sur laquelle deux modèles ne s'accordent pas est une table dont les règles ne sont pas écrites, quelle que soit la propreté apparente des données. C'est le prochain chantier de ce système.

## La dernière porte : la réconciliation

Le contrôle final ne porte pas sur le format mais sur le résultat.

Après bascule, les fiches d'experts issues de l'ancien système sont comparées à celles produites par le nouveau. Exhaustivement, sur les 25 000 dossiers, calculs compris. Le contrôle est automatique et son verdict est binaire.

Résultat : zéro écart.

C'est le contrôle le plus utile de toute la chaîne, parce qu'il attrape une classe d'erreurs que la validation de schéma ne voit jamais. Une rente rattachée au mauvais bénéficiaire respecte parfaitement le modèle de données. Une date d'effet décalée d'un mois passe tous les contrôles de format. Seule une comparaison de résultat les détecte.

## Ce que ce système ne prouve pas

Deux limites, et je préfère les nommer moi-même.

**Zéro écart mesure la fidélité, pas la justesse.** La réconciliation prouve que ce qui est sorti correspond à ce qui est entré. Si l'ancien système contenait une donnée fausse, elle arrive intacte de l'autre côté et le contrôle affiche conforme. C'est le comportement correct pour une migration. Ce n'est pas une garantie de qualité.

**Le goulot d'étranglement n'a pas disparu, il s'est déplacé.** Le système détecte automatiquement qu'une règle manque. Il ne l'écrit pas. C'est moi qui formule les compétences, qui les audite, qui les valide. La découverte du besoin est automatisée ; la formulation ne l'est pas. Tant qu'aucun expert métier n'a écrit une règle sans moi, ce système n'a pas décentralisé quoi que ce soit — il a outillé une dépendance.

Le test suivant est écrit : injecter dans une migration passée une vingtaine d'erreurs métier plausibles, dont la moitié respectant le schéma, et compter combien la chaîne en attrape. Tant que ce chiffre n'existe pas, je connais l'architecture de ce système mais pas son taux de faux négatifs.

---

Il y a une dernière chose, et elle m'a occupé plus longtemps que le reste.

Ce système est conçu pour transporter les données à l'identique. Il y parvient. Mais en le regardant tourner, j'ai vu défiler ce qu'il transportait : vingt ans d'ajustements, de corrections manuelles et de contournements accumulés dans le système source. Tous parfaitement migrés.

Une migration réussie à 100 % de fidélité est un échec de diagnostic. C'est le sujet de [*La comptabilité est la mémoire des pannes qu'on n'a pas réparées*](/essays/comptabilite-memoire-des-pannes/).
