import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Palette, 
  Video, 
  Sparkles, 
  Search, 
  Check, 
  Zap, 
  Layers, 
  Workflow, 
  Code2, 
  Star,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ElementType> = {
  Bot: Bot,
  Palette: Palette,
  Video: Video,
  Sparkles: Sparkles,
  Search: Search,
};

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = cat.title.toLowerCase().includes(query);
    const skillsMatch = cat.skills.some((s) => s.name.toLowerCase().includes(query));
    return titleMatch || skillsMatch;
  });

  return (
    <section id="skills" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Layers className="w-3.5 h-3.5 text-blue-300" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Skill Matrix</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
            Proficiencies categorized across AI agent architectures, creative design, video workflows, and search optimization.
          </p>
        </div>

        {/* Category Filter Pills & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          {/* Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-lg">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 border border-white/20'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => {
              const Icon = categoryIconMap[cat.icon] || Bot;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/30 border border-white/20'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search skill (e.g. n8n, Reels)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-blue-400/60 transition-colors backdrop-blur-xl"
            />
          </div>
        </div>

        {/* 5 Core Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((category) => {
              const Icon = categoryIconMap[category.icon] || Bot;
              const isAi = category.id === 'ai-automation';
              const isDesign = category.id === 'graphic-design';
              const isVideo = category.id === 'video-content';
              const isPhoto = category.id === 'ai-photo-editing';

              const accentGradients = isAi
                ? 'from-blue-600/20 to-blue-900/10 border-blue-400/30 text-blue-300'
                : isDesign
                ? 'from-emerald-600/20 to-emerald-900/10 border-emerald-400/30 text-emerald-300'
                : isVideo
                ? 'from-indigo-600/20 to-indigo-900/10 border-indigo-400/30 text-indigo-300'
                : isPhoto
                ? 'from-cyan-600/20 to-cyan-900/10 border-cyan-400/30 text-cyan-300'
                : 'from-emerald-600/20 to-emerald-900/10 border-emerald-400/30 text-emerald-300';

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 shadow-xl backdrop-blur-2xl p-6 flex flex-col justify-between transition-all group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${accentGradients} border flex items-center justify-center`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-extrabold text-white group-hover:text-blue-300 transition-colors">
                            {category.title}
                          </h3>
                          <span className="text-[10px] font-mono text-slate-400">
                            {category.skills.length} Specialized Competencies
                          </span>
                        </div>
                      </div>

                      {/* Qualitative Mastery Orb Badge */}
                      <div className="px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/15 text-[10px] font-bold text-slate-200 flex items-center gap-1.5 backdrop-blur-md">
                        <span className={`w-2 h-2 rounded-full ${isAi ? 'bg-blue-400 animate-pulse' : 'bg-emerald-400'}`} />
                        <span>{isAi ? 'Expert Level' : 'Advanced'}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {category.description}
                    </p>

                    {/* Skill Items List */}
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                            skill.highlight
                              ? 'bg-white/[0.08] border border-blue-400/30 text-white font-semibold shadow-sm'
                              : 'bg-white/[0.02] border border-white/10 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${skill.highlight ? 'text-blue-400' : 'text-emerald-400/80'}`} />
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 font-normal">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Practiced &amp; Implemented</span>
                    <span className="text-blue-300 font-sans font-medium">Verified Skillset</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
