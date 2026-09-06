import React from 'react';
import { 
  Bot, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Video, 
  ArrowUp,
  Sparkles,
  Heart
} from 'lucide-react';
import { personalInfo, servicesList, socialLinks } from '../data/portfolioData';
import { PageRoute } from '../types';

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: Facebook,
  Instagram: Instagram,
  Youtube: Youtube,
  TikTok: Video,
  Linkedin: Linkedin,
};

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white/[0.02] border-t border-white/10 pt-16 pb-28 lg:pb-12 overflow-hidden backdrop-blur-2xl">
      {/* Ambient background light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px] shadow-sm">
                <div className="w-full h-full bg-slate-900/90 rounded-[11px] flex items-center justify-center font-extrabold text-white text-xs backdrop-blur-sm">
                  TM
                </div>
              </div>
              <div>
                <span className="font-extrabold text-white text-lg tracking-tight">TAIF MIA</span>
                <span className="text-[10px] text-blue-300 font-mono block">AI Agent Expert &amp; AI Specialist</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 max-w-sm">
              Building smarter digital solutions through artificial intelligence, automation workflows, creative graphic design, and video production from Bangladesh.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.platform] || Facebook;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.08] flex items-center justify-center text-slate-300 hover:text-white transition-all backdrop-blur-sm"
                    title={social.platform}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', route: '/' as PageRoute },
                { label: 'About MD Taif Mia', route: '/about' as PageRoute },
                { label: 'Skill Matrix', route: '/skills' as PageRoute },
                { label: 'Services Catalog', route: '/services' as PageRoute },
                { label: 'Projects Showcase', route: '/projects' as PageRoute },
                { label: 'Case Studies', route: '/case-studies' as PageRoute },
                { label: 'Certifications', route: '/certifications' as PageRoute },
                { label: 'Contact', route: '/contact' as PageRoute },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      onNavigate(link.route);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-300 hover:text-blue-300 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Core Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.number}>
                  <span className="hover:text-emerald-300 transition-colors">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact (2 cols) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                Location &amp; Phone
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Gaibandha Sadar, Rangpur, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 font-mono">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <a href="tel:01786681134" className="text-slate-200 hover:text-white">
                    01786681134
                  </a>
                </div>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 self-start p-2 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/[0.1] transition-all flex items-center gap-1.5 text-xs font-medium cursor-pointer backdrop-blur-sm"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright 2026 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>&copy; 2026 MD Taif Mia. All Rights Reserved.</span>
            {onOpenAdmin && (
              <button
                id="footer-admin-btn"
                onClick={onOpenAdmin}
                className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.1] text-slate-400 hover:text-blue-300 border border-white/10 transition-colors flex items-center gap-1 cursor-pointer"
                title="Admin Portal (Ctrl+Alt+Shift+T)"
              >
                <span>Portal</span>
                <span className="text-[9px] opacity-70">Ctrl+Alt+Shift+T</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with AI &amp; Creative Technology</span>
            <span className="text-slate-400">&bull;</span>
            <span className="text-slate-300">@expttarif</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
