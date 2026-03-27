import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed to newsletter!');
      setEmail('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Stay Updated</h3>
              <p className="text-blue-100">Subscribe to our newsletter for latest updates</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white dark:bg-gray-800 w-full md:w-80"
            />
            <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
