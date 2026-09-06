import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, School, Calendar, CheckCircle2, Star } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Timeline</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            Real academic milestones, consistent discipline, and verified academic performance records.
          </p>
        </div>

        {/* Vertical 3D Interactive Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-400 to-indigo-500/30" />

          <div className="space-y-12">
            {educationList.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.degree}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-11 h-11 rounded-2xl bg-slate-950/80 backdrop-blur-2xl border-2 border-emerald-400/80 shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center justify-center text-emerald-300 z-20">
                    {idx === 0 ? (
                      <GraduationCap className="w-5 h-5 text-blue-300" />
                    ) : idx === 1 ? (
                      <Star className="w-5 h-5 text-emerald-300" />
                    ) : (
                      <School className="w-5 h-5 text-indigo-300" />
                    )}
                  </div>

                  {/* Content Box */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:pr-0 md:text-left' : 'md:pl-0 md:text-left'
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      className="p-6 rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/10 hover:border-white/20 shadow-xl relative overflow-hidden group"
                    >
                      {/* Top Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 backdrop-blur-md">
                          {item.badge}
                        </span>
                        {item.passingYear && (
                          <span className="flex items-center gap-1 text-xs font-mono text-slate-300">
                            <Calendar className="w-3 h-3 text-blue-300" />
                            <span>Year: {item.passingYear}</span>
                          </span>
                        )}
                      </div>

                      {/* Degree & Institution */}
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.degree}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-200 mt-1 flex items-center gap-1.5">
                        <School className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item.institution}</span>
                      </h4>

                      {/* Subject / Program / Group details */}
                      <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                        {item.subject && (
                          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                            <span className="text-[10px] text-slate-400 block uppercase">Subject</span>
                            <span className="font-semibold text-slate-100">{item.subject}</span>
                          </div>
                        )}
                        {item.program && (
                          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                            <span className="text-[10px] text-slate-400 block uppercase">Program</span>
                            <span className="font-semibold text-slate-100">{item.program}</span>
                          </div>
                        )}
                        {item.group && (
                          <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
                            <span className="text-[10px] text-slate-400 block uppercase">Group</span>
                            <span className="font-semibold text-slate-100">{item.group}</span>
                          </div>
                        )}
                        {item.gpa && (
                          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/30">
                            <span className="text-[10px] text-emerald-300 block uppercase font-bold">GPA Score</span>
                            <span className="font-bold text-emerald-300 font-mono text-sm">{item.gpa}</span>
                          </div>
                        )}
                      </div>

                      {/* Status and description */}
                      <div className="mt-4 text-xs text-slate-300 leading-relaxed">
                        {item.description}
                      </div>

                      <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-emerald-300">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Status: {item.status}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
