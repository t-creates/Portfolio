# Vercel Firewall Checklist

Use this right before publish.

## 1. Bot Protection Managed Ruleset

In Vercel:

1. Open the project dashboard.
2. Go to `Firewall`.
3. Enable `Bot Protection` managed ruleset.
4. Start in `Challenge` mode.

Notes:

- Vercel documents Bot Protection as the managed ruleset that challenges non-browser traffic while allowing verified bots.
- If you run Cloudflare, Azure, or another reverse proxy in front of Vercel, Vercel notes that Bot Protection accuracy degrades significantly in that setup.

## 2. Contact Endpoint Hardening

The app now includes:

- Hidden honeypot field on both contact forms.
- Required field validation on `/api/contact`.
- Rejection of obviously automated submissions that fill the honeypot.

## 3. BotID

If you want route-level BotID later for `/api/contact`:

1. Fix local `node_modules` ownership so installs work without `sudo`.
2. Install `botid`.
3. Follow the BotID docs for:
   - `withBotId` in Next config
   - client challenge initialization
   - `checkBotId()` inside the API route

This project is not wired to BotID yet because the package install is currently blocked by filesystem permissions in `node_modules`.
