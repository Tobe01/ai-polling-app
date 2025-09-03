'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// This would normally be fetched from Supabase based on the poll ID
const mockPollData = {
  id: '1',
  title: 'Favorite Programming Language',
  description: 'What programming language do you prefer to work with?',
  options: [
    { id: '1', text: 'JavaScript' },
    { id: '2', text: 'Python' },
    { id: '3', text: 'TypeScript' },
    { id: '4', text: 'Rust' },
  ],
};

export default function PollVote({ params }: { params: { id: string } }) {
  const { id } = params;
  const poll = mockPollData; // In a real app, we would fetch the poll by ID
  
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleVote = async () => {
    if (!selectedOption) return;
    
    setIsSubmitting(true);
    
    // This would normally be a Server Action to submit the vote to Supabase
    console.log('Submitting vote for option:', selectedOption);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{poll.title}</CardTitle>
          <CardDescription>{poll.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {poll.options.map((option) => (
              <div 
                key={option.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${selectedOption === option.id ? 'border-primary bg-primary/5' : 'hover:bg-secondary/50'}`}
                onClick={() => setSelectedOption(option.id)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full" 
            disabled={!selectedOption || isSubmitting}
            onClick={handleVote}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Vote'}
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showThankYou} onOpenChange={setShowThankYou}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Thank you for voting!</DialogTitle>
            <DialogDescription>
              Your vote has been recorded. You can close this dialog to see the results.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => setShowThankYou(false)}>View Results</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}