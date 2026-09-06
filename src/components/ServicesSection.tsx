import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Cpu, 
  Workflow, 
  Palette, 
  Clapperboard, 
  Film, 
  Smartphone, 
  Sparkles, 
  SearchCheck, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  MessageSquare,
  Zap
} from 'lucide-react';
import { servicesList } from '../data/portfolioData';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  Bot: Bot,
  Cpu: Cpu,
  Workflow: Workflow,
  Palette: Palette,
  Clapperboard: Clapperboard,
  Film: Film,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  SearchCheck: SearchCheck,
  Share2: Share2,
};

interface ServicesSectionProps {
  onOpenContactModal: (servicePrefill?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="relative py-24 bg-white/[0.01] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 backdrop-blur-xl shadow-md">
            <Zap className="w-3.5 h-3.5" />
            <span>Offerings &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-indigo-400">Services</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl">
            Ten specialized digital services combining artificial intelligence, automation systems, creative production, and search visibility.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <motion.div
                key={service.number}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="relative rounded-3xl bg-white/[0.04] border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.07] shadow-xl backdrop-blur-2xl p-7 flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Top Bar: Number + 3D Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-emerald-500/20 border border-white/15 flex items-center justify-center text-blue-300 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 backdrop-blur-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-600 group-hover:text-blue-400/60 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-200 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Learn More Button */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-blue-300 hover:text-blue-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenContactModal(service.title)}
                    className="p-2 rounded-xl bg-white/[0.05] hover:bg-emerald-500/20 text-slate-200 hover:text-emerald-300 border border-white/10 transition-colors cursor-pointer"
                    title={`Inquire about ${service.title}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-slate-900/90 border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] text-slate-300 hover:text-white hover:bg-white/[0.12] border border-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm font-bold text-blue-300 bg-blue-500/15 px-2.5 py-1 rounded-lg border border-blue-400/30 backdrop-blur-sm">
                  Service {selectedService.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedService.title}
                </h3>
              </div>

              <p className="text-sm text-slate-200 leading-relaxed mb-6">
                {selectedService.description}
              </p>

              {/* Deliverables */}
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                <h4 className="text-xs font-bold text-slate-100 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Key Deliverables &amp; Outputs:</span>
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenContactModal(title);
                  }}
                  className="w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all border border-white/15"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire for {selectedService.title}</span>
                </button>

                <button
                  onClick={() => setSelectedService(null)}
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
