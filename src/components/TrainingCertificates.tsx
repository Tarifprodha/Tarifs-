import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen, ExternalLink } from 'lucide-react';
import { trainingList } from '../data/portfolioData';

export const TrainingCertificates: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Award className="w-3.5 h-3.5 text-blue-300" />
            <span>Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Training &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Skills</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm max-w-lg">
            Structured institute learning combined with dedicated practical hands-on technology mastery.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {trainingList.map((item, idx) => {
            const isGraphic = idx === 0;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl border border-white/15 backdrop-blur-2xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Certificate Visual Header */}
                <div className="p-6 sm:p-8 bg-white/[0.04] backdrop-blur-2xl rounded-[22px] h-full flex flex-col justify-between">
                  <div>
                    {/* Top Watermark / Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isGraphic 
                            ? 'bg-emerald-500/15 border border-emerald-400/30 text-emerald-300'
                            : 'bg-blue-500/15 border border-blue-400/30 text-blue-300'
                        }`}>
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block">
                            {item.type}
                          </span>
                          <span className="text-xs font-bold text-slate-100">
                            {item.institution}
                          </span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/[0.06] border border-white/15 text-slate-200 backdrop-blur-md">
                        Verified Record
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-emerald-300 font-medium mt-1">
                      Organization: {item.institution}
                    </p>

                    {/* Competencies Acquired List */}
                    <div className="mt-6">
                      <div className="text-xs font-semibold text-slate-200 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Core Competencies &amp; Skills Covered:</span>
                      </div>
                      <ul className="space-y-2">
                        {item.skillsLearned.map((skill) => (
                          <li key={skill} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Verification Note */}
                  <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5 text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>{item.statusNote}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
