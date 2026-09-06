import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  Sparkles, 
  Briefcase, 
  FolderGit2, 
  Layers, 
  X, 
  Phone, 
  Mail, 
  Award, 
  FileText, 
  MessageSquare, 
  Clock,
  ArrowUpRight,
  ChevronUp
} from 'lucide-react';
import { PageRoute } from '../types';

interface MobileBottomNavProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

interface NavItem {
  label: string;
  shortLabel: string;
  route: PageRoute;
  sectionId: string;
  icon: React.ComponentType<{ className?: string }>;
}

const primaryNavItems: NavItem[] = [
  { label: 'Home', shortLabel: 'Home', route: '/', sectionId: 'hero', icon: Home },
  { label: 'About', shortLabel: 'About', route: '/about', sectionId: 'about', icon: User },
  { label: 'Skills', shortLabel: 'Skills', route: '/skills', sectionId: 'skills', icon: Sparkles },
  { label: 'Services', shortLabel: 'Services', route: '/services', sectionId: 'services', icon: Briefcase },
  { label: 'Projects', shortLabel: 'Projects', route: '/projects', sectionId: 'projects', icon: FolderGit2 },
];

const allSections: { label: string; route: PageRoute; sectionId: string; icon: React.ComponentType<{ className?: string }>; desc: string }[] = [
  { label: 'Home / Hero', route: '/', sectionId: 'hero', icon: Home, desc: 'Overview & Highlights' },
  { label: 'About & Education', route: '/about', sectionId: 'about', icon: User, desc: 'Academic Track & Honours' },
  { label: 'Technical Skills', route: '/skills', sectionId: 'skills', icon: Sparkles, desc: 'AI Agents, n8n, Graphics' },
  { label: 'Services (10)', route: '/services', sectionId: 'services', icon: Briefcase, desc: 'Solutions & Deliverables' },
  { label: 'Work Experience', route: '/experience', sectionId: 'experience', icon: Clock, desc: 'Projects & Freelance' },
  { label: 'Featured Projects', route: '/projects', sectionId: 'projects', icon: FolderGit2, desc: 'Live Automation & Demos' },
  { label: 'Case Studies', route: '/case-studies', sectionId: 'case-studies', icon: FileText, desc: 'In-depth Architectures' },
  { label: 'Certifications', route: '/certifications', sectionId: 'certifications', icon: Award, desc: 'Verified Training & Honors' },
  { label: 'Client Reviews', route: '/testimonials', sectionId: 'testimonials', icon: MessageSquare, desc: 'Testimonial Placeholders' },
  { label: 'Contact & Socials', route: '/contact', sectionId: 'contact', icon: Mail, desc: 'Direct Phone & Form' },
];

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentRoute,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section on scroll for smooth mobile indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'services', 'experience', 'projects', 'case-studies', 'certifications', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: PageRoute, sectionId: string) => {
    setIsMoreOpen(false);
    onNavigate(route);

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  return (
    <>
      {/* "More Sections" Bottom Sheet Drawer for Mobile & Tablet */}
      <AnimatePresence>
        {isMoreOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Bottom Sheet Menu */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="relative w-full max-h-[85vh] bg-slate-900/95 border-t border-white/15 rounded-t-3xl shadow-[0_-15px_40px_rgba(0,0,0,0.8)] p-5 pb-8 overflow-y-auto backdrop-blur-2xl"
            >
              {/* Drag Handle & Header */}
              <div className="flex flex-col items-center mb-4">
                <div className="w-12 h-1.5 bg-white/20 rounded-full mb-3" />
                <div className="w-full flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>All Portfolio Sections</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                        MD Taif Mia
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">Tap any section to navigate directly</p>
                  </div>
                  <button
                    onClick={() => setIsMoreOpen(false)}
                    className="p-2 rounded-xl bg-white/[0.06] text-slate-300 hover:text-white border border-white/10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Grid of All Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {allSections.map((sec) => {
                  const Icon = sec.icon;
                  const isCurrent = currentRoute === sec.route || (currentRoute === '/' && activeSection === sec.sectionId);
                  return (
                    <button
                      key={sec.label}
                      onClick={() => handleNavClick(sec.route, sec.sectionId)}
                      className={`flex items-center gap-3 p-3 rounded-2xl text-left transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-600/30 border border-blue-400/40 text-white shadow-md'
                          : 'bg-white/[0.04] border border-white/10 text-slate-300 hover:bg-white/[0.08] hover:text-white'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isCurrent ? 'bg-blue-500 text-white' : 'bg-white/[0.06] text-blue-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold truncate flex items-center justify-between">
                          <span>{sec.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                        </div>
                        <div className="text-[10px] text-slate-400 truncate">{sec.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact & Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
                <a
                  href="tel:01786681134"
                  className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 text-slate-200 hover:border-emerald-400/40 flex items-center justify-center gap-2 text-xs font-semibold font-mono"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>01786681134</span>
                </a>
                <button
                  onClick={() => {
                    setIsMoreOpen(false);
                    onOpenContactModal();
                  }}
                  className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 border border-white/15 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-blue-200" />
                  <span>Send Message</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FIXED MOBILE & TABLET BOTTOM SECTION BAR */}
      <nav
        id="mobile-bottom-nav"
        aria-label="Mobile Bottom Section Navigation"
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden px-3 pb-3 pt-2 bg-slate-950/85 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.6)]"
      >
        <div className="max-w-xl mx-auto flex items-center justify-between gap-1">
          {/* Primary Quick Sections */}
          {primaryNavItems.map((item) => {
            const Icon = item.icon;
            const isItemActive = currentRoute === item.route || (currentRoute === '/' && activeSection === item.sectionId);

            return (
              <button
                key={item.label}
                id={`mobile-bottom-${item.shortLabel.toLowerCase()}`}
                onClick={() => handleNavClick(item.route, item.sectionId)}
                className={`relative flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
                  isItemActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Active Indicator Glow Background */}
                {isItemActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 bg-white/[0.08] border border-white/15 rounded-2xl shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}

                <div className={`relative z-10 p-1 rounded-xl transition-all ${
                  isItemActive 
                    ? 'text-blue-400 scale-110' 
                    : 'text-slate-400 group-hover:text-slate-200'
                }`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                
                <span className={`relative z-10 text-[10px] sm:text-[11px] font-medium tracking-tight truncate ${
                  isItemActive ? 'font-bold text-white' : 'text-slate-400'
                }`}>
                  {item.shortLabel}
                </span>
              </button>
            );
          })}

          {/* "More / Sections" Button */}
          <button
            id="mobile-bottom-more-btn"
            onClick={() => setIsMoreOpen(true)}
            className={`relative flex-1 py-1.5 px-1 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-200 cursor-pointer ${
              isMoreOpen ? 'text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isMoreOpen && (
              <motion.div
                layoutId="mobileActiveTab"
                className="absolute inset-0 bg-blue-600/20 border border-blue-400/30 rounded-2xl shadow-sm"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <div className="relative z-10 p-1 rounded-xl text-blue-300">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="relative z-10 text-[10px] sm:text-[11px] font-medium tracking-tight text-blue-300 flex items-center gap-0.5">
              <span>More</span>
              <ChevronUp className="w-2.5 h-2.5 opacity-70" />
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
