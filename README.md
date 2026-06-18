# Her HomeNest Market

A Colombo-focused marketplace interface connecting customers with women-led home businesses across food, baking, tailoring, crafts, beauty and tuition.

## Current implementation

This repository is a polished front-end prototype built with Next.js 15, React 19, TypeScript and Tailwind CSS. It includes:

- Customer search, category and area filters
- Verified-only public seller discovery
- Seller profiles, listings and WhatsApp contact links
- Homemaker onboarding and local dashboard workflows
- Admin approval, featuring and review moderation workflows
- Pending-review moderation before public display
- Responsive layouts and accessible navigation

## Important production boundary

Data and sessions currently use browser `localStorage`. This is suitable for product demonstrations and usability testing, but it is not secure multi-user infrastructure.

Before a public launch, replace the local store with:

- Server-side authentication with email/phone verification and password recovery
- Role-based authorization enforced by protected server routes
- A production database with migrations, backups and audit logs
- Secure image uploads and moderation
- Verified-order review eligibility
- Real enquiry/contact delivery and notification services
- Consent, privacy, terms, retention and account-deletion workflows
- Rate limiting, abuse reporting, CSRF protection and security monitoring
- Admin verification evidence stored privately with access controls

Do not collect NIC/passport documents or accept real customer payments through the current prototype.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Local preview accounts

- Homemaker email: `fatheema@homenest.lk`
- Admin email: `admin@herhomenest.lk`

Passwords are only checked for minimum length in this prototype. They are not authenticated or stored. Production authentication must be implemented before deployment.
