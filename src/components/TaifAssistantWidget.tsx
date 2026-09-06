import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Layers 
} from 'lucide-react';
import { personalInfo, educationList, skillCategories, servicesList } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  suggestions?: string[];
}

export const TaifAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I'm Taif's AI Portfolio Assistant. How can I assist you in exploring MD Taif Mia's skills, AI automation services, or academic background?`,
      suggestions: [
        "What are Taif's core skills?",
        'Tell me about his education & GPA',
        'How can I hire Taif for an AI project?',
        'What is his direct contact?'
      ],
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // Generate intelligent contextual response
    setTimeout(() => {
      let reply = '';
      const lower = text.toLowerCase();

      if (lower.includes('skill') || lower.includes('expertise') || lower.includes('what can he do')) {
        reply = `MD Taif Mia specializes in 5 core domains: 
1. AI & Automation (AI Agents, n8n, LLM tool integration)
2. Graphic Design (E-learning & Earning Ltd. trained, Facebook Ad Creatives)
3. Video & Content Creation (AI UGC, Short-form reels)
4. AI Photo Editing (Studio enhancement & product retouch)
5. SEO & Digital Skills (Keyword research & on-page optimization).`;
      } else if (lower.includes('education') || lower.includes('gpa') || lower.includes('college') || lower.includes('school')) {
        reply = `Taif has an outstanding academic track record:
- Currently studying Honours in English at Gaibandha Government College.
- HSC (2025) from Palashbari Government College with highest grade GPA 5.00.
- SSC (2023) from Narayenpur High School (Science Group) with GPA 4.67.`;
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email') || lower.includes('facebook') || lower.includes('location')) {
        reply = `You can reach MD Taif Mia directly:
- Phone / WhatsApp: 01786681134
- Location: Gaibandha Sadar, Rangpur, Bangladesh
- Facebook: Tarif Prodhan (@expttarif)
- Social Username: @expttarif`;
      } else if (lower.includes('n8n') || lower.includes('agent') || lower.includes('automation')) {
        reply = `Taif develops end-to-end AI automation pipelines using n8n and autonomous AI agents. He builds custom webhook triggers, multi-model LLM reasoning nodes, and automated customer support and CRM routing systems.`;
      } else if (lower.includes('service') || lower.includes('hire') || lower.includes('work') || lower.includes('price')) {
        reply = `Taif offers 10 specialized services including AI Agent Development, n8n Workflow Automation, Graphic Design, Video & UGC Editing, AI Photo Retouching, and SEO. You can use the "Let's Talk" button or contact form on the page to request a quote!`;
      } else {
        reply = `MD Taif Mia is an AI Agent Expert & AI Specialist from Gaibandha, Rangpur, Bangladesh. He combines AI automation with creative design and video production to build smarter digital solutions. Feel free to ask about his skills, education, or services!`;
      }

      const aiReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: reply,
      };

      setMessages((prev) => [...prev, aiReply]);
    }, 500);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-22 lg:bottom-6 right-4 sm:right-6 z-40">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.4)] border border-blue-400/40 flex items-center gap-2 cursor-pointer group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline text-xs font-bold tracking-wide">
            AI Assistant
          </span>
        </motion.button>
      )}

      {/* Assistant Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[92vw] sm:w-96 h-[480px] bg-slate-900/90 border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Taif AI Assistant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </h4>
                  <span className="text-[10px] text-slate-300 font-mono">Portfolio Knowledge Base</span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.12] transition-colors cursor-pointer border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-md'
                        : 'bg-white/[0.06] border border-white/10 text-slate-200 rounded-bl-none whitespace-pre-line backdrop-blur-sm'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Suggestion buttons if available */}
                  {m.suggestions && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {m.suggestions.map((sug) => (
                        <button
                          key={sug}
                          onClick={() => handleSend(sug)}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-[10px] text-blue-300 transition-colors cursor-pointer text-left backdrop-blur-sm"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white/[0.03] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask about Taif's skills, education..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all cursor-pointer border border-white/15 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
