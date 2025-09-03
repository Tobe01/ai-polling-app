import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/dashboard" className="font-bold text-2xl">Polly</Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost">My Polls</Button>
            </Link>
            <Link href="/dashboard/create">
              <Button>Create Poll</Button>
            </Link>
            <Button variant="outline" asChild>
              <Link href="/auth/sign-in">Sign Out</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-6">
        {children}
      </main>
      <footer className="border-t py-4">
        <div className="container flex justify-between text-sm text-muted-foreground">
          <p>© 2025 Polly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}