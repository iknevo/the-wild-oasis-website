# The Wild Oasis — Guest Website

The Wild Oasis website is the customer-facing booking application for a luxury cabin retreat in the Italian Dolomites. Guests can explore cabins, check availability, create reservations, and manage their stays from an authenticated account.

This repository is separate from the staff dashboard in [the-wild-oasis](https://github.com/iknevo/the-wild-oasis).

## Features

- Landing page and hotel/about pages
- Cabin catalogue with capacity, pricing, discounts, images, and descriptions
- Cabin detail pages with availability-aware date selection
- Reservation form with guest count and stay dates
- Booking price calculation based on nights, regular price, and discount
- Google sign-in through NextAuth
- Guest profile management
- Reservation history with edit and delete actions
- Server-side data fetching and route-level loading/error states
- Supabase-backed cabin, guest, booking, and settings data
- Optimistic reservation deletion in the account area

## Tech stack

- Next.js 15 App Router and React 19
- TypeScript
- Supabase Database
- NextAuth with Google OAuth
- Tailwind CSS 4
- date-fns for date calculations
- Vercel Analytics

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm, pnpm, Yarn, or Bun
- A Supabase project containing the cabin-booking schema
- Google OAuth credentials for authentication

### Installation

```bash
git clone https://github.com/iknevo/the-wild-oasis-website.git
cd the-wild-oasis-website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Create `.env.local` with:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_publishable_key
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
AUTH_SECRET=your_nextauth_secret
```

Configure the corresponding Google OAuth callback URL and Supabase access policies for the deployment origin. Keep all secrets server-side and do not commit `.env.local`.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Next.js with Turbopack |
| `pnpm build` | Create a production build |
| `pnpm start` | Start the production server |
| `pnpm prod` | Build and start the production server |
| `pnpm lint` | Run ESLint |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Guest-facing landing page |
| `/about` | About the retreat |
| `/cabins` | Browse cabins |
| `/cabins/:cabinId` | Cabin details and reservation form |
| `/login` | Google sign-in |
| `/account` | Authenticated account overview |
| `/account/profile` | Update guest profile |
| `/account/reservations` | View reservations |
| `/account/reservations/edit/:reservationId` | Edit a reservation |

## Project structure

```text
app/
├── _components/          # Shared guest-facing components
├── _contexts/            # Reservation context
├── _lib/                 # Auth, Supabase, server actions, and data access
├── account/              # Authenticated account and reservation routes
├── cabins/               # Cabin catalogue and reservation routes
└── api/                  # NextAuth and cabin API routes
public/                   # Branding and hotel imagery
```

## Architecture notes

The App Router uses server components and server actions for cabin and reservation operations. Supabase provides the persistence layer, while NextAuth establishes the guest session and maps Google accounts to local guest records. Availability is calculated from existing bookings before the date picker accepts a new reservation.

## Deployment

The application is designed for Vercel:

1. Configure the environment variables in the Vercel project.
2. Add the production URL to Google OAuth and NextAuth settings.
3. Configure Supabase policies and redirect URLs.
4. Build with `pnpm build` and deploy.

## License

No license file is currently included in the repository.
