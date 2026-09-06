import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Phone, 
  Mail, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  servicePrefill?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  servicePrefill,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: servicePrefill || 'AI Agent Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);

    // Save to localStorage for Admin Portal Inbox
    try {
      const existing = JSON.parse(localStorage.getItem('taif_portfolio_inquiries') || '[]');
      const newInquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
        date: new Date().toLocaleString(),
        isRead: false,
      };
      localStorage.setItem('taif_portfolio_inquiries', JSON.stringify([newInquiry, ...existing]));
    } catch {
      // Ignore localStorage errors
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-slate-900/90 border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden backdrop-blur-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-3 animate-bounce">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-xs text-slate-200 max-w-xs mb-6">
                Thank you, {formData.name}. Taif will get in touch with you shortly.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold cursor-pointer border border-white/15 shadow-md"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-300 uppercase tracking-wider font-semibold">
                  Direct Channel &bull; MD Taif Mia
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Let's Work Together
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Discuss an AI agent project, automation pipeline, graphic branding, or video editing request.
              </p>

              {/* Quick direct contact links */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                <a
                  href="tel:01786681134"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.08] flex items-center gap-2 text-xs font-mono text-slate-200 transition-all backdrop-blur-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>01786681134</span>
                </a>
                <a
                  href="https://facebook.com/expttarif"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] flex items-center gap-2 text-xs text-slate-200 transition-all backdrop-blur-sm"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Tarif Prodhan</span>
                </a>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-200 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-200 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-100 focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="AI Agent Development">AI Agent Development</option>
                    <option value="AI Automation & n8n">AI Automation &amp; n8n Workflows</option>
                    <option value="Graphic Design & Branding">Graphic Design</option>
                    <option value="Video Creation & UGC">Video Creation &amp; UGC</option>
                    <option value="AI Photo Editing">AI Photo Editing</option>
                    <option value="SEO Services">SEO Services</option>
                    <option value="Other Project">Other Custom Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-200 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all resize-none backdrop-blur-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all border border-white/15"
                >
                  {isSubmitting ? <span>Sending...</span> : <span>Send Message</span>}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
