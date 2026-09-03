/**
 * Mesure d'audience.
 *
 * Le site est statique et servi par GitHub Pages : il n'y a ni serveur ni
 * journal d'accès. Compter les visites demande donc forcément un service
 * externe appelé depuis le navigateur.
 *
 * Contrainte propre à ce blog : /support affirme « ni tracker », et l'encart
 * sous chaque article répète « pas de tracker ». Les quatre fournisseurs
 * proposés ici sont sans cookie, sans identifiant persistant et sans profil
 * individuel — ils comptent des pages vues, pas des personnes. Un outil qui
 * suivrait les visiteurs d'un site à l'autre rendrait ces phrases fausses.
 *
 * Mise en service : renseigner `provider` et l'identifiant correspondant.
 * Tant que `provider` vaut 'none', aucun script n'est chargé.
 */
export const ANALYTICS = {
  /** 'none' | 'goatcounter' | 'plausible' | 'umami' | 'cloudflare' */
  provider: 'none',

  /** GoatCounter : le code du compte, pour <code>.goatcounter.com */
  goatcounterCode: '',

  /** Plausible : le domaine déclaré dans le tableau de bord */
  plausibleDomain: '',

  /** Umami : identifiant du site, et l'URL du script si auto-hébergé */
  umamiWebsiteId: '',
  umamiScriptUrl: 'https://cloud.umami.is/script.js',

  /** Cloudflare Web Analytics : le token du beacon */
  cloudflareToken: '',

  /** Compter aussi les visites en développement local. */
  enabledInDev: false,
};

/**
 * Décrit la balise à injecter, ou null s'il n'y a rien à charger.
 * Format compatible avec le tableau `head` de Starlight.
 */
export function analyticsTag(config = ANALYTICS, isProd = true) {
  const { provider } = config;
  if (provider === 'none') return null;
  if (!isProd && !config.enabledInDev) return null;

  switch (provider) {
    case 'goatcounter':
      if (!config.goatcounterCode) return null;
      return {
        tag: 'script',
        attrs: {
          async: true,
          src: 'https://gc.zgo.at/count.js',
          'data-goatcounter': `https://${config.goatcounterCode}.goatcounter.com/count`,
        },
      };

    case 'plausible':
      if (!config.plausibleDomain) return null;
      return {
        tag: 'script',
        attrs: {
          defer: true,
          src: 'https://plausible.io/js/script.js',
          'data-domain': config.plausibleDomain,
        },
      };

    case 'umami':
      if (!config.umamiWebsiteId) return null;
      return {
        tag: 'script',
        attrs: {
          defer: true,
          src: config.umamiScriptUrl,
          'data-website-id': config.umamiWebsiteId,
        },
      };

    case 'cloudflare':
      if (!config.cloudflareToken) return null;
      return {
        tag: 'script',
        attrs: {
          defer: true,
          src: 'https://static.cloudflareinsights.com/beacon.min.js',
          'data-cf-beacon': JSON.stringify({ token: config.cloudflareToken }),
        },
      };

    default:
      return null;
  }
}
