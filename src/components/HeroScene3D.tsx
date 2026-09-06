import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Bot, Palette, Video, Sparkles, TrendingUp, Cpu, Workflow, CheckCircle2, Zap } from 'lucide-react';
import { profilePhoto } from '../data/portfolioData';

interface HeroScene3DProps {
  onBadgeClick?: (badgeText: string) => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ onBadgeClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || window.innerWidth < 768) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Restrict rotation angle smoothly
      const rotateY = (mouseX / (rect.width / 2)) * 10;
      const rotateX = -(mouseY / (rect.height / 2)) * 10;

      setRotate({ x: rotateX, y: rotateY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-3d-scene"
      className="relative w-full max-w-[540px] aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setRotate({ x: 0, y: 0 });
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-72 h-72 rounded-full bg-blue-600/[0.08] blur-3xl pointer-events-none -top-4 -right-4" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-500/[0.07] blur-3xl pointer-events-none -bottom-8 -left-8" />
      <div className="absolute w-48 h-48 rounded-full bg-emerald-500/[0.06] blur-2xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Subtle Digital Grid Base */}
      <div className="absolute inset-4 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-slate-900/40 to-slate-950/60 backdrop-blur-sm -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      {/* Main 3D Transform Stage */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.2 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Orbital Rings / Workflow Network Lines */}
        <div
          className="absolute w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] rounded-full border border-blue-500/20 border-dashed animate-[spin_40s_linear_infinite] pointer-events-none"
          style={{ transform: 'translateZ(10px)' }}
        />
        <div
          className="absolute w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] rounded-full border border-emerald-500/15 animate-[spin_60s_linear_infinite_reverse] pointer-events-none"
          style={{ transform: 'translateZ(5px)' }}
        />

        {/* Central Portrait Visual Focal Point */}
        <div
          id="hero-profile-avatar"
          className="relative group z-20"
          style={{ transform: 'translateZ(40px)' }}
        >
          {/* Glowing frame gradient ring */}
          <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-emerald-400 opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-500" />

          {/* Precision frosted glass bezel */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full p-2 bg-white/[0.05] backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
            {/* The Actual Profile Photo */}
            <div className="w-full h-full rounded-full overflow-hidden relative border border-white/10 bg-slate-950">
              <img
                src={profilePhoto}
                alt="MD Taif Mia - AI Agent Expert & AI Specialist"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Active Status Badge */}
            <div className="absolute bottom-2 right-6 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-xl border border-emerald-400/40 text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Floating 3D Frosted Glass Cards around Profile Photo */}
        {/* ============================================================ */}

        {/* 1. AI AUTOMATION CARD (Top Left) */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-2 left-0 sm:left-2 z-30"
          style={{ transform: 'translateZ(70px)' }}
          onClick={() => onBadgeClick && onBadgeClick('AI & AUTOMATION')}
        >
          <div className="interactive-card flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-blue-400/50 hover:bg-white/[0.1] transition-all cursor-pointer group">
            <div className="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold tracking-wider text-slate-100 uppercase group-hover:text-blue-300">
                AI Automation
              </div>
              <div className="text-[9px] text-blue-300 font-mono flex items-center gap-1">
                <Workflow className="w-2.5 h-2.5" />
                <span>n8n &bull; Agents</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. GRAPHIC DESIGN CARD (Top Right) */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 right-0 sm:right-2 z-30"
          style={{ transform: 'translateZ(65px)' }}
          onClick={() => onBadgeClick && onBadgeClick('GRAPHIC DESIGN')}
        >
          <div className="interactive-card flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-emerald-400/50 hover:bg-white/[0.1] transition-all cursor-pointer group">
            <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold tracking-wider text-slate-100 uppercase group-hover:text-emerald-300">
                Graphic Design
              </div>
              <div className="text-[9px] text-emerald-300 font-mono">
                E-learning &amp; Earning
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. VIDEO CREATION CARD (Bottom Left) */}
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-6 -left-4 sm:left-0 z-30"
          style={{ transform: 'translateZ(75px)' }}
          onClick={() => onBadgeClick && onBadgeClick('VIDEO & CONTENT CREATION')}
        >
          <div className="interactive-card flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-indigo-400/50 hover:bg-white/[0.1] transition-all cursor-pointer group">
            <div className="w-7 h-7 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold tracking-wider text-slate-100 uppercase group-hover:text-indigo-300">
                Video Creation
              </div>
              <div className="text-[9px] text-indigo-300 font-mono">
                AI UGC &bull; Reels
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. AI PHOTO EDITING CARD (Bottom Right) */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-4 right-0 sm:right-2 z-30"
          style={{ transform: 'translateZ(60px)' }}
          onClick={() => onBadgeClick && onBadgeClick('AI PHOTO EDITING')}
        >
          <div className="interactive-card flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] hover:border-cyan-400/50 hover:bg-white/[0.1] transition-all cursor-pointer group">
            <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold tracking-wider text-slate-100 uppercase group-hover:text-cyan-300">
                AI Photo Editing
              </div>
              <div className="text-[9px] text-cyan-300 font-mono">
                Studio Retouch &bull; Gen
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. SEO CARD (Top Center Floating) */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2 z-30"
          style={{ transform: 'translateZ(85px)' }}
          onClick={() => onBadgeClick && onBadgeClick('SEO & DIGITAL SKILLS')}
        >
          <div className="interactive-card flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-2xl border border-emerald-400/40 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all cursor-pointer">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-bold text-white tracking-wide">SEO EXPERT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </motion.div>

        {/* Subtle Floating Neural Nodes & Data Indicators */}
        <div
          className="absolute top-1/4 -left-6 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center gap-1.5 pointer-events-none hidden sm:flex"
          style={{ transform: 'translateZ(25px)' }}
        >
          <Cpu className="w-3 h-3 text-blue-400" />
          <span>LLM Chains</span>
        </div>

        <div
          className="absolute bottom-1/3 -right-6 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800/80 text-[10px] font-mono text-slate-400 flex items-center gap-1.5 pointer-events-none hidden sm:flex"
          style={{ transform: 'translateZ(30px)' }}
        >
          <Zap className="w-3 h-3 text-emerald-400" />
          <span>Automation</span>
        </div>

        {/* Floating geometric 3D cubes / nodes */}
        <div
          className="absolute top-12 right-12 w-3 h-3 bg-blue-500/40 rounded-sm rotate-45 animate-spin pointer-events-none"
          style={{ transform: 'translateZ(45px)', animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-16 left-12 w-2.5 h-2.5 bg-emerald-400/40 rounded-full animate-ping pointer-events-none"
          style={{ transform: 'translateZ(50px)' }}
        />
      </motion.div>
    </div>
  );
};
