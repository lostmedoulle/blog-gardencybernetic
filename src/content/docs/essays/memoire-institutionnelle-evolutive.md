---
title: "Faire survivre l'expertise sans fossiliser l'expert"
description: "Une organisation ne perd pas seulement du savoir quand un expert part. Elle perd les expériences qui lui avaient appris quand la règle générale cesse de suffire."
dateCreated: 2026-09-04
dateUpdated: 2026-09-04
version: 0.1.0
status: hypothesis
confidence: medium
category: essay
tags: ["knowledge-management", "rag", "expertise", "llm", "organisation", "apprentissage", "tacit-knowledge", "institutional-memory"]
featured: false
draft: false
authors: ["Med"]
language: fr
summary:
  - "Une base de connaissances conserve l'état final du savoir : la règle, l'exception, la procédure. Elle perd le chemin qui y a mené — l'incident fondateur, les pistes abandonnées, le moment où l'expert a changé d'avis."
  - "Quand dix experts se contredisent, le désaccord n'est pas un défaut de documentation. Il signale une variable contextuelle que personne n'a écrite : le consensus l'aurait détruite, la contradiction la révèle."
  - "Une règle devrait transporter sa provenance — imposée, prudente, historique, expérimentale — sinon un modèle traite une habitude de quinze ans comme une obligation légale."
  - "L'objectif n'est pas de copier l'expert mais de garder son raisonnement interrogeable, et surtout contestable par le futur : préserver la connaissance sans préserver ses erreurs comme des dogmes."
readingTime: 14
---

> Une entreprise ne perd pas seulement de la connaissance lorsqu’un expert part.  
> Elle perd les expériences qui lui ont appris **quand la règle générale cesse d’être suffisante**.

Je pensais au départ qu’une base de connaissances servait à conserver ce qu’une organisation sait.

Je crois maintenant que ce problème est mal posé.

Une organisation n’est pas seulement un ensemble de règles, de procédures et de documents. Elle contient aussi des **trajectoires de raisonnement** : des années d’erreurs, de cas atypiques, de contraintes historiques, de décisions, de corrections et d’expériences qui ont progressivement façonné la manière dont certains experts abordent un problème.

Lorsque l’expert part, les documents restent souvent.

Mais le système qui permettait d’interpréter ces documents disparaît.

La question devient alors différente :

> Peut-on conserver non seulement la connaissance d’un expert, mais suffisamment de son contexte, de ses expériences et de ses changements de raisonnement pour que cette expertise puisse continuer à être interrogée, critiquée et enrichie après son départ ?

Ce texte est une hypothèse de travail.

Il ne s’agit pas de créer une copie numérique d’une personne.

Il s’agit de comprendre si l’on peut créer une **mémoire institutionnelle évolutive**.

---

## 1. Le problème : les entreprises capturent les conclusions, rarement les trajectoires

Lorsqu’un expert quitte une organisation, la réponse classique consiste à demander :

- d’écrire une procédure ;
- de documenter les exceptions ;
- de transmettre ses dossiers ;
- de former son successeur ;
- d’alimenter une knowledge base.

Tout cela est utile.

Mais cela capture principalement **l’état final de la connaissance**.

On conserve :

```text
Si A, alors B.
Si C, alors D.
Dans le cas E, appliquer l’exception F.
```

Ce qui disparaît est souvent beaucoup plus important :

```text
Pourquoi l’exception F existe-t-elle ?
Quel incident a conduit à sa création ?
Dans quel contexte la règle standard a-t-elle échoué ?
Quelles autres solutions ont été essayées ?
Pourquoi ont-elles été abandonnées ?
À partir de quand l’expert a-t-il changé d’avis ?
```

Autrement dit, nous conservons la destination et supprimons le chemin.

Or une grande partie du savoir-faire se trouve précisément dans ce chemin.

---

## Hypothèse 1 — Le savoir-faire est une trajectoire, pas un stock

Une compétence avancée ne semble pas résulter uniquement de l’accumulation de connaissances.

Elle résulte également d’une exposition répétée à certaines classes de problèmes.

Un auditeur expérimenté n’a pas seulement appris des normes comptables.

Il a vu :

- des milliers de rapprochements ;
- des anomalies qui semblaient insignifiantes ;
- des erreurs correctement formatées ;
- des justifications plausibles mais fausses ;
- des systèmes qui donnent le bon total pour de mauvaises raisons ;
- des contrôles qui fonctionnent jusqu’au jour où ils ne fonctionnent plus.

