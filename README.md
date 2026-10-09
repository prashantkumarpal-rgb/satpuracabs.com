# Satpura Cabs

Local enquiry site for https://satpuracabs.com. Public pages are static HTML. Enquiries are stored in Cloudflare D1. The admin list is at `/admin`.

## Commands

```sh
npm install
npm test
npm run build
npm run dev
```

## Cloudflare

1. Buy nothing extra for SSL. Add the domain in Cloudflare, then at Namecheap change the nameservers to the ones Cloudflare shows. Use SSL/TLS mode **Full (strict)**.
2. Create a Pages project from this repository. Build command: `npm run build`. Output directory: `dist`.
3. Create the D1 database and apply the migration:

```sh
npx wrangler d1 create satpura-cabs
npx wrangler d1 execute satpura-cabs --remote --file=migrations/0001_enquiries.sql
```

4. Put the database id in `wrangler.toml`, and bind that D1 database to the Pages project as `DB`.
5. Set the build-time variables and the runtime secrets listed in `.env.example`.

Phone, WhatsApp, the Turnstile site key, and the GA4 id are read while the site is built. Changing them means running the build again. Resend, the Turnstile secret, the admin password, and D1 are read when an enquiry arrives.

## Still to supply

- Real phone and WhatsApp numbers
- Cloudflare Turnstile site key and secret
- Resend API key, from address, and the inbox that should receive enquiries
- Admin password
- GA4 measurement id, after the Analytics property exists
- Real fares, only after you decide them. Until then the site says “Ask for current fare”
- Your own photographs of cars and drivers, to replace the illustrations
