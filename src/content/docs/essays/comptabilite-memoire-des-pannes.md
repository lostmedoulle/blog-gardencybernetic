---
title: "La comptabilité est la mémoire des pannes qu'on n'a pas réparées"
description: "Chaque écart entre le réel et sa représentation comptable a dû être comblé par une écriture. Cette écriture est la trace d'un problème absorbé plutôt que traité."
dateCreated: 2026-09-03
dateUpdated: 2026-09-03
version: 0.1.0
status: hypothesis
confidence: medium
category: essay
tags: ["comptabilite", "contournements", "migration", "dette-organisationnelle", "diagnostic"]
featured: false
draft: false
authors: ["Med"]
language: fr
summary:
  - "La comptabilité est la seule couche contrainte de boucler. Chaque écart entre le réel et sa représentation a donc dû être comblé par une écriture."
  - "Cette écriture est une cicatrice : elle marque l'endroit exact où un problème a été absorbé plutôt que traité."
  - "Le système devient irréparable non pas quand le bricolage apparaît, mais quand part la personne qui en connaissait le motif. Un ajustement légitime et une compensation d'erreur se ressemblent parfaitement dans le grand livre."
  - "Une migration est le seul moment où les deux couches sont comparées frontalement. Une migration parfaitement fidèle referme cette fenêtre."
readingTime: 11
---

J'ai construit un système qui déplace des données d'un logiciel vers un autre sans en altérer une seule. Il fonctionne. C'est en le regardant tourner que j'ai compris ce qu'il transportait vraiment.

## La comptabilité est la seule couche qui doit boucler

Les données métier peuvent dériver longtemps sans que rien ne casse. Rien ne les force à s'accorder entre elles. Un champ mal renseigné, une relation orpheline, une convention abandonnée : le système continue de tourner, et l'incohérence attend.

La comptabilité n'a pas cette liberté. Elle doit équilibrer. Elle est auditée, bouclée, arrêtée à des dates fixes. Elle a une contrainte externe forte, et c'est ce qui la rend intéressante.

Quand le réel et sa représentation comptable divergent, l'écart ne peut pas simplement rester là. Quelqu'un doit le combler. Une écriture de régularisation, un ajustement manuel, une reprise. Le compte est équilibré, l'exercice est clos, l'auditeur est satisfait.

Cette écriture est une cicatrice. Elle marque l'endroit exact où un problème a été absorbé plutôt que traité.

## Le mécanisme, en cinq temps

Ce qui suit se répète, presque toujours dans le même ordre.

Une divergence apparaît entre le réel et sa représentation. Un cas de figure que le processus n'avait pas prévu.

Personne ne remonte à la cause. Pas par négligence — parce que la clôture est dans huit jours, que la personne qui connaît ce dossier est en congé, et que le montant est petit.

Un ajustement manuel comble l'écart. Il est légitime, documenté, tracé. À ce stade, tout est propre.

La comptabilité boucle. Le signal s'éteint. Il n'existe plus aucun mécanisme pour rappeler que la cause n'a pas été traitée, puisque le symptôme a disparu.

L'année suivante, l'écart réapparaît. On refait le même ajustement. Il entre dans la procédure de clôture. Dix ans plus tard, il fait partie du processus, et plus personne ne sait pourquoi il existe.

Ce mécanisme a un nom dans la littérature : c'est un *workaround*, au sens de Steven Alter. Ce qui le rend particulier en comptabilité, c'est qu'il est daté. Chaque ajustement porte un exercice. L'archive est chronologique et lisible.

![Le mécanisme en cinq temps : une divergence apparaît, personne ne remonte à la cause, un ajustement manuel comble l'écart, la comptabilité boucle et le signal s'éteint, puis l'ajustement se répète chaque année jusqu'à faire partie du processus. Le système devient irréparable quand part la personne qui connaissait le motif.](../../../assets/diagrams/mecanisme-cinq-temps.svg)

*Le point de bascule n'est pas à l'étape 3, où le bricolage naît, mais après l'étape 5, quand sa raison disparaît avec la personne.*

## Trois causes, et la troisième est la plus grave

Les bricolages ne viennent pas d'un manque de rigueur. Ils viennent de trois manques qui se combinent.

**Une règle jamais écrite.** Le cas particulier a toujours été traité par une personne qui savait. Ce savoir n'a jamais eu à devenir explicite, parce qu'il n'a jamais eu à être transmis à une machine.

**Un processus jamais formalisé.** Ce qui est fait ne correspond pas à ce qui est décrit — la distance classique entre le travail tel qu'imaginé et le travail tel que réalisé, chez Hollnagel. La procédure officielle décrit un chemin ; les gens en prennent un autre, plus court, et il fonctionne.

