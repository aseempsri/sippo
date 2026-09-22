# Sippo

Client-focused financial growth website.

Expert-led guidance across Mutual Funds, FDs, Bonds, and Loans — smart, swift, and secure.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Live site

Every push to `main` deploys automatically via `.github/workflows/deployment.yaml`.

**Custom domain:** https://sippo.in/

**GitHub Pages fallback:** https://aseempsri.github.io/sippo/

### Custom domain setup

1. In Hostinger DNS for `sippo.in`, point apex `A` records to GitHub Pages IPs and `www` CNAME to `aseempsri.github.io`.
2. In GitHub → **Settings → Pages**, set custom domain to `sippo.in` and enable **Enforce HTTPS** after DNS propagates.
3. `public/CNAME` in this repo is already set to `sippo.in`.
