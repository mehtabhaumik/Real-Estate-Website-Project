import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-6 w-6 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-green-900 mb-2">Message Sent!</h3>
        <p className="text-sm text-green-700">Bhaumik will get back to you within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-bold text-green-700 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Inquire About Property</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
          <input 
            type="tel" 
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="(813) 555-0000"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Message</label>
          <textarea 
            required
            rows={4}
            className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="I'm interested in this property and would like to schedule a tour..."
          ></textarea>
        </div>

        <button 
          disabled={status === 'sending'}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center disabled:opacity-50"
        >
          {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
          <Send className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
