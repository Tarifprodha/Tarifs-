import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileSpreadsheet, 
  Workflow, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  Zap,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { caseStudiesList } from '../data/portfolioData';
import { CaseStudyItem, PageRoute } from '../types';

interface CaseStudiesSectionProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContactModal: (casePrefill?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = caseStudiesList[activeCaseIndex];

  return (
    <section id="case-studies" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Workflow className="w-3.5 h-3.5" />
            <span>Problem &bull; Solution &bull; Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Detailed <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400">Case Studies</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
            In-depth analysis of workflow architectures, technical implementations, and real operational benefits.
          </p>
        </div>

        {/* Case Study Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {caseStudiesList.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeCaseIndex === idx
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 border border-white/20'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 backdrop-blur-md'
              }`}
            >
              <span className="font-mono text-[10px] text-blue-300 font-bold">{cs.caseNumber}</span>
              <span>{cs.title}</span>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail Box */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl border border-white/15 backdrop-blur-2xl">
          <div className="bg-white/[0.04] backdrop-blur-2xl rounded-[22px] p-6 sm:p-10">
            {/* Top Bar with Sample Notice */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 border border-blue-400/30 text-blue-300 backdrop-blur-sm">
                  {currentCase.caseNumber}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-amber-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-sm">
                  Sample Case Study
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigate('/case-studies/ai-automation')}
                  className="text-xs font-medium text-slate-300 hover:text-blue-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Dedicated View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Case Title & Subtitle */}
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentCase.title}
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                {currentCase.subtitle}
              </p>
            </div>

            {/* Problem / Solution / Result Triplets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Problem */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-red-500/30 backdrop-blur-xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Problem / Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentCase.problem}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-blue-400/30 backdrop-blur-xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">
                    <Workflow className="w-4 h-4 text-blue-300 shrink-0" />
                    <span>Solution Architecture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Result */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-emerald-400/30 backdrop-blur-xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Measurable Result</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentCase.result}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Workflow Node Sequence */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 shadow-inner">
              <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400" />
                <span>Execution Pipeline &amp; Node Flow:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentCase.workflowSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    className="relative p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.07] transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-extrabold text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-400/30">
                          Step {step.step}
                        </span>
                        {idx < currentCase.workflowSteps.length - 1 && (
                          <span className="hidden lg:inline text-slate-400 text-xs">&rarr;</span>
                        )}
                      </div>
                      <h5 className="text-xs font-bold text-white mb-1">{step.title}</h5>
                      <p className="text-[11px] text-slate-300 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Badges & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-300 font-medium">Stack:</span>
                {currentCase.techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-emerald-300 backdrop-blur-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenContactModal(`Case Study Inquiry: ${currentCase.title}`)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/15"
              >
                <span>Deploy Workflow Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
