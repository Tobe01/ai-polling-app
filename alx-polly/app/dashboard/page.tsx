import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// This would normally be fetched from Supabase
const mockPolls = [
  {
    id: '1',
    title: 'Favorite Programming Language',
    description: 'What programming language do you prefer to work with?',
    created_at: '2025-01-15',
    votes: 42,
  },
  {
    id: '2',
    title: 'Best Frontend Framework',
    description: 'Which frontend framework do you think is the best?',
    created_at: '2025-01-10',
    votes: 28,
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Polls</h1>
        <Link href="/dashboard/create">
          <Button>Create New Poll</Button>
        </Link>
      </div>
      
      {mockPolls.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-semibold">You haven&apos;t created any polls yet</h2>
          <p className="text-muted-foreground mt-2 mb-6">Create your first poll to get started</p>
          <Link href="/dashboard/create">
            <Button>Create Your First Poll</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockPolls.map((poll) => (
            <Card key={poll.id}>
              <CardHeader>
                <CardTitle>{poll.title}</CardTitle>
                <CardDescription>{poll.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <p>Created: {poll.created_at}</p>
                  <p>Total votes: {poll.votes}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/polls/${poll.id}`}>View Results</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href={`/dashboard/polls/${poll.id}/share`}>Share</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}