À force de répétition, certaines opérations deviennent presque réflexes.

Ce n’est plus simplement :

> « Je connais cette règle. »

C’est :

> « Quelque chose dans ce dossier ne ressemble pas aux cas normaux. »

Cette capacité est difficile à réduire à une procédure.

Elle ressemble davantage à un modèle construit progressivement par exposition.

C’est d’ailleurs assez proche de la manière dont nous entraînons des systèmes statistiques : le comportement final dépend de l’ensemble des expériences rencontrées, pas seulement de quelques règles isolées.

### Première conséquence

Si nous voulons transmettre une expertise, nous devrions peut-être documenter :

```text
Connaissance
+
Décisions
+
Exceptions
+
Erreurs
+
Hypothèses abandonnées
+
Contexte
+
Évolution dans le temps
```

et non uniquement la conclusion actuelle.

---

## Hypothèse 2 — Une trajectoire d’expertise peut devenir un accélérateur pour quelqu’un d’autre

Il serait naïf de penser qu’une autre personne reproduira exactement la même progression.

Les individus, les contextes et les capacités diffèrent.

Mais une trajectoire documentée peut servir de **carte d’expériences**.

Prenons un expert ayant mis quinze ans à développer une certaine capacité.

La question intéressante n’est pas :

> « Comment faire penser un junior exactement comme cet expert ? »

Mais :

> « Quelles expériences ont réellement modifié sa manière de raisonner ? »

Peut-être que certaines étapes ont joué un rôle disproportionné :

- trois années passées sur un système particulièrement difficile ;
- plusieurs migrations ratées ;
- une période d’audit intensif ;
- une confrontation avec un expert contradicteur ;
- un incident ayant révélé la faiblesse d’un contrôle ;
- la construction répétée d’outils de réconciliation.

Si ces accélérateurs sont identifiables, une formation pourrait chercher à reproduire **l’exposition utile**, sans reproduire quinze années de hasard.

Ce n’est pas promettre :

> « Nous allons compresser quinze ans d’expérience en six mois. »

C’est poser une question plus raisonnable :

> « Peut-on réduire la quantité d’expérience inutile nécessaire avant de rencontrer les expériences véritablement formatrices ? »

---

## 2. Le problème des experts qui se contredisent

Dans une organisation réelle, dix experts ne donnent pas nécessairement dix fois la même réponse.

C’est souvent considéré comme un problème de documentation.

Je pense que c’est une erreur.

Le désaccord peut contenir de l’information.

Imaginons trois experts :

```text
Expert A → toujours appliquer X
Expert B → appliquer Y
Expert C → X, sauf dans certains dossiers où Y est préférable
```

La mauvaise question serait :

> Qui a raison ?

La meilleure question est :

> Dans quel contexte chacun a-t-il raison ?

Le désaccord peut révéler une variable cachée :

```text
Si contexte = P → X
Si contexte = Q → Y
```

Le consensus aurait alors détruit de l’information.

La contradiction l’a révélée.

---

## Hypothèse 3 — La contradiction entre experts peut être une méthode d’élicitation

Une knowledge base traditionnelle cherche souvent à produire **une réponse canonique**.

Une base d’expertise devrait peut-être conserver temporairement les divergences.

Par exemple :

```yaml
question: "Comment traiter le cas X ?"

views:
  - expert: A
    answer: Y
    context: ...
    confidence: high

  - expert: B
    answer: Z
    context: ...
    confidence: high

status: unresolved
```

Puis rechercher :

- une variable contextuelle manquante ;
- une différence de période ;
- une différence contractuelle ;
- une règle locale ;
- une évolution réglementaire ;
- une simple erreur.

Le résultat final n’est alors plus nécessairement une règle unique.

Il peut devenir :

```text
Règle générale
+
conditions d’application
+
exceptions
+
origine
+
niveau de confiance
+
preuves
```

C’est beaucoup plus proche de l’expertise réelle.

---

## 3. Ajouter un deuxième regard : l’intelligence générale contre l’intelligence située

Supposons maintenant que l’expert ait quitté l’entreprise.

Son corpus contient :

- ses décisions ;
- ses méthodes ;
- ses cas ;
- ses exceptions ;
- ses erreurs ;
- les raisons de ses changements d’avis.

Un modèle peut exploiter ce corpus.

