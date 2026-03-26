import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const PREDEFINED_QA = [
  { q: 'What areas do you cover?', a: 'We primarily cover Riverview, Brandon, Apollo Beach, and the greater Tampa Bay area.' },
  { q: 'How do I schedule a viewing?', a: 'You can schedule a viewing by clicking the "Contact Agent" button on any listing page or calling us directly at (813) 555-0123.' },
  { q: 'What are the current interest rates?', a: 'Interest rates vary daily. Currently, they are around 6.5% for a 30-year fixed mortgage, but we recommend speaking with our preferred lenders for exact quotes.' },
  { q: 'Do you help first-time buyers?', a: 'Absolutely! We have a dedicated team that specializes in helping first-time buyers navigate the process from pre-approval to closing.' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I am Bhaumik's virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { text, isBot: false }];
    setMessages(newMessages);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const match = PREDEFINED_QA.find(qa => 
        text.toLowerCase().includes(qa.q.toLowerCase()) || 
        qa.q.toLowerCase().includes(text.toLowerCase())
      );
      
      const response = match 
        ? match.a 
        : "That's a great question. I'll have Bhaumik or one of our team members get back to you with more details. Would you like to leave your email?";
      
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 md:w-96 mb-4 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="bg-white p-1 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Bhaumik</p>
                  <p className="text-blue-100 text-xs">Online • Typically replies instantly</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-700 p-1 rounded-lg transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex", msg.isBot ? "justify-start" : "justify-end")}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    msg.isBot 
                      ? "bg-white text-gray-800 rounded-tl-none shadow-sm" 
                      : "bg-blue-600 text-white rounded-tr-none"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-2 bg-white border-t border-gray-100 flex flex-wrap gap-2">
              {PREDEFINED_QA.slice(0, 2).map((qa, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(qa.q)}
                  className="text-[10px] bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-600 px-2 py-1 rounded-full transition-colors border border-gray-200"
                >
                  {qa.q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-blue-500"
                />
                <button 
                  onClick={() => handleSend()}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
