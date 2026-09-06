import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';
import { PageRoute } from '../types';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

const navLinks: { label: string; route: PageRoute; sectionId: string }[] = [
  { label: 'Home', route: '/', sectionId: 'hero' },
  { label: 'About', route: '/about', sectionId: 'about' },
  { label: 'Skills', route: '/skills', sectionId: 'skills' },
  { label: 'Services', route: '/services', sectionId: 'services' },
  { label: 'Experience', route: '/experience', sectionId: 'experience' },
  { label: 'Projects', route: '/projects', sectionId: 'projects' },
  { label: 'Case Studies', route: '/case-studies', sectionId: 'case-studies' },
  { label: 'Certifications', route: '/certifications', sectionId: 'certifications' },
  { label: 'Testimonials', route: '/testimonials', sectionId: 'testimonials' },
  { label: 'Contact', route: '/contact', sectionId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (item: { route: PageRoute; sectionId: string }) => {
    setMobileMenuOpen(false);
    onNavigate(item.route);

    // If on homepage or navigating to homepage with section, smooth scroll
    if (item.route === '/' || currentRoute === '/') {
      setTimeout(() => {
        const el = document.getElementById(item.sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/60 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => handleLinkClick({ route: '/', sectionId: 'hero' })}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 p-[1px] shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950/80 backdrop-blur-md rounded-[15px] flex items-center justify-center border border-white/10">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-sm tracking-tight">
                TM
              </span>
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-100 text-base tracking-tight group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
              <span>TAIF MIA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 hidden sm:inline-block" />
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium font-mono">
              AI Specialist
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (PC) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-2xl px-3 py-1.5 rounded-full border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          {navLinks.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleLinkClick(item)}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-full shadow-md shadow-blue-500/30 border border-white/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions for Desktop and Tablet */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="nav-call-btn"
            href="tel:01786681134"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-emerald-400 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 rounded-xl hover:border-emerald-500/40 transition-all duration-200 shadow-sm"
            title="Call MD Taif Mia: 01786681134"
          >
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono">01786681134</span>
          </a>

          <button
            id="nav-cta-talk-btn"
            onClick={onOpenContactModal}
            className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:from-blue-500 hover:to-indigo-500 transition-all duration-200 flex items-center gap-1.5 cursor-pointer border border-white/15"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200 group-hover:rotate-12 transition-transform" />
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Header Quick Actions */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            id="nav-mobile-call"
            href="tel:01786681134"
            className="p-2 rounded-xl bg-white/[0.06] text-emerald-400 border border-white/10"
            title="Call 01786681134"
          >
            <PhoneCall className="w-4 h-4" />
          </a>

          <button
            id="nav-mobile-cta"
            onClick={onOpenContactModal}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold flex items-center gap-1 shadow-md shadow-blue-600/30 border border-white/15"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-200" />
            <span>Let's Talk</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden bg-slate-950/85 backdrop-blur-3xl border-b border-white/10 px-4 py-6 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navLinks.map((item) => (
                <button
                  key={item.label}
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleLinkClick(item)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-colors text-left ${
                    currentRoute === item.route
                      ? 'bg-blue-600/30 text-blue-300 border border-blue-400/40'
                      : 'bg-white/[0.04] text-slate-300 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="tel:01786681134"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-medium font-mono hover:border-emerald-500/40"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call: 01786681134</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                <span>Let's Work Together</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
