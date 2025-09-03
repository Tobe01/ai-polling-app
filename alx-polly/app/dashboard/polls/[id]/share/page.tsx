'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

export default function SharePoll({ params }: { params: { id: string } }) {
  const { id } = params;
  const pollUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/polls/${id}`;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pollUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Share Poll</h1>
        <Button variant="outline" asChild>
          <Link href={`/dashboard/polls/${id}`}>Back to Results</Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>QR Code</CardTitle>
            <CardDescription>
              Scan this QR code to access the poll directly
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="p-4 bg-white rounded-lg">
              <QRCodeSVG value={pollUrl} size={200} />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Share Link</CardTitle>
            <CardDescription>
              Copy and share this link with others
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input value={pollUrl} readOnly />
              <Button onClick={copyToClipboard}>
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <div className="pt-4">
              <h3 className="font-medium mb-2">Share on social media</h3>
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1">
                  Twitter
                </Button>
                <Button variant="outline" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1">
                  WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}