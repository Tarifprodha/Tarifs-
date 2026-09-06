import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Bot, Palette, Video, Sparkles, Search, CheckCircle2, ShieldAlert } from 'lucide-react';

const practiceHighlights = [
  {
    title: 'AI Agent & Workflow Architecture',
    desc: 'Designing modular prompt chains, autonomous tool calling, and automated n8n webhook nodes for direct business integration.',
    icon: Bot,
    color: 'text-blue-400'
  },
  {
    title: 'Digital Graphic & Brand Design',
    desc: 'Creating high-CTR ad creatives, social carousel templates, and promotional banner collateral with E-learning & Earning Ltd. training.',
    icon: Palette,
    color: 'text-emerald-400'
  },
  {
    title: 'Short-Form & AI UGC Video Creation',
    desc: 'Producing hook-optimized Reels, TikTok, and product ads with AI voice synthesis, dynamic captions, and motion typography.',
    icon: Video,
    color: 'text-indigo-400'
  },
  {
    title: 'Precision AI Photo Retouching',
    desc: 'Executing studio product photo cutouts, AI lighting simulations, and multi-channel e-commerce image optimization.',
    icon: Sparkles,
    color: 'text-cyan-400'
  },
  {
    title: 'On-Page SEO & Content Strategy',
    desc: 'Structuring search-friendly headings, metadata schemas, and intent-targeted keyword clusters for sustainable organic discovery.',
    icon: Search,
    color: 'text-amber-400'
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Briefcase className="w-3.5 h-3.5 text-blue-300" />
            <span>Professional Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Experience</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl">
            Independent practice delivering practical AI automation, design, and digital solutions.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl border border-white/15 backdrop-blur-2xl">
          <div className="p-6 sm:p-10 bg-white/[0.04] rounded-[22px] backdrop-blur-2xl">
            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 inline-block mb-2 backdrop-blur-sm">
                  Independent / Freelance Practice
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  MD Taif Mia
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Self-Directed AI Automation &bull; Creative Design &bull; Multimedia Production &bull; Gaibandha, Bangladesh
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="px-3 py-1.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-blue-300 inline-block backdrop-blur-sm">
                  Active &bull; Ongoing
                </span>
              </div>
            </div>

            {/* Core Practice Areas */}
            <div className="mt-8">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Primary Operational Scope &amp; Deliverables:</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {practiceHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 backdrop-blur-md transition-all flex items-start gap-3.5 hover:bg-white/[0.06]"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className={`w-4 h-4 ${item.color}`} />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-white mb-1">{item.title}</h5>
                        <p className="text-[11px] text-slate-300 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Integrity Disclosure */}
            <div className="mt-8 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating with transparent real-world standards: all solutions are demonstrated through functioning project blueprints, tested automation workflows, and authentic skill applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
