---
title: "Nous automatisons des processus que personne n'a diagnostiqués"
description: "Le gain de temps se chiffre. La question de savoir si le processus méritait d'exister n'est mesurée par personne. C'est cet écart qui produira les dégâts."
dateCreated: 2026-09-03
dateUpdated: 2026-09-03
version: 0.1.0
status: hypothesis
confidence: medium
category: essay
tags: ["automatisation", "diagnostic", "bainbridge", "competence", "processus"]
featured: false
draft: false
authors: ["Med"]
language: fr
readingTime: 14
---

Toute organisation qui automatise mesure la même chose : le temps gagné. Deux semaines devenues dix minutes, trois équivalents temps plein libérés, un taux de traitement multiplié.

Personne ne mesure si le processus méritait d'exister.

Ce n'est pas une négligence individuelle. C'est une conséquence prévisible de la façon dont ces décisions sont prises, et je pense que c'est la source des dégâts qui arriveront dans les dix prochaines années.

## Pourquoi le diagnostic ne se fait pas

Trois raisons, aucune n'étant l'incompétence.

**Le gain se chiffre, le diagnostic est politique.** Un directeur qui annonce trente pour cent de temps gagné apporte un chiffre à son comité. Celui qui annonce que le processus est incohérent depuis douze ans apporte un problème, met en cause des décisions passées, et déclenche un travail que personne n'a budgété. Le premier avance. Le second est un porteur de mauvaise nouvelle.

**Personne n'est propriétaire du processus entier.** Chaque service voit son segment. Les incohérences vivent dans les interstices, aux points de passage entre équipes, là où chacun suppose que l'autre a vérifié. Or l'automatisation est achetée par service, avec un budget de service. On automatise donc des morceaux, ce qui empêche par construction de voir la cohérence de l'ensemble.

**Le diagnostic coûte cher et n'a pas de livrable vendable.** Un projet d'automatisation produit un outil. Un diagnostic produit un rapport qui dit, dans le meilleur des cas, qu'il ne fallait pas faire le projet. Aucun fournisseur n'a intérêt à le proposer, et aucun acheteur n'a envie de le financer.

## Les bullshit agents

David Graeber décrivait des emplois dont les titulaires eux-mêmes ne peuvent justifier l'existence, maintenus par une inertie organisationnelle que personne n'a intérêt à examiner.

Nous sommes en train de les encoder.

Un processus sans valeur, une fois automatisé, ne disparaît pas : il devient bon marché, rapide, et il produit un rapport. Le coût de calcul n'est pas le problème principal — il est modeste et il baissera. Le vrai coût est ailleurs.

Il y a le coût de maintenance : chaque agent déployé devient une dépendance qu'il faudra surveiller, mettre à jour, déboguer, pendant des années.

Il y a le coût d'opportunité, plus important : chaque agent inutile consomme de l'attention, du budget et de la légitimité politique qui manqueront au projet qui comptait vraiment.

Et il y a une différence qui aggrave le tout par rapport au bullshit job humain. Une personne occupant un poste vide finit par en douter à voix haute. Elle se plaint, elle démissionne, elle laisse échapper que son travail ne sert à rien. Ce doute est un signal, et il finit par remonter.

L'agent ne doute pas. Il tourne, il produit une sortie régulière et bien formatée, et cette sortie ressemble à une mesure. Elle est alors reprise dans un tableau de bord, agrégée, présentée. Le processus vide acquiert la respectabilité de la donnée.

## L'automatisation supprime le signal d'erreur

C'est le mécanisme central, et il est contre-intuitif.

Un processus manuel défaillant produit des frictions. Des retards, des relances, des plaintes, des gens qui s'engueulent à la clôture, un dossier qui remonte au directeur parce que personne ne sait le traiter. Ces frictions sont pénibles. Elles sont aussi la mesure. Elles indiquent en permanence où le processus ne tient pas.

Automatisez-le sans le corriger, et les frictions disparaissent. Pas parce que le problème est résolu : parce que la machine ne se plaint pas. Elle applique la règle fausse sans broncher, sans relance, sans dossier qui remonte.

Le silence est alors interprété comme de la santé. Il n'est que l'absence de capteur.

C'est la même dynamique que le bricolage comptable, en accéléré. Une organisation met vingt ans à rendre sa comptabilité irréparable à coups d'ajustements. Un processus mal compris et automatisé y arrive en dix-huit mois, parce que la machine reproduit l'erreur à la vitesse et au volume de la machine.

Il y a un corollaire pratique : les compteurs de diagnostic doivent rester allumés après le déploiement. Un système d'automatisation qui ne mesure plus rien une fois en production n'est pas un outil de productivité, c'est un analgésique. Il supprime la douleur en laissant la lésion.

## Une expérience de pensée à dix ans

Prenons la comptabilité, parce que c'est un métier où le raisonnement est facile à suivre, mais l'exemple vaut pour la révision, le contrôle de gestion, la conformité, l'actuariat.

Année zéro. Une entreprise automatise sa comptabilité courante. Les écritures simples, les rapprochements, les imputations récurrentes. Le gain est réel et immédiat.

Année deux. Les cas simples ne remontent plus à personne. L'équipe comptable ne traite plus que les cas complexes. C'est présenté comme une montée en compétence, et c'en est une, pour les personnes déjà formées.

Année quatre. Le premier poste junior n'est pas remplacé. Il n'y a plus assez de volume simple pour justifier une embauche. Personne ne s'en inquiète : la productivité est excellente.

Année huit. Il n'y a plus de junior du tout. Les seniors sont ceux qui ont appris avant l'automatisation. Le savoir tient dans quelques têtes, et il ne se reproduit plus.

