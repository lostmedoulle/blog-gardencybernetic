---
title: "L'agent n'est pas un outil de production, c'est un instrument de mesure"
description: "Automatisation, processus, et le signal qu'on éteint sans le vouloir."
dateCreated: 2026-09-02
dateUpdated: 2026-09-02
version: 0.1.0
status: hypothesis
confidence: medium
category: experiment
tags: ["automatisation", "processus", "cybernetics", "feedback", "elicitation", "diagnostic"]
featured: true
draft: false
authors: ["Med"]
language: fr
readingTime: 10
cover: /images/agent-instrument-de-mesure.jpg
coverAlt: "Illustration cyberpunk : une personne penchée sur un ordinateur portable dont l'écran holographique affiche un fichier Skills.md, sous les néons d'une ville nocturne."
---

## Le point de départ

Je suis le goulot d'étranglement de mon entreprise

Business analyst et développeur, seul point de passage vers l'automatisation. Tout le monde veut automatiser quelque chose. Je ne peux pas absorber la demande. Le diagnostic était facile et l'idée qui a suivi paraissait évidente : si je ne peux pas concevoir pour tout le monde, que chacun conçoive pour soi. Un agent qui accompagne l'utilisateur dans l'explicitation de son propre travail, et qui produit en sortie une spécification testable avec pour délivrable un Skills.md et un Agent.md. Dans le but que mes collègues puissent d'ores et déjà automatiser par eux-mêmes et à termes accélérer l'automatisation de la boîte.

## Contexte
Entreprise : domaine ultra-réglementé dans les services, + de 100 employés, service IT interne
Outils : Copilot Studio
Agent en oeuvre : Coach de skills.md

L'idée fonctionne. Pas pour la raison que je croyais.

## Ce que l'élicitation révèle réellement

En faisant tourner la méthode, j'attendais des spécifications. J'ai obtenu autre chose, et de plus grande valeur : un diagnostic.

Un processus se laisse décrire n'importe comment tant qu'on n'essaie pas de l'exécuter mécaniquement. On peut en parler pendant des heures en réunion sans jamais rencontrer ses incohérences. Elles sont absorbées, en silence, par les gens qui font le travail. Dès qu'on tente de le formaliser en règles, conditions et résultats attendus, tout remonte à la surface par le biais de mon Agent :

- des règles qui comptent plus d'exceptions que de cas nominaux ;
- deux exécutants du même processus qui donnent deux réponses différentes ;
- des décisions prises sur la base d'informations qu'il faut mendier à un autre service ;
- des contournements stables, installés depuis des années, que personne n'a jamais déclarés ;
- des livrables que personne ne consomme en aval.

Rien de tout cela n'est une découverte pour la personne qui fait le travail. Elle vit avec. C'est une découverte pour l'organisation, qui ne l'avait jamais vu écrit.

L'élicitation ne prépare pas l'automatisation. Elle rend le processus lisible pour la première fois.

## Le problème que ça pose immédiatement

Voici où l'expérience devient inconfortable.

La douleur d'un processus défectueux — les exceptions, les relances, les allers-retours, l'attente — n'est pas seulement un coût. C'est un signal d'erreur. C'est ce qui finit, un jour, par forcer la correction.

Automatiser fait disparaître la douleur sans faire disparaître la cause. Et le jour où plus personne ne souffre, l'énergie politique nécessaire à la réforme s'évapore. Le processus se retrouve figé pour dix ans, sous une couche d'automatisation que plus personne n'ose toucher.

C'est un analgésique. Il traite le symptôme et supprime l'information qui aurait permis de traiter la maladie.

En termes de systèmes : l'automatisation supprime la boucle de rétroaction qui régulait le processus. Elle transforme un système régulé en système ouvert. Et un système ouvert dérive sans que personne ne le sache.

Il y a un second piège, plus discret. L'utilisateur qui a construit son agent est satisfait. Sa satisfaction mesure la qualité du skill, pas la validité du processus. On peut être parfaitement heureux d'avoir automatisé une tâche qui ne devrait pas exister. Optimum local, atteint avec enthousiasme ou une automatisation "Bullshit".

## Le renversement

Alors j'ai inversé la hiérarchie.

Le skill n'est pas le livrable. Le skill est l'instrument de mesure.

On ne construit pas un agent pour gagner du temps. On construit un agent parce que c'est la manière la moins coûteuse de forcer un processus à révéler sa vraie forme. Le gain de temps est un sous-produit. Le diagnostic est le produit.

Cette inversion change tout le reste du dispositif. L'élicitation devient une sonde. Le POC devient le protocole qui rend la sonde honnête, parce qu'on ne peut pas tricher avec une machine qui exige que chaque condition soit explicite.

## Six compteurs, déjà gratuits

L'avantage de ce renversement, c'est qu'il ne demande aucune collecte supplémentaire. Les données sortent déjà de l'élicitation. Il suffit de les compter.

