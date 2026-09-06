import React from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  Palette, 
  Cpu, 
  Video, 
  Search, 
  MapPin, 
  Phone, 
  User, 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo, profilePhoto } from '../data/portfolioData';
import { PageRoute } from '../types';

interface AboutSectionProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenContactModal?: () => void;
}

const infoPillars = [
  {
    title: 'AI Specialist',
    description: 'Specializing in autonomous agents, LLM tool integration, and enterprise prompt engineering.',
    icon: Bot,
    color: 'border-blue-500/40 text-blue-400 bg-blue-500/10'
  },
  {
    title: 'Creative Designer',
    description: 'Formally trained through E-learning & Earning Ltd. in digital branding and visual marketing.',
    icon: Palette,
    color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
  },
  {
    title: 'Automation Enthusiast',
    description: 'Architecting zero-maintenance n8n multi-step webhooks, API connectors, and automated workflows.',
    icon: Cpu,
    color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10'
  },
  {
    title: 'Digital Creator',
    description: 'Producing hook-driven short-form video reels, AI UGC product showcases, and multimedia content.',
    icon: Video,
    color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
  },
  {
    title: 'SEO Professional',
    description: 'Optimizing on-page architecture, search intent keywords, and content visibility for Google indexing.',
    icon: Search,
    color: 'border-amber-500/40 text-amber-400 bg-amber-500/10'
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <section id="about" className="relative py-24 bg-white/[0.01] border-t border-white/10 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Profile &amp; Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">MD Taif Mia</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            Passionate AI Specialist and Creative Technologist from Bangladesh combining automation precision with modern digital craft.
          </p>
        </div>

        {/* Main Grid: Left Portrait + Facts / Right Bio & 5 Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Profile Frame & Quick Identity Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl border border-white/15 backdrop-blur-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950 aspect-[4/5] flex items-center justify-center">
                <img
                  src={profilePhoto}
                  alt="MD Taif Mia Portrait"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Bottom Overlay Nameplate */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">MD Taif Mia</h3>
                      <p className="text-xs text-blue-300 font-mono">@expttarif &bull; Tarif Prodhan</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-[10px] font-bold text-emerald-300 backdrop-blur-md">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact & Location Card */}
            <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-xl flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Location</div>
                  <div className="font-semibold text-slate-100">Gaibandha Sadar, Rangpur, Bangladesh</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Direct Phone / WhatsApp</div>
                  <a href="tel:01786681134" className="font-semibold text-slate-100 hover:text-emerald-300 transition-colors font-mono">
                    01786681134
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-200">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Education Status</div>
                  <div className="font-semibold text-slate-100">Honours in English, Gaibandha Govt College</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Bio & 5 Animated Information Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Primary Bio Paragraph */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Professional Profile &amp; Mission</span>
              </h3>

              <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">MD Taif Mia</strong>, an AI Agent Expert and AI Specialist from Gaibandha, Rangpur, Bangladesh.
                </p>
                <p>
                  I am passionate about artificial intelligence, AI automation, graphic design, video editing, UGC content creation, AI photo editing and SEO.
                </p>
                <p>
                  I learned AI-related skills independently in Bangladesh and developed graphic design skills through <span className="text-emerald-400 font-medium">E-learning &amp; Earning Ltd.</span>
                </p>
                <p className="text-slate-200">
                  My goal is to continuously learn modern technology and use AI and automation to create practical solutions for businesses, creators and digital professionals.
                </p>
              </div>

              {/* Action buttons inside bio */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenContactModal}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center gap-1.5 transition-all cursor-pointer border border-white/15"
                >
                  <span>Connect With Me</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#education"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 hover:text-white text-xs font-medium border border-white/10 transition-colors flex items-center gap-1.5 backdrop-blur-md"
                >
                  <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                  <span>View Education Timeline</span>
                </a>
              </div>
            </div>

            {/* 5 Animated Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {infoPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 backdrop-blur-xl shadow-lg transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-white/[0.06] border border-white/15 text-blue-300 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
