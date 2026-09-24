---
title: "Le paradoxe de la dynamo : l'IA ne rapporte rien sans structure"
description: "Pourquoi la même IA transforme une entreprise digitalisée et échoue dans une autre. Une leçon vieille de cent ans."
dateCreated: 2026-09-20
dateUpdated: 2026-09-24
version: 0.2.0
status: hypothesis
confidence: medium
category: essay
tags: ["ia", "organisation", "productivite", "cybernetique"]
featured: false
draft: false
authors: ["Med"]
language: fr
summary:
  - "L'électricité n'a produit ses gains de productivité que lorsqu'on a repensé l'usine, pas quand on a remplacé la machine à vapeur par un moteur."
  - "L'IA suit la même loi : sans système structuré en dessous, l'automatisation reste impossible."
  - "Chez Paul David, le gain arrive surtout avec les usines neuves : on ne rase pas une usine qui fonctionne. L'entreprise qui naît est donc le terrain le plus favorable."
  - "Dans l'entreprise peu digitalisée, le travail utile n'est pas l'IA mais la structuration. C'est du conseil, pas un produit."
  - "Les outils deviennent gratuits, mais la structure reste chère."
# Révision prévue : 2027-03-20
---

En 1987, l'économiste Robert Solow faisait une remarque restée célèbre : on voyait des ordinateurs partout, sauf dans les statistiques de productivité. Trois ans plus tard, l'historien Paul David proposait une explication en regardant plus loin en arrière, vers l'électricité.

Les usines américaines ont commencé à s'électrifier à la fin du XIXe siècle. Pourtant, les gains de productivité ne sont apparus que des décennies plus tard. La raison est simple : au début, on a remplacé la grande machine à vapeur centrale par un gros moteur électrique, sans rien changer d'autre. L'usine restait organisée autour d'un arbre de transmission unique. Le vrai gain n'est venu que lorsqu'on a repensé l'usine elle-même : un moteur par machine, des ateliers disposés selon le flux de production et non selon la position de l'arbre.

Le point le plus important de l'analyse de David est souvent oublié : cette réorganisation s'est faite surtout dans des usines **neuves**. Les usines existantes représentaient un capital déjà investi, qui fonctionnait. Personne ne rase un bâtiment rentable pour gagner en efficacité. La nouvelle organisation s'est donc diffusée au rythme de la construction de nouvelles usines et du remplacement des anciennes. Le délai ne venait pas de la technologie, mais du stock de ce qui existait déjà.

## L'IA suit la même loi

Je vois ce phénomène tous les jours. Dans une organisation, beaucoup de personnes utilisent aujourd'hui l'IA pour résumer un document ou reformuler un e-mail. Très peu savent concevoir un système avec un périmètre, des limites et des tests. L'outil est partout, l'effet reste marginal.

Ce n'est pas un problème d'IA. C'est exactement ce qu'on vivait déjà quand on voulait automatiser dans les années 1970, 1990 ou 2010 : sans système structuré en dessous, l'automatisation est impossible. L'IA ne change pas cette loi. Elle rend simplement les opportunités plus visibles, parce qu'elle donne accès à davantage de choses.

## Deux types d'entreprises, deux approches

Mon hypothèse de travail distingue deux situations.

**L'entreprise déjà digitalisée.** Elle dépend d'un système central bien tenu, ses données sont propres, ses processus sont écrits quelque part. Là, tout va vite. On peut construire des couches autour du système central, tester, corriger, recommencer. L'IA s'y branche presque naturellement.

**L'entreprise peu digitalisée.** Les informations vivent dans des classeurs, des boîtes mail et la tête de trois personnes. Le logiciel comptable est à moitié configuré. Ici, apporter de l'IA revient à poser un moteur électrique dans une usine à vapeur. Le travail utile n'est pas l'IA : c'est la structuration. C'est du conseil, pas un produit.

Et il existe un troisième cas, souvent oublié : **l'entreprise qui naît**. C'est l'usine neuve de Paul David. Elle n'a pas d'existant à défendre : pas de classeurs historiques, pas d'habitudes installées, pas de logiciel à moitié configuré à contourner. Une TPE qui démarre peut être structurée dès le premier jour, pour une fraction du coût d'une restructuration ultérieure.

Si la leçon de l'électricité s'applique, les gains de l'IA se verront d'abord là, et non dans les organisations établies. Non parce que les nouvelles entreprises seraient plus douées, mais parce qu'elles n'ont rien à démolir.

## Ce que cela implique

Si cette hypothèse est juste, alors le travail de structuration — capturer les règles métier, les exceptions, les cas limites, et les rendre vérifiables — ne disparaîtra pas avec de meilleurs modèles. C'est l'investissement complémentaire sans lequel l'IA ne rapporte rien. Il se fait entreprise par entreprise, et il demande autant de connaissance du métier que de compétence technique.

Autrement dit : les outils deviennent gratuits, mais la structure reste chère.

Un biais à signaler : la structuration est précisément le travail que je pratique et que je veux développer. J'ai donc intérêt à ce que cette hypothèse soit juste. C'est une raison de plus pour fixer à l'avance ce qui la réfuterait.

## Ce qui invaliderait cette hypothèse

Des agents capables de structurer seuls une organisation désordonnée — en observant le travail réel, en déduisant les règles et en les faisant valider par les gens du métier — réduiraient fortement ce besoin.

« Je n'en vois pas encore » ne suffit pas comme test : cette phrase peut rester vraie indéfiniment. Je fixe donc un seuil. Je considérerai l'hypothèse comme réfutée si je rencontre, en production, un agent qui remplit ces trois conditions :

1. À partir des traces existantes d'une entreprise d'une vingtaine de personnes (e-mails, classeurs, écritures comptables), il produit une liste de règles métier écrites, exceptions comprises.
2. Au moins 80 % de ces règles sont validées sans correction par les personnes qui font le travail.
3. Le tout prend moins d'un mois et coûte moins qu'une mission de structuration classique.

Si une seule condition manque, l'agent est un outil qui accélère la structuration, pas un substitut. L'hypothèse tient alors, avec un coût plus faible. Je réviserai ce texte au plus tard en mars 2027.

## Sources

- Paul A. David, « The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox », *American Economic Review*, 1990.
- Robert Solow, compte rendu paru dans le *New York Times Book Review*, 1987.

---

*Cet essai prolonge [Nous automatisons des processus que personne n'a diagnostiqués](/essays/automatiser-sans-diagnostiquer/).*
