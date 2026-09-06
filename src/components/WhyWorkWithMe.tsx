import React from 'react';
import { motion } from 'motion/react';
import { Brain, Sparkles, Compass, Zap, CheckCircle2 } from 'lucide-react';
import { whyWorkWithMeCards } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Brain: Brain,
  Sparkles: Sparkles,
  Compass: Compass,
  Zap: Zap,
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400">With Me</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            A distinct combination of AI workflow logic, creative visual craftsmanship, and continuous learning discipline.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyWorkWithMeCards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Brain;
            const isBlue = idx === 0 || idx === 3;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 p-6 flex flex-col justify-between backdrop-blur-2xl shadow-xl transition-all group hover:bg-white/[0.07]"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all ${
                    isBlue 
                      ? 'bg-blue-500/15 border border-blue-400/30 text-blue-300 group-hover:bg-blue-600 group-hover:text-white'
                      : 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                    {card.tagline}
                  </span>

                  <h3 className="text-base font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-300 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Guaranteed Quality</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
