---
title: "Le laboratoire des échecs"
description: "Pourquoi ce blog publie ses hypothèses réfutées au lieu de les effacer."
dateCreated: 2026-08-22
dateUpdated: 2026-08-22
version: 0.1.0
status: validated
confidence: high
category: lab
tags: ["post-mortem", "méthode", "cybernetics", "feedback"]
featured: false
draft: false
authors: ["Med"]
language: fr
readingTime: 4
---

## En une phrase

Le laboratoire est la partie du jardin où les hypothèses réfutées restent visibles, avec le raisonnement qui les a produites et le signal qui les a tuées.

## Le problème observé

La plupart des blogs techniques ne publient que les conclusions qui ont tenu. Le résultat est un corpus survivant : lisible, propre, et systématiquement biaisé.

Ce biais a un coût précis. Un lecteur qui reprend une idée validée ignore les cinq variantes voisines déjà essayées et déjà cassées. Il refait le trajet complet.

> Une conclusion sans ses échecs n'est pas un raccourci, c'est une carte amputée.

## Pourquoi cela compte ici

Ce jardin fonctionne sur un schéma explicite : chaque article porte un `status` et une `confidence`. Les valeurs `refuted`, `limited`, `deprecated` et `superseded` existent déjà dans le schéma.

Sans le laboratoire, ces statuts n'avaient nulle part où vivre. Un article réfuté restait rangé dans sa catégorie d'origine, où il contredisait silencieusement ses voisins.

## Mon hypothèse

<div class="highlight-cyan">

Si l'échec devient un format de publication de première classe — avec sa propre section, son propre gabarit et sa propre discipline de rédaction — alors la boucle de rétroaction du jardin se ferme réellement au lieu de s'arrêter à la première validation.

</div>

## Le gabarit

Chaque entrée du laboratoire suit la même structure, disponible dans `templates/lab.md` :

1. **Ce que je croyais** — l'hypothèse, formulée telle qu'elle était avant le test.
2. **Pourquoi je le croyais** — l'analogie, la lecture ou l'expérience qui l'a rendue crédible.
3. **Ce que j'ai tenté** — le protocole réel, pas le protocole idéal.
4. **Ce qui a cassé** — la mesure ou l'observation qui a tranché.
5. **Le signal que j'ai ignoré** — la partie la plus utile : ce qui était visible avant l'échec.
6. **Diagnostic** — pourquoi le modèle mental était faux, et pas seulement pourquoi le résultat était mauvais.
7. **Coût réel** — temps, argent, dette technique, coût d'opportunité.
8. **Ce que je garde / ce que j'abandonne** — la séparation explicite.
9. **Règle mise à jour** — l'heuristique qui remplace l'ancienne.

## Ce que le laboratoire n'est pas

Ce n'est pas un journal d'auto-flagellation, et ce n'est pas une collection d'anecdotes. Une entrée n'a sa place ici que si elle produit une règle mise à jour.

Un échec sans diagnostic n'est pas un post-mortem : c'est une plainte.

## Limites

Trois limites connues, à ce stade :

- **Biais de reconstruction.** Un post-mortem est écrit après coup, avec un savoir que l'auteur n'avait pas. La section « signal ignoré » est là pour rendre ce biais visible, pas pour l'éliminer.
- **Sélection persistante.** Je ne publie que les échecs que je comprends. Ceux que je n'ai pas compris restent invisibles, et ce sont probablement les plus intéressants.
- **Coût de rédaction.** Documenter un échec correctement prend plus de temps que documenter un succès, pour une gratification bien moindre. C'est la principale raison pour laquelle cette section peut mourir.

## Statut

`validated` — le format est en place. La question ouverte n'est pas sa valeur mais sa soutenabilité : est-ce que j'écrirai encore ici dans six mois ?

## Changelog

- **2026-08-22** — v0.1.0 : création de la section et du gabarit.