**Ratio d'exceptions.** Nombre d'exceptions sur nombre de règles. Au-delà d'un seuil, ce qu'on appelait une règle n'en est pas une. Soit le processus traite mal plusieurs populations distinctes, soit la vraie logique n'a jamais été formulée.

**Contradictions inter-personnes.** Deux exécutants, deux réponses. Il n'y a pas de processus, il y a des pratiques (le combat des experts).

**Branches « information manquante ».** Si l'exécutant doit régulièrement chercher ce qui aurait dû lui être fourni, le défaut est en amont. Automatiser ici revient à industrialiser la mendicité d'information.

**Contournements.** Un contournement stable est la preuve que le processus officiel est inapplicable. C'est le signal le plus fiable de la liste, et le plus fragile : il ne se déclare que si la personne fait confiance.

**Handoffs et attentes.** Si le temps écoulé dépasse largement le temps travaillé, le problème est la file, pas la tâche. Accélérer une tâche de vingt minutes à l'intérieur d'un cycle de cinq jours n'améliore rien.

**Origine des décisions.** Si l'exécutant décide sur la base d'informations dont un autre service est propriétaire, la frontière organisationnelle est mal placée. Aucun agent ne réparera ça.

## Le verdict

Avant la question « agent, workflow ou automatisation », une question plus ancienne : faut-il faire quoi que ce soit ici.

**Sain.** Règles stables, peu d'exceptions, pas de contradiction, frontières nettes. Automatiser. Le skill est le livrable.

**Malade local.** Défaut réel, mais contenu dans le périmètre de celui qui a l'autorité pour le corriger. Corriger d'abord. Automatiser avant reviendrait à couler la version défectueuse dans le béton.

**Malade systémique.** Le défaut traverse plusieurs services ; l'exécutant n'a aucune prise dessus. C'est ici que le risque d'analgésique est maximal. Deux issues seulement : escalader sans automatiser, ou automatiser avec date de caducité explicite et compteurs maintenus. Jamais d'automatisation silencieuse.

**Ne devrait pas exister.** Le processus produit un livrable que personne ne consomme, ou duplique un contrôle déjà fait ailleurs. Ça arrive plus souvent qu'on ne l'imagine, et c'est la trouvaille la plus rentable qu'une élicitation puisse produire.

Le verdict porte sur le processus, jamais sur la personne. Et il n'est pas négociable par l'exécutant, parce qu'il porte précisément sur ce que l'exécutant ne peut pas voir depuis sa position.

## La règle qui résout la tension

On n'a pas à choisir entre automatiser et réparer. Il faut automatiser **sans éteindre le signal**.

Chaque skill mis en service continue de journaliser ce qui a servi au diagnostic : exceptions déclenchées, escalades, cas hors périmètre, informations manquantes. Le compteur reste allumé après la mise en production.

Trois conséquences.

La douleur ne disparaît pas, elle change de nature. Elle devient une donnée au lieu d'être une souffrance individuelle. C'est exactement ce qu'une boucle de régulation est censée faire : convertir un symptôme en information exploitable.

Les processus malades systémiques deviennent visibles avec des chiffres. C'est le seul argument qui fonctionne dans un arbitrage entre départements.

Un skill.md dont le taux d'exception augmente signale que le processus dérive, avant que le résultat ne devienne faux.

Pour les cas systémiques, la clause de caducité n'est pas une formalité : sans elle, le pansement devient l'organe.

## Ce que la littérature dit déjà

Honnêteté d'abord : cette idée a des ancêtres, et l'un d'eux est très encombrant.

**Michael Hammer, 1990.** *Reengineering Work: Don't Automate, Obliterate.* Sa thèse : la plupart du travail effectué n'apporte aucune valeur, et il faut le supprimer plutôt que l'accélérer par l'informatique. Sa formule est restée : arrêter de paver les sentiers de vaches. Trente-six ans avant ces notes, la même intuition, mieux écrite. Il faut ajouter que le reengineering a majoritairement échoué en pratique, pour des raisons qui concernent directement ce que je décris ici.

**Lisanne Bainbridge, 1983.** *Ironies of Automation.* L'ironie centrale : le concepteur qui veut éliminer l'opérateur lui laisse malgré tout les tâches qu'il n'a pas su automatiser, c'est-à-dire les exceptions et les situations anormales. Le résultat est un opérateur qui a besoin de plus de compétence qu'avant, tout en ayant moins d'occasions de l'entretenir. Quarante ans plus tard, la structure du problème n'a pas bougé ; seule la technologie a changé - transfert des compétences vers un opérateur plus qualifié ou productif touchant le même salaire.

**Chris Argyris et Donald Schön.** Apprentissage en simple boucle : corriger l'action sans questionner les variables directrices. Double boucle : soumettre ces variables elles-mêmes à examen. Automatiser un processus, c'est de la simple boucle par excellence. Le verdict décrit plus haut n'est rien d'autre qu'un forceur de double boucle, inséré à l'endroit du flux où l'organisation est, pour une fois, obligée de regarder.

