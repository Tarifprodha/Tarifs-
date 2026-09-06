import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Workflow, 
  Bot, 
  CheckCircle2, 
  AlertCircle, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { caseStudiesList } from '../data/portfolioData';
import { PageRoute } from '../types';

interface DedicatedCaseStudyViewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenContactModal: (prefill?: string) => void;
}

export const DedicatedCaseStudyView: React.FC<DedicatedCaseStudyViewProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  const caseStudy = caseStudiesList[0]; // Case Study 01: AI Customer Support Automation

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back to Case Studies Button */}
      <button
        onClick={() => onNavigate('/case-studies')}
        className="mb-8 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/[0.1] flex items-center gap-2 transition-colors cursor-pointer backdrop-blur-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Case Studies Overview</span>
      </button>

      {/* Main Container */}
      <div className="rounded-3xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 border border-white/15 shadow-2xl backdrop-blur-2xl overflow-hidden">
        <div className="bg-white/[0.04] backdrop-blur-2xl rounded-[22px] p-6 sm:p-10">
          {/* Badges Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/15 border border-blue-400/30 text-blue-300 backdrop-blur-sm">
                {caseStudy.caseNumber}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-amber-500/20 border border-amber-400/40 text-amber-300 backdrop-blur-sm">
                Sample Blueprint &bull; Replaceable
              </span>
            </div>

            <span className="text-xs text-slate-300 font-mono">
              Category: AI &amp; Automation
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-base text-slate-200 leading-relaxed mb-8">
            {caseStudy.subtitle}
          </p>

          {/* 3 Core Blocks: Problem, Solution, Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Problem */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-red-500/30 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-3">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-blue-400/30 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">
                <Workflow className="w-4 h-4" />
                <span>The AI Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Result */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-emerald-400/30 backdrop-blur-xl shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Outcome</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>
          </div>

          {/* Deep-Dive n8n Pipeline Breakdown */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10 shadow-inner">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>Full Workflow Architecture &amp; Execution Nodes</span>
            </h3>

            <div className="space-y-4">
              {caseStudy.workflowSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex items-start gap-4 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-mono font-bold text-blue-300 text-xs shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges & CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-300 font-medium">Technologies:</span>
              {caseStudy.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-emerald-300 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <button
              onClick={() => onOpenContactModal(`Inquiry for: ${caseStudy.title}`)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-105 border border-white/15"
            >
              <span>Build This Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