Mais il existe un risque évident :

> reproduire indéfiniment les erreurs historiques de l’organisation.

Il faut donc un deuxième système.

Je distingue deux formes d’intelligence.

### Intelligence générale

Elle connaît potentiellement :

- la théorie ;
- les standards ;
- la réglementation publique ;
- les pratiques usuelles ;
- les connaissances externes ;
- de nouvelles méthodes apparues après le départ de l’expert.

### Intelligence située

Elle connaît :

- pourquoi cette organisation fonctionne ainsi ;
- les contraintes historiques ;
- les exceptions ;
- les conventions internes ;
- les incidents passés ;
- les arbitrages de l’expert ;
- les particularités du système.

Aucune des deux ne suffit seule.

---

## Hypothèse 4 — La valeur vient de la tension entre intelligence générale et intelligence située

Imaginons le dialogue suivant :

```text
LLM général :
"La norme exige X. La pratique Y n’est pas nécessaire."

Mémoire de l’entreprise :
"Correct. Y n’est pas obligatoire.
Elle a été introduite après trois erreurs opérationnelles
que X n’avait pas détectées."

LLM général :
"Y dépasse donc l’exigence réglementaire.
Est-elle toujours nécessaire avec le nouveau système ?"
```

Cette dernière question est précisément celle qu’une organisation devrait continuellement se poser.

La mémoire interne protège contre l’oubli.

L’intelligence générale protège contre la fossilisation.

Le système intéressant n’est donc pas :

```text
RAG → réponse
```

mais plutôt :

```text
        connaissances externes
                 │
                 ▼
       intelligence générale
                 │
             contradiction
                 │
                 ▼
      mémoire institutionnelle
                 │
           contexte historique
                 │
                 ▼
        hypothèse actualisée
                 │
                 ▼
          validation réelle
```

Le désaccord devient ici une fonction du système.

---

## 4. Toutes les règles internes n’ont pas le même statut

Une difficulté apparaît rapidement.

Une entreprise possède énormément de règles.

Mais leurs origines sont différentes.

Certaines sont imposées.

Certaines sont prudentes.

Certaines étaient nécessaires il y a quinze ans.

Certaines existent parce qu’un logiciel ancien ne permettait pas de faire autrement.

Certaines sont simplement mauvaises.

Si tout est mis dans la même knowledge base, l’IA traite facilement une habitude historique comme une vérité métier.

Il faut donc conserver **la nature de la règle**.

Je proposerais provisoirement les catégories suivantes.

### Normative

Ce que la loi, la norme ou le contrat exige.

### Permitted

Ce que le cadre autorise sans l’imposer.

### Organizational

Ce que l’entreprise a volontairement décidé de faire.

### Experiential

Ce qui provient principalement de l’expérience accumulée des experts.

### Experimental

Ce qui est actuellement testé mais n’est pas encore considéré comme une pratique stable.

### Deprecated

Ce qui était valable dans un ancien contexte mais ne devrait plus être appliqué.

Cette taxonomie est probablement incomplète.

Mais elle évite une erreur importante :

> confondre « nous faisons ainsi » avec « il faut faire ainsi ».

---

## Hypothèse 5 — La provenance d’une règle est aussi importante que son contenu

Une règle devrait donc idéalement transporter avec elle :

```yaml
rule: "..."

type: organizational
status: active

valid_from: ...
valid_to: ...

origin:
  event: ...
  expert: ...
  regulation: ...

reason: ...

evidence:
  - ...

counterexamples:
  - ...

confidence: ...

review_trigger:
  - regulation_change
  - system_change
```

Cette structure transforme la knowledge base.

Elle ne répond plus seulement :

> Quelle est la règle ?

Elle permet aussi de demander :

> Pourquoi existe-t-elle encore ?

---

## 5. Faire survivre l’expert sans créer un fantôme autoritaire

Il serait tentant de dire :

> « Nous avons digitalisé l’expert. »

Je pense que ce serait faux.

Un corpus ne contient pas :

- sa conscience ;
- son expérience vécue ;
- ses motivations complètes ;
- toutes les informations implicites qui l’ont influencé.

Ce que nous pouvons probablement conserver est plus limité :

> une approximation interrogable de certains schémas professionnels observés.

L’agent résultant ne devrait donc jamais répondre :

> « L’expert aurait fait X. »

Il devrait plutôt pouvoir répondre :

