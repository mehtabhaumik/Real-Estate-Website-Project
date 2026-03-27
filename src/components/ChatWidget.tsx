import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const PREDEFINED_QA = [
  {
    q: "What is Nathaniel's experience?",
    a: "Nathaniel Sterling has over 15 years of experience in the Riverview and Tampa Bay real estate markets, specializing in luxury and new construction."
  },
  {
    q: "How can I contact Nathaniel?",
    a: "You can reach Nathaniel at (813) 555-0123 or email him at nathaniel@riverviewrealty.com. You can also visit his profile page for more details."
  },
  {
    q: "What areas do you cover?",
    a: "We primarily cover Riverview, Brandon, Tampa, and the surrounding areas, including luxury waterfront properties and downtown condos."
  },
  {
    q: "Do you help with rentals?",
    a: "While we specialize in residential sales, we can certainly refer you to trusted property management partners for your rental needs."
  },
  {
    q: "What is the current market like?",
    a: "The Tampa Bay market is currently very dynamic! We're seeing strong demand for well-priced homes. Nathaniel can provide a detailed market analysis for your specific area."
  },
  {
    q: "How do I save a listing?",
    a: "You can click the heart icon on any property card or detail page to save it to your favorites. You can access your saved properties through the 'Favorites' link in the navigation menu."
  },
  {
    q: "What's your favorite color?",
    a: "I'm partial to Riverview Realty Blue! It's professional and calming, just like our service."
  },
  {
    q: "Are you a human?",
    a: "I am Nathaniel's virtual assistant, powered by advanced AI to help you find your dream home faster!"
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I am Nathaniel's virtual assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // 3 second delay as requested
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      const foundQA = PREDEFINED_QA.find(qa => 
        lowerText.includes(qa.q.toLowerCase()) || 
        qa.q.toLowerCase().includes(lowerText)
      );

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: foundQA ? foundQA.a : "That's a great question! I'm not quite sure about that, but Nathaniel would love to discuss it with you. Would you like his contact information?",
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[32px] shadow-2xl w-80 sm:w-96 h-[500px] flex flex-col overflow-hidden border border-gray-100 mb-4"
          >
            {/* Header */}
            <div className="bg-blue-600 p-6 text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-xl">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Nathaniel's Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[10px] font-medium text-blue-100 uppercase tracking-wider">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-2 rounded-xl transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "flex items-end space-x-2",
                    msg.sender === 'user' ? "flex-row-reverse space-x-reverse" : "flex-row"
                  )}
                >
                  <div className={cn(
                    "p-2 rounded-lg",
                    msg.sender === 'user' ? "bg-blue-100" : "bg-white shadow-sm"
                  )}>
                    {msg.sender === 'user' ? <User className="h-4 w-4 text-blue-600" /> : <Bot className="h-4 w-4 text-blue-600" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.sender === 'user' 
                      ? "bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-200" 
                      : "bg-white text-gray-700 rounded-bl-none shadow-sm border border-gray-100"
                  )}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-end space-x-2">
                  <div className="p-2 rounded-lg bg-white shadow-sm">
                    <Bot className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="bg-white text-gray-400 p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center space-x-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-xs font-medium italic">Nathaniel's assistant is thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {!isTyping && messages.length < 4 && (
              <div className="px-6 py-2 flex flex-wrap gap-2 bg-gray-50/50">
                {PREDEFINED_QA.slice(0, 3).map((qa, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(qa.q)}
                    className="text-[10px] font-bold bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    {qa.q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-blue-600 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl shadow-blue-200 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
