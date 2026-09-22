/** Production site URL (no trailing slash). */
export const SITE_URL = 'https://sippo.in';

/** Public-folder filename served at /og-share.png */
export const SHARE_IMAGE_FILE = 'og-share.png';

/**
 * Bump when replacing the share image file so crawlers refetch even on the same commit.
 * Combined with the git short hash at build time for automatic deploy cache busting.
 */
export const SHARE_IMAGE_REVISION = '1';

export const SITE_TITLE =
  'Sippo | Expert-Led, Smart, Swift & Secure Financial Growth';

export const SITE_DESCRIPTION =
  'Sippo helps individuals and families grow with Mutual Funds, FDs, Bonds, and Loans — expert-led guidance, calculators, and clear digital tools.';