Année douze. Les seniors partent à la retraite. Le système tourne. Il tourne même très bien. Simplement, plus personne dans l'entreprise ne sait ce qu'il fait, ni comment vérifier qu'il le fait correctement.

Année quinze. Une anomalie apparaît. Elle est ancienne, elle a été répliquée des centaines de milliers de fois, et personne n'a la compétence pour remonter à sa cause. On ne peut ni réparer le système, ni le remplacer, parce que le remplacer supposerait de savoir ce qu'il faisait.

## L'ironie de Bainbridge, étendue

Ce raisonnement n'est pas nouveau et c'est une bonne nouvelle : il est documenté depuis quarante ans.

Lisanne Bainbridge, en 1983, formulait les ironies de l'automatisation. Plus un système est automatisé, plus l'opérateur humain devient indispensable au moment critique — puisqu'on ne lui laisse précisément que les situations que la machine ne sait pas traiter. Et moins il en est capable, parce qu'il n'a plus jamais l'occasion de pratiquer. La compétence se maintient par l'exercice, et l'automatisation supprime l'exercice.

Elle parlait de pilotes et de salles de contrôle. Deux choses ont changé, et les deux aggravent le problème.

Le domaine s'est déplacé vers les fonctions de jugement en entreprise. Comptabilité, révision, conformité, analyse. Ce sont des métiers où l'erreur ne provoque pas de crash. Il n'y a aucun événement qui force la révélation. La dérive peut durer des années sans jamais produire le signal qui obligerait à regarder.

Et le mécanisme n'est plus seulement individuel. Chez Bainbridge, un opérateur perd sa compétence faute de pratique. Ici, c'est la filière de formation qui disparaît. Un réviseur se forme en révisant, y compris des dossiers ennuyeux, répétitifs, sans intérêt intellectuel. Ces dossiers sont exactement ceux que l'automatisation absorbe en premier, parce qu'ils sont les plus faciles à automatiser.

La compétence n'est donc pas perdue. Elle cesse d'être produite. Et la différence est décisive, parce qu'une compétence perdue peut être retrouvée par quelqu'un qui l'avait, tandis qu'une compétence qui n'est plus fabriquée met une génération à se voir.

Le terrain d'entraînement disparaît avant l'expertise, et de façon totalement invisible. Personne ne mesure les dossiers d'apprentissage supprimés.

## Ce que j'ai vu, et qui n'est pas une opinion

Je pourrais m'arrêter là, mais un essai critique sur l'automatisation n'a pas beaucoup de valeur s'il n'apporte que des raisonnements.

J'ai construit un système de migration de données en environnement régulé, entièrement automatisé, avec réconciliation exhaustive sur 25 000 dossiers. Il fonctionne : zéro écart entre l'ancien système et le nouveau, calculs compris.

Et il m'a montré quelque chose que je ne cherchais pas.

En établissant les correspondances entre les couches, on rend visible ce qui ne se rattache à rien. Des montants comptables sans contrepartie métier. Des ajustements répétés sur des exercices consécutifs, dont plus personne ne connaît l'origine. Des règles appliquées différemment selon la période, sans qu'aucune décision documentée n'explique le changement.

Ce ne sont pas des interprétations. Ce sont des écarts chiffrés. On peut discuter de leur cause, on ne peut pas discuter de leur existence.

C'est ce qui rend le diagnostic par l'automatisation différent du diagnostic par le conseil. Un consultant apporte une lecture, que la direction peut légitimement contester. Une tentative d'automatisation apporte des faits, parce qu'une machine ne peut pas exécuter un processus incohérent sans que l'incohérence apparaisse.

La tentative d'automatiser est le diagnostic de processus le moins cher qui existe. Et nous l'utilisons uniquement comme un moyen d'aller plus vite.

## Ce qu'il faudrait faire à la place

Trois choses, aucune exotique.

**Garder les compteurs allumés après le déploiement.** Taux d'exception, contradictions entre intervenants, branches où l'information manque, contournements, temps d'attente aux points de passage, propriété des décisions. Ces indicateurs sont mesurés pendant le projet et abandonnés après la mise en production, précisément au moment où ils deviennent le seul capteur restant.

**Réconcilier périodiquement les couches entre elles.** Pas seulement contrôler chaque système dans son propre référentiel, mais vérifier que la comptabilité reflète le métier, que le métier reflète l'opérationnel. Ce contrôle n'appartient à personne, c'est pour ça qu'il n'est jamais fait.

**Préserver délibérément un terrain d'entraînement humain.** C'est la mesure la plus coûteuse et la plus contre-intuitive : conserver volontairement un flux de cas simples traités à la main, non pour la productivité, mais pour continuer à fabriquer de la compétence. Aucun modèle financier ne justifie cette dépense, et c'est exactement pourquoi elle disparaîtra partout.

---

La question à poser avant d'automatiser n'est pas « combien de temps allons-nous gagner ». C'est : que mesurions-nous grâce à ce processus, et qu'allons-nous mesurer une fois qu'il sera silencieux ?

---

*Références : Lisanne Bainbridge, « Ironies of Automation », Automatica, 1983. David Graeber, Bullshit Jobs, 2018. Steven Alter, « Theory of Workarounds », 2014. Erik Hollnagel sur l'écart entre le travail imaginé et le travail réalisé.*

*Cet essai s'appuie sur [une expérience de migration documentée ici](/experiments/boucle-agents-migration/) et prolonge [La comptabilité est la mémoire des pannes qu'on n'a pas réparées](/essays/comptabilite-memoire-des-pannes/).*
