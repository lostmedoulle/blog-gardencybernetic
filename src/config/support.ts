/**
 * Source unique de vérité pour le soutien / sponsoring.
 * Modifier ici met à jour la page /support, l'encart de fin d'article
 * et le lien de la barre latérale.
 */
export const SUPPORT = {
  /** Page GitHub Sponsors. Nécessite d'activer Sponsors sur le compte. */
  url: 'https://github.com/sponsors/lostmedoulle',
  /** Palier principal mis en avant. */
  tier: {
    amount: 10,
    currency: 'CHF',
    period: 'mois',
    label: 'Jardinier',
  },
  /** Ce que le sponsor obtient concrètement. Garder honnête et tenable. */
  perks: [
    'Accès aux notes de recherche brutes avant publication',
    'Ton nom (ou celui de ton projet) sur la page Soutien',
    'Un post-mortem détaillé de plus par mois dans le Laboratoire',
    'Droit de proposer un sujet à tester dans les Expériences',
  ],
  /** Ce à quoi sert concrètement l'argent. */
  costs: [
    { label: 'Nom de domaine + hébergement', detail: '~4 CHF / mois' },
    { label: 'API et crédits de calcul pour les expériences', detail: '~20 CHF / mois' },
    { label: 'Livres et articles payants cités dans les essais', detail: 'variable' },
  ],
} as const;
