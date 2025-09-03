import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// This would normally be fetched from Supabase based on the poll ID
const mockPollData = {
  id: '1',
  title: 'Favorite Programming Language',
  description: 'What programming language do you prefer to work with?',
  created_at: '2025-01-15',
  options: [
    { id: '1', text: 'JavaScript', votes: 15 },
    { id: '2', text: 'Python', votes: 12 },
    { id: '3', text: 'TypeScript', votes: 8 },
    { id: '4', text: 'Rust', votes: 7 },
  ],
  total_votes: 42,
};

export default function PollDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const poll = mockPollData; // In a real app, we would fetch the poll by ID
  
  // Calculate percentages for the progress bars
  const calculatePercentage = (votes: number) => {
    return poll.total_votes > 0 ? Math.round((votes / poll.total_votes) * 100) : 0;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Poll Results</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Back to Polls</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={`/dashboard/polls/${id}/share`}>Share Poll</Link>
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{poll.title}</CardTitle>
          <CardDescription>{poll.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-muted-foreground mb-4">
            <p>Created: {poll.created_at}</p>
            <p>Total votes: {poll.total_votes}</p>
          </div>
          
          <div className="space-y-4">
            {poll.options.map((option) => (
              <div key={option.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{option.text}</span>
                  <span>{option.votes} votes ({calculatePercentage(option.votes)}%)</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${calculatePercentage(option.votes)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}