**Un turnover qui efface la mémoire.** C'est le facteur décisif. Tant que la personne qui a créé l'ajustement est là, celui-ci reste négociable : quelqu'un se souvient qu'il était provisoire, et pourquoi. Quand elle part, l'écriture survit sans son motif.

Le système devient irréparable à ce moment précis. Pas quand le bricolage apparaît — quand la raison du bricolage disparaît. Parce qu'on ne peut alors plus distinguer un ajustement légitime d'une compensation d'erreur. Les deux se ressemblent parfaitement dans le grand livre.

## Pourquoi la migration révèle tout

Une migration est le seul moment où deux couches sont comparées frontalement.

En fonctionnement normal, la comptabilité et les données métier vivent séparément. Elles sont supposées se refléter, mais personne ne le vérifie systématiquement, parce qu'aucun processus ne l'exige et qu'aucun auditeur ne le demande sous cette forme. Chacune est contrôlée dans son propre référentiel.

Quand on bascule vers un nouveau système, il faut établir des correspondances explicites. Et les correspondances qui n'existent pas deviennent soudain visibles. Un montant comptable sans contrepartie métier. Une entité métier sans traduction comptable. Un total qui ne se reconstitue qu'à condition d'inclure une écriture dont personne ne connaît l'origine.

Ce n'est pas un problème de migration. C'est le système source qui parle pour la première fois depuis vingt ans.

## Ce n'est pas une opinion de consultant

C'est le point qui me paraît important, et il est rarement disponible.

Un diagnostic organisationnel est habituellement une lecture. Un consultant observe, interprète, propose une thèse. La direction peut la contester, et souvent elle a raison de le faire : c'est un avis contre un autre.

Un écart de réconciliation n'est pas un avis. C'est un chiffre. Un montant qui ne se retrouve pas, une entité qui ne se rattache pas, une série d'ajustements sur douze exercices consécutifs. On peut discuter de la cause. On ne peut pas discuter de l'existence.

La migration produit donc un diagnostic organisationnel factuel, comme sous-produit d'une opération technique. C'est le seul contexte que je connaisse où l'incohérence d'un processus devient une donnée chiffrée plutôt qu'une impression.

## Le contrôle que personne ne fait

Il existe un geste concret, peu coûteux, et presque toujours omis.

Après la bascule, on vérifie que les données ont été correctement transportées. C'est le contrôle standard, et il est exigé par tous les cahiers des charges.

Ce qui n'est jamais exigé, c'est la réconciliation entre la couche comptable et la couche métier dans le nouveau système. Est-ce que la comptabilité reflète effectivement les assurés ? Est-ce que le comptable concorde avec l'ERP de production ? Cette question n'appartient à personne. Elle tombe entre les périmètres : l'équipe migration a livré son scope, la comptabilité a bouclé le sien, chacun a raison dans son référentiel.

C'est pourtant là que le diagnostic se joue. Le contrôle est simple, il est automatisable, et il ne demande que de décider qu'il doit exister.

## Une migration parfaitement fidèle est un échec de diagnostic

Mon système transporte les données à l'identique. C'est sa qualité principale et je l'ai construit pour ça.

C'est aussi sa limite. Il a migré les vingt ans de cicatrices avec la même rigueur que les données justes. Zéro écart : les bricolages sont arrivés intacts de l'autre côté, désormais installés dans un système neuf où plus personne ne les questionnera avant longtemps.

Et il a refermé la seule fenêtre où ils étaient visibles.

La conclusion n'est pas qu'il faut migrer moins bien. C'est que la fidélité et la propreté sont deux objectifs distincts, que personne ne budgète séparément, et que le second n'a qu'une fenêtre d'opportunité : le moment où l'on ouvre le système.

## Ce que ça implique pour l'automatisation

Le raisonnement vaut au-delà des données.

Automatiser un processus, c'est le migrer d'un support humain vers un support machine. Le mécanisme est identique. Si l'on transpose fidèlement, on encode les contournements avec le reste.

Avec une différence qui aggrave tout : un contournement humain reste négociable, parce qu'il dépend d'une personne qui peut expliquer, adapter, refuser. Codé, il devient la spécification. Il cesse d'être une exception pour devenir la règle, et il perd le seul mécanisme qui permettait de le remettre en question.

C'est le sujet de [*Nous automatisons des processus que personne n'a diagnostiqués*](/essays/automatiser-sans-diagnostiquer/).

---

*Statut : hypothèse. Elle s'appuie sur un cas réel de migration en environnement régulé, décrit dans [cette expérience](/experiments/boucle-agents-migration/). Un cas ne suffit pas à établir un mécanisme général. Si vous avez observé la même chose — ou son contraire — écrivez-moi.*
