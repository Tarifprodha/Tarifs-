import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Bot, 
  ChevronDown, 
  Layers, 
  Send, 
  Award,
  Terminal
} from 'lucide-react';
import { personalInfo, rotatingTitles } from '../data/portfolioData';
import { HeroScene3D } from './HeroScene3D';
import { PageRoute } from '../types';

interface HeroSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContactModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToSection = (id: string, route: PageRoute) => {
    onNavigate(route);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Decorative Mesh & Refined Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-600/[0.08] via-indigo-600/[0.06] to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ============================================================ */}
          {/* LEFT COLUMN: Hero Copy & Actions */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 shadow-lg shadow-black/30 backdrop-blur-xl mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-blue-300 uppercase">
                {personalInfo.heroBadge}
              </span>
              <span className="text-white/20 text-xs">•</span>
              <span className="text-[11px] text-slate-300 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>Gaibandha, Rangpur</span>
              </span>
            </motion.div>

            {/* Large Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-5"
            >
              Building Smarter Digital Solutions With{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">
                {personalInfo.heroHighlight}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-blue-500/60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            {/* Animated Rotating Professional Title */}
            <div className="h-10 sm:h-12 flex items-center mb-5 overflow-hidden">
              <div className="flex items-center gap-2 text-lg sm:text-2xl font-bold">
                <span className="text-slate-400">Specializing as:</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={titleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 font-extrabold font-mono"
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {personalInfo.heroSupportingText}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
            >
              {/* Primary CTA: Explore My Work */}
              <button
                id="hero-explore-work-btn"
                onClick={() => handleScrollToSection('projects', '/projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Primary CTA: Let's Work Together */}
              <button
                id="hero-work-together-btn"
                onClick={onOpenContactModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-slate-100 font-semibold text-sm hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg backdrop-blur-xl group"
              >
                <Sparkles className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>Let's Work Together</span>
              </button>

              {/* Secondary CTA: View My Skills */}
              <button
                id="hero-view-skills-btn"
                onClick={() => handleScrollToSection('skills', '/skills')}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors underline-offset-4 hover:underline cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                <span>View My Skills</span>
              </button>
            </motion.div>

            {/* Profile Credentials Quick Summary */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">AI Automation</div>
                  <div className="text-[10px] text-slate-400">n8n &amp; AI Agents</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Academic Score</div>
                  <div className="text-[10px] text-emerald-400 font-mono font-bold">GPA 5.00 (HSC)</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1 p-2 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200">Social / Work</div>
                  <div className="text-[10px] text-slate-400 font-mono">@expttarif</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: 3D Scene with Taif Mia's Portrait & Glass Badges */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <HeroScene3D
              onBadgeClick={(badgeName) => {
                const el = document.getElementById('skills');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => handleScrollToSection('about', '/about')}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-blue-400 transition-colors cursor-pointer group"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
