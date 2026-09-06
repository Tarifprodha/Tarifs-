import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Phone, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Video,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube,
  TikTok: Video,
  Linkedin: Linkedin,
};

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: initialService || 'AI Agent Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

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
    <section id="contact" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Something Smart</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            Have an AI, automation, design, video or digital project in mind? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ============================================================ */}
          {/* LEFT: Contact Cards & Social Hub */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Direct Contact Information</span>
              </h3>

              <div className="space-y-4">
                {/* Phone & WhatsApp */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-300 uppercase font-mono block">Direct Phone / WhatsApp</span>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm font-bold text-white hover:text-emerald-300 transition-colors font-mono"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase font-mono block">Physical Location</span>
                    <span className="text-sm font-semibold text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Facebook Name */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-300 uppercase font-mono block">Facebook Profile</span>
                    <span className="text-sm font-semibold text-slate-200">{personalInfo.facebookName}</span>
                    <span className="text-xs text-blue-300 font-mono ml-2">({personalInfo.socialUsername})</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Section */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Social Media Profiles</span>
                  <span className="text-[10px] text-blue-300 font-mono">@{personalInfo.socialUsername.replace('@', '')}</span>
                </h4>

                <div className="grid grid-cols-5 gap-2">
                  {socialLinks.map((social) => {
                    const Icon = socialIconMap[social.platform] || Facebook;
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 flex flex-col items-center justify-center gap-1.5 hover:scale-105 hover:bg-white/[0.08] transition-all group backdrop-blur-sm"
                        title={`${social.platform} - ${social.handle}`}
                      >
                        <Icon className={`w-5 h-5 text-slate-300 group-hover:text-white transition-colors ${social.color}`} />
                        <span className="text-[9px] text-slate-300 group-hover:text-slate-100 font-medium">
                          {social.platform}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT: Interactive Contact Form */}
          {/* ============================================================ */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-xl relative overflow-hidden">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                  <p className="text-sm text-slate-200 max-w-md mb-6 leading-relaxed">
                    Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. MD Taif Mia will respond directly to <strong className="text-blue-300">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'AI Agent Development',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold border border-white/10 cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Project Message
                  </h3>
                  <p className="text-xs text-slate-300 mb-6">
                    Fill out your project requirements below to discuss AI agents, automation workflows, creative design, or video projects.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe / Brand Representative"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all backdrop-blur-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Project Type / Focus
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs text-slate-100 focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="AI Agent Development">AI Agent Development</option>
                      <option value="AI Automation & n8n">AI Automation &amp; n8n Workflows</option>
                      <option value="Graphic Design & Branding">Graphic Design &amp; Ad Creatives</option>
                      <option value="AI Video Creation & Reels">Video Creation &amp; UGC Content</option>
                      <option value="AI Photo Editing">AI Photo Editing &amp; Catalog Retouch</option>
                      <option value="SEO Services">Search Engine Optimization (SEO)</option>
                      <option value="Full Stack Digital Strategy">Full-Scope Digital Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                      Project Details &amp; Objectives <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe what you are looking to build or automate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all resize-none backdrop-blur-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white font-semibold text-xs shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-white/15"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
