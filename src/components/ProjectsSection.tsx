import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderKanban, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  X, 
  Tag, 
  ArrowRight,
  Layers,
  Code
} from 'lucide-react';
import { sampleProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  onOpenContactModal: (projectPrefill?: string) => void;
}

const categories = [
  'All',
  'AI & Automation',
  'Graphic Design',
  'Video & UGC',
  'n8n Workflows',
  'SEO & Digital',
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenContactModal }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = sampleProjects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-blue-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <FolderKanban className="w-3.5 h-3.5 text-blue-300" />
            <span>Showcase &amp; Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400">Projects &amp; Workflows</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
            Selected AI automation blueprints, creative campaigns, video assets, and digital implementations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 border border-white/20'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 backdrop-blur-md'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl bg-white/[0.04] border border-white/10 hover:border-white/20 shadow-xl backdrop-blur-2xl overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Project Image Box with Sample Badge */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.08] backdrop-blur-md border border-white/15 text-[10px] font-bold text-slate-200">
                        {project.category}
                      </span>

                      {/* Required Sample Project Label */}
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-[10px] font-bold text-amber-300 font-mono">
                        Sample Project
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-slate-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom View Project CTA */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-blue-600/20 text-slate-200 hover:text-blue-300 border border-white/10 hover:border-blue-400/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer backdrop-blur-sm"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900/90 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-300 font-mono">
                  Sample Project / Blueprint
                </div>
              </div>

              {/* Title & Category */}
              <div className="mb-4">
                <span className="text-xs font-mono text-blue-300 uppercase tracking-wider block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Long Description */}
              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Key Highlights */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
                  <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Project Highlights &amp; Execution:</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onOpenContactModal(`Project Inquiry: ${title}`);
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all border border-white/15"
                >
                  <span>Build a Similar Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 text-xs font-semibold border border-white/10 cursor-pointer transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
