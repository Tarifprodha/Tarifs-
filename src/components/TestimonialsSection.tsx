import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote, Sparkles, UserCheck } from 'lucide-react';
import { sampleTestimonials } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Testimonials</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            Transparent placeholder cards ready to receive verified client reviews upon project deliveries.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sampleTestimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 p-7 flex flex-col justify-between backdrop-blur-2xl shadow-xl transition-all relative overflow-hidden group hover:bg-white/[0.07]"
            >
              {/* Watermark Quote Icon */}
              <Quote className="w-12 h-12 text-white/10 absolute top-4 right-4 pointer-events-none group-hover:text-blue-400/20 transition-colors" />

              <div>
                {/* Notice Pill */}
                <div className="inline-block px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-[10px] font-mono text-amber-300 font-bold mb-4 backdrop-blur-sm">
                  Sample Testimonial Placeholder
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 font-bold text-xs">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{t.authorTitle}</div>
                  <div className="text-[10px] text-slate-300 font-mono">{t.organization} &bull; {t.category}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