> « Dans les cas documentés présentant ces caractéristiques, l’expert choisissait généralement X pour les raisons suivantes. »

La différence est fondamentale.

La première phrase fabrique une autorité artificielle.

La seconde produit une hypothèse traçable.

---

## Hypothèse 6 — Le bon objectif n’est pas le digital twin humain, mais le digital twin du raisonnement professionnel observable

L’objectif devient alors beaucoup plus réaliste.

Ne pas copier une personne.

Mais préserver suffisamment de traces pour reconstruire :

```text
Situation
→ perception du problème
→ options considérées
→ décision
→ résultat
→ révision éventuelle
```

À mesure que le corpus grandit, il devient possible d’observer non seulement **ce que l’expert pensait**, mais **comment sa pensée a évolué**.

Par exemple :

```text
2026 :
"Automatiser avec un agent."

2028 :
"Agent seulement pour les zones non déterministes."

2031 :
"Cette classe de problème est désormais entièrement déterministe."
```

La contradiction temporelle n’est alors plus un défaut du corpus.

Elle devient la donnée principale.

---

## 6. Une entreprise comme laboratoire de recherche appliquée

Cette idée conduit à une autre intuition.

Pour extraire réellement l’expertise d’une organisation, une simple campagne de documentation ne suffit probablement pas.

Il faut une démarche proche de la recherche appliquée.

Imaginons dix experts d’un même métier.

On pourrait :

1. les interroger séparément ;
2. recueillir des cas réels ;
3. comparer leurs décisions ;
4. identifier les contradictions ;
5. formuler des hypothèses expliquant ces divergences ;
6. rechercher les variables contextuelles ;
7. confronter les résultats à la réglementation et à la littérature externe ;
8. tester le framework sur de nouveaux cas ;
9. conserver les résultats négatifs ;
10. convertir progressivement ce qui résiste en règles, tests, formations ou outils.

Cela ressemble moins à du knowledge management classique qu’à une succession de **mini-travaux de recherche appliquée**.

---

## Hypothèse 7 — Certaines entreprises auront besoin de chercheurs internes de l’expertise

Le rôle ne serait ni exactement :

- Business Analyst ;
- Knowledge Manager ;
- Data Scientist ;
- Prompt Engineer ;
- chercheur académique.

Il serait situé entre ces disciplines.

Sa mission serait :

> identifier comment l’organisation produit ses bonnes décisions, formaliser les hypothèses, tester leur validité et transformer progressivement les résultats en capital réutilisable.

Le livrable ne serait donc pas seulement une documentation.

Il pourrait produire :

```text
articles de connaissance
+
arbres de décision
+
skills
+
tests
+
simulateurs
+
cas pédagogiques
+
datasets d’évaluation
+
agents contextuels
```

La recherche devient directement executable.

---

## 7. Le véritable actif pourrait être le corpus d’expériences, pas le modèle

Les modèles vont changer.

Le modèle utilisé aujourd’hui sera probablement remplacé.

Puis remplacé à nouveau.

Si l’architecture est correctement conçue, ce n’est pas grave.

Ce qui doit survivre est :

- le corpus ;
- les cas ;
- les contradictions ;
- les décisions ;
- les preuves ;
- les tests ;
- les changements de contexte.

Un nouveau modèle pourra alors reprendre le même matériau et peut-être produire de meilleures hypothèses.

Cela inverse encore la perspective habituelle :

```text
LLM = composant temporaire

Corpus d’expérience = actif durable
```

Et peut-être plus précisément :

```text
Trajectoire + provenance + critères de validation
= capital intellectuel transférable
```

---

## 8. Une conséquence étrange : le corpus peut continuer à évoluer après le départ de son auteur

Supposons qu’un expert quitte l’entreprise en 2030.

Son corpus reste.

En 2032, une réglementation change.

Le système général détecte :

```text
"Cette pratique semble désormais incompatible
avec la nouvelle réglementation."
```

L’agent contextuel retrouve :

```text
"Cette pratique avait été créée en 2025
pour répondre au problème X."
```

L’organisation peut alors demander :

```text
Le problème X existe-t-il toujours ?
La nouvelle règle le couvre-t-elle ?
Peut-on supprimer cette pratique ?
Doit-on la remplacer ?
```

L’expertise historique n’est donc pas seulement conservée.

Elle devient **contestable par le futur**.

C’est peut-être la propriété la plus importante du système.

