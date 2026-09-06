import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Bot, Palette, Video, Search, CheckCircle2 } from 'lucide-react';
import { profileStats } from '../data/portfolioData';

export const HonestStats: React.FC = () => {
  return (
    <section className="relative py-20 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-2 backdrop-blur-xl shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Honest Credentials &amp; Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Verified Profile Focus &amp; Academic Scores
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg">
            Grounded data reflecting real competencies, verified academic GPA, and practical expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {profileStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-2xl flex flex-col justify-between text-center group transition-all hover:bg-white/[0.07]"
            >
              <div>
                <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block mb-2">
                  {stat.label}
                </span>

                <div className={`text-base font-extrabold tracking-tight mb-1 ${
                  stat.type === 'gpa' 
                    ? 'text-emerald-300 font-mono text-lg' 
                    : 'text-white group-hover:text-blue-300'
                }`}>
                  {stat.status}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-slate-300 leading-tight">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
