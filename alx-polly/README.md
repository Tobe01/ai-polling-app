# Polly - Polling App with QR Code Sharing

Polly is a web application that allows users to create polls, share them via unique links and QR codes, and collect votes from participants.

## Features

- User authentication (sign up, sign in)
- Create polls with multiple options
- View poll results with real-time updates
- Share polls via unique links and QR codes
- Responsive design for mobile and desktop

## Tech Stack

- **Language**: TypeScript
- **Framework**: Next.js (App Router)
- **Database & Auth**: Supabase
- **Styling**: Tailwind CSS with shadcn/ui components
- **QR Code Generation**: qrcode.react

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd alx-polly
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials.

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js App Router pages and layouts
  - `/auth`: Authentication-related pages (sign-in, sign-up)
  - `/dashboard`: User dashboard for managing polls
  - `/polls`: Public-facing poll pages for voting
- `/components`: React components
  - `/ui`: shadcn/ui components
- `/lib`: Utility functions and server actions
  - `supabase.ts`: Supabase client configuration
  - `actions.ts`: Server actions for data mutations

## Deployment

This application can be deployed on Vercel or any other platform that supports Next.js applications.

```bash
npm run build
```

## License

This project is licensed under the MIT License.