> Préserver la connaissance sans préserver ses erreurs comme des dogmes.

---

## Thèse provisoire

La knowledge base d’entreprise du futur ne devrait peut-être pas être conçue comme une encyclopédie.

Elle devrait fonctionner comme une **mémoire institutionnelle expérimentale**.

Elle conserverait :

```text
ce que nous savons
+
ce que nous croyons
+
pourquoi nous le croyons
+
dans quel contexte
+
qui n’est pas d’accord
+
ce qui nous a fait changer d’avis
+
ce qui invaliderait la règle
```

Le rôle du LLM général serait de confronter continuellement cette mémoire :

- aux connaissances externes ;
- aux nouveaux événements ;
- aux changements réglementaires ;
- à de nouvelles technologies ;
- à d’autres solutions possibles.

Le rôle de l’agent contextuel serait de rappeler :

> « Avant de supprimer cette règle, voici pourquoi elle a été créée. »

Entre les deux apparaît quelque chose qui n’est ni un chatbot, ni simplement un RAG.

On pourrait provisoirement l’appeler :

> **Institutional Reasoning Memory**

ou :

> **Evolving Expertise System**

Le nom importe peu pour l’instant.

La question expérimentale est plus importante.

---

## Comment tester cette hypothèse

Cette idée n’a d’intérêt que si elle peut être falsifiée.

Je commencerais par une expérience limitée.

## Expérience A — Trois experts, vingt cas

Prendre trois experts du même domaine.

Leur présenter séparément vingt cas réels ou anonymisés.

Enregistrer :

```text
décision
+
justification
+
confiance
+
information jugée importante
```

Puis mesurer :

- taux de convergence ;
- taux de divergence ;
- nombre de divergences explicables par une variable contextuelle ;
- nombre de divergences correspondant à une erreur réelle ;
- nombre de nouvelles règles découvertes.

### Question

> La contradiction permet-elle réellement de découvrir plus de règles implicites qu’une interview classique ?

---

## Expérience B — Prédire la décision d’un expert

Construire un corpus sur un expert sans entraîner de modèle spécifique.

Pour une série de nouveaux cas, demander au système :

> « Selon les précédents documentés, quelle décision cet expert prendrait-il probablement, et pourquoi ? »

Comparer ensuite avec la décision réelle de l’expert.

Ne pas seulement mesurer l’exactitude de la réponse.

Mesurer également :

- les précédents correctement retrouvés ;
- les variables utilisées ;
- les raisons correctement reconstruites ;
- les cas où le système devrait explicitement dire **je ne sais pas**.

### Question

> Quelle proportion du raisonnement professionnel observable peut être reconstruite uniquement à partir de traces correctement structurées ?

---

## Expérience C — Faire challenger le corpus par un modèle général

Prendre les règles internes existantes et demander à un modèle disposant de sources externes de les classer :

```text
compatible avec la norme
plus stricte que la norme
probablement historique
potentiellement obsolète
contradictoire
origine indéterminée
```

Chaque anomalie serait ensuite revue par un expert.

### Question

> Un système externe peut-il identifier de la dette organisationnelle sans effacer les bonnes adaptations locales ?

---

## Ce que cette hypothèse ne prétend pas

Elle ne prétend pas :

- reproduire une conscience ;
- prédire parfaitement les décisions d’un humain ;
- remplacer l’expert ;
- transformer toute intuition en règle ;
- prouver qu’une pratique historique est correcte ;
- accélérer automatiquement l’apprentissage de tous les individus.

Elle pose seulement une possibilité :

> une partie de ce que nous appelons « expérience » laisse des traces suffisamment structurables pour devenir transmissible, testable et continuellement révisable.

Si cette hypothèse est correcte, alors le départ d’un expert ne devrait plus nécessairement provoquer la disparition complète de son ingénierie mentale professionnelle.

Une partie pourrait devenir un actif de l’organisation.

Pas une copie de l’expert.

Pas une statue.

Une trajectoire qui reste disponible pour être interrogée — et surtout contredite.

---

## Question ouverte

Nous avons passé des décennies à demander :

> Comment transférer la connaissance ?

La question pertinente à l’ère des modèles génératifs pourrait être différente :

> **Comment transférer les expériences qui ont produit cette connaissance, sans imposer à la génération suivante les conclusions de la génération précédente ?**

C’est probablement là que commence le vrai problème.