**Erik Hollnagel.** Travail tel qu'imaginé contre travail tel qu'effectué. Le premier est la vue idéalisée des concepteurs et des règlements ; le second est ce qui se passe réellement. Toute élicitation sérieuse mesure cet écart, qu'elle le veuille ou non.

**Steven Alter, 2014.** *Theory of Workarounds.* Le contournement n'est pas de l'indiscipline, c'est une réponse structurée à un obstacle du système, et il est théorisable. Cela donne un statut au signal le plus précieux de la liste.

**Stafford Beer**, enfin, pour le cadre général : un système viable a besoin d'une fonction qui observe l'ensemble et détecte ce qu'aucune unité opérationnelle ne peut voir depuis sa propre position.

Autrement dit : rien de ce qui précède n'est neuf pris isolément.

## Ce qui pourrait être neuf

Une chose, et elle est étroite.

Hammer avait raison sur le diagnostic et a échoué sur la méthode. Le reengineering exigeait une analyse lourde, descendante, menée par des consultants, coûteuse, et vécue comme une menace par ceux qu'elle observait. Le coût du diagnostic était tel qu'il fallait le réserver à quelques processus majeurs, choisis avant d'avoir les données.

Ce qui a changé n'est pas la thèse. C'est le prix de l'instrument (un coût du token dérisoire).

L'élicitation assistée déplace le diagnostic de processus vers le bas et vers le grand nombre. Il est produit par la personne qui fait le travail, dans le cours d'une démarche qu'elle a elle-même demandée, et son coût marginal tend vers presque rien. On peut instrumenter cinquante processus au lieu de trois, et choisir *après* avoir vu les chiffres.

D'où la formulation que je retiens :

> La tentative d'automatisation est le diagnostic de processus le moins cher jamais disponible. L'automatisation elle-même n'est qu'une des issues possibles, et pas la plus fréquente.

Le corollaire est la partie que je n'ai trouvée nulle part : **maintenir le compteur allumé après l'automatisation**, pour que le remède ne détruise pas l'instrument. C'est ce qui distingue une automatisation d'un analgésique.

## Protocole

Une théorie qui ne peut pas être fausse ne sert à rien. Voici ce qui la réfuterait.

**Hypothèse 1.** Une majorité des processus élicités recevra un verdict autre que « sain ». Si presque tout ressort sain, il n'y a pas de diagnostic à faire, seulement de l'automatisation.

**Hypothèse 2.** Les six compteurs prédiront le verdict avec une cohérence raisonnable entre observateurs. S'ils ne font que refléter l'humeur de celui qui les lit, ce ne sont pas des mesures.

**Hypothèse 3.** Au moins un processus recevra le verdict « ne devrait pas exister », et la suppression rapportera davantage que ne l'aurait fait son automatisation.

**Hypothèse 4.** Les compteurs maintenus après mise en service détecteront une dérive avant qu'un résultat faux ne soit constaté par un humain.

**Hypothèse 5, la plus fragile.** Les gens continueront de déclarer leurs contournements après avoir compris que la démarche produit des verdicts. C'est ici que tout peut s'effondrer.

## Le risque

Ce dispositif transforme un accompagnement en audit.

Quelqu'un vient chercher de l'aide pour automatiser une tâche pénible. Il repart avec un diagnostic disant que son processus est défectueux, parfois que son travail n'a pas lieu d'être. Ce n'est plus le même contrat.

Si ce n'est pas anticipé, la confiance disparaît, les contournements cessent d'être déclarés, et l'instrument perd sa sensibilité au moment précis où on en a le plus besoin. C'est très exactement ce qui a tué le reengineering des années 1990 : une méthode juste, appliquée d'une manière qui a rendu les gens muets.

Deux garde-fous, à écrire avant le premier cas et non après : le verdict porte sur le processus et se publie sous forme agrégée, jamais nominative. Et l'issue « ne devrait pas exister » doit avoir une contrepartie explicite pour la personne concernée, décidée à l'avance.

Sinon, la théorie est correcte et le système meurt quand même.

---

## Références

- Bainbridge, L. (1983). *Ironies of Automation.* Automatica, 19(6), 775-779.
- Hammer, M. (1990). *Reengineering Work: Don't Automate, Obliterate.* Harvard Business Review, 68(4), 104-112.
- Argyris, C. & Schön, D. (1978). *Organizational Learning.*
- Hollnagel, E. (2015). *From Safety-I to Safety-II.* (work-as-imagined / work-as-done)
- Alter, S. (2014). *Theory of Workarounds.* Communications of the AIS, 34, 1041-1066.
- Beer, S. (1979). *The Heart of Enterprise.* (Viable System Model)
- Ashby, W. R. (1956). *An Introduction to Cybernetics.* (loi de la variété requise)
- Silicon Carne. *Travailler avec Elon Musk : les leçons de Karim Bousta (2026)
