import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Mail, 
  Key, 
  User, 
  Phone, 
  MapPin, 
  Sparkles, 
  Save, 
  RefreshCw, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  Inbox, 
  LayoutDashboard, 
  FileText, 
  Check, 
  Trash2, 
  ExternalLink,
  MessageSquare,
  Sliders,
  Download,
  Copy
} from 'lucide-react';
import { personalInfo, servicesList } from '../data/portfolioData';

export interface InquiryItem {
  id: string;
  name: string;
  email: string;
  projectType: string;
  message: string;
  date: string;
  isRead: boolean;
}

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REQUIRED_EMAIL = 'adib1234w@gmail.com';
const REQUIRED_PASSWORD = '1234567899T';

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('taif_admin_auth') === 'true';
  });

  // Login form state
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState<'overview' | 'inbox' | 'profile' | 'services' | 'system'>('overview');

  // Admin Profile State
  const [adminProfile, setAdminProfile] = useState(() => {
    const saved = localStorage.getItem('taif_custom_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return {
      fullName: personalInfo.fullName,
      phone: personalInfo.phone,
      email: personalInfo.email,
      location: personalInfo.location,
      facebookName: personalInfo.facebookName,
      heroHeadline: personalInfo.heroHeadline,
      bio: personalInfo.bio,
      completedProjects: '50+',
      automationPipelines: '30+',
      gpaStatus: '5.00 / 5.00 (Golden A+)',
      currentStatus: 'Open for Freelance & AI Consultations',
    };
  });

  // Inquiries State
  const [inquiries, setInquiries] = useState<InquiryItem[]>(() => {
    const saved = localStorage.getItem('taif_portfolio_inquiries');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return [
      {
        id: 'inq-1',
        name: 'Rahim Chowdhury',
        email: 'rahim.tech@example.com',
        projectType: 'AI Agent Development',
        message: 'Looking for a custom multi-step customer support AI chatbot with n8n and OpenAI integration for our e-commerce platform.',
        date: '2026-09-01 18:30',
        isRead: false,
      },
      {
        id: 'inq-2',
        name: 'Sarah Jenkins',
        email: 'sarah.growth@creativeagency.co',
        projectType: 'AI Video Creation & UGC',
        message: 'Hi Taif, we need 10 high-converting viral UGC and Reels videos edited with AI avatars and motion graphics.',
        date: '2026-08-30 11:15',
        isRead: true,
      },
      {
        id: 'inq-3',
        name: 'Tanvir Ahmed',
        email: 'tanvir@startupdhaka.com',
        projectType: 'AI Automation & n8n',
        message: 'Need automated lead qualification workflow connecting Facebook Lead Ads to Google Sheets and Telegram.',
        date: '2026-08-28 15:45',
        isRead: true,
      }
    ];
  });

  const [savedNotification, setSavedNotification] = useState(false);

  // Sync inquiries to localStorage whenever updated
  useEffect(() => {
    localStorage.setItem('taif_portfolio_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const cleanEmail = emailInput.trim().toLowerCase();
    const cleanPassword = passwordInput.trim();

    if (cleanEmail === REQUIRED_EMAIL.toLowerCase() && cleanPassword === REQUIRED_PASSWORD) {
      setLoginSuccess(true);
      setTimeout(() => {
        setIsAuthenticated(true);
        localStorage.setItem('taif_admin_auth', 'true');
        setLoginSuccess(false);
        setLoginError('');
      }, 500);
    } else {
      setLoginError('Invalid credentials. Please verify your admin email and password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('taif_admin_auth');
    setEmailInput('');
    setPasswordInput('');
  };

  const handleFillCredentials = () => {
    setEmailInput(REQUIRED_EMAIL);
    setPasswordInput(REQUIRED_PASSWORD);
    setLoginError('');
  };

  const handleSaveProfile = () => {
    localStorage.setItem('taif_custom_profile', JSON.stringify(adminProfile));
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2500);
  };

  const toggleInquiryRead = (id: string) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, isRead: !inq.isRead } : inq));
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(inq => inq.id !== id));
  };

  const handleExportData = () => {
    const backupData = {
      profile: adminProfile,
      inquiries,
      exportedAt: new Date().toISOString(),
      admin: 'MD Taif Mia',
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `taif-portfolio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ type: 'spring', damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-slate-900/95 border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-3xl flex flex-col my-auto max-h-[92vh]"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md border border-white/15">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-bold text-white tracking-wide">
                    Admin Portal &bull; MD Taif Mia
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    Ctrl+Alt+Shift+T
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {isAuthenticated ? 'Master Control & Portfolio Management' : 'Secure Admin Authentication'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 text-xs font-semibold flex items-center gap-1.5 border border-red-500/30 transition-colors cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MAIN BODY: LOGIN OR DASHBOARD */}
          {!isAuthenticated ? (
            /* ============================================================ */
            /* LOGIN SCREEN */
            /* ============================================================ */
            <div className="p-6 sm:p-10 flex flex-col items-center justify-center max-w-md mx-auto w-full">
              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-4 shadow-lg shadow-blue-600/20">
                <Lock className="w-8 h-8" />
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center mb-1">
                Admin Authentication
              </h3>
              <p className="text-xs text-slate-400 text-center mb-6">
                Enter your designated administrative credentials to access the backend panel.
              </p>

              {loginError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-200 text-xs flex items-center gap-2 mb-4"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{loginError}</span>
                </motion.div>
              )}

              {loginSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-xs flex items-center gap-2 mb-4"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Access Granted! Loading Admin Dashboard...</span>
                </motion.div>
              )}

              <form onSubmit={handleLogin} className="w-full space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>Admin Gmail Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="adib1234w@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Admin Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-3.5 py-2.5 pr-10 rounded-xl bg-white/[0.05] border border-white/10 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:bg-white/[0.08] transition-all font-mono"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:brightness-110 active:scale-98 border border-white/15"
                >
                  <Unlock className="w-4 h-4" />
                  <span>Authenticate &amp; Open Portal</span>
                </button>
              </form>

              {/* Quick Preset Credentials Button for Convenience */}
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={handleFillCredentials}
                  className="text-[11px] text-blue-400 hover:text-blue-300 flex items-center gap-1.5 cursor-pointer underline underline-offset-2"
                >
                  <span>Auto-fill Admin Credentials</span>
                </button>
                <p className="text-[10px] text-slate-400 text-center font-mono">
                  Shortcut: <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Alt</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Shift</kbd> + <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">T</kbd>
                </p>
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* AUTHENTICATED ADMIN DASHBOARD */
            /* ============================================================ */
            <div className="flex flex-col flex-1 overflow-hidden">
              {/* Tab Navigation */}
              <div className="flex items-center gap-1.5 px-6 pt-3 pb-2 border-b border-white/10 bg-slate-950/40 overflow-x-auto">
                {[
                  { id: 'overview' as const, label: 'Overview & Stats', icon: LayoutDashboard },
                  { id: 'inbox' as const, label: `Inquiries (${inquiries.filter(i => !i.isRead).length})`, icon: Inbox },
                  { id: 'profile' as const, label: 'Profile & Contact', icon: User },
                  { id: 'services' as const, label: 'Services Manager', icon: Sliders },
                  { id: 'system' as const, label: 'Backup & Hotkeys', icon: ShieldCheck },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-white/15'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Body */}
              <div className="p-6 overflow-y-auto flex-1 max-h-[calc(92vh-130px)] space-y-6">
                {/* -------------------------------------------------------- */}
                {/* TAB 1: OVERVIEW & STATS */}
                {/* -------------------------------------------------------- */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Welcome Banner */}
                    <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900/40 border border-blue-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[11px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                            Live Administrator Mode
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          Welcome back, MD Taif Mia
                        </h3>
                        <p className="text-xs text-slate-300">
                          Primary Email: <span className="font-mono text-blue-300">adib1234w@gmail.com</span> &bull; Phone: <span className="font-mono text-emerald-300">01786681134</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleSaveProfile}
                          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md border border-white/15 cursor-pointer"
                        >
                          <Save className="w-3.5 h-3.5" />
                          <span>Save Changes</span>
                        </button>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Projects Completed</span>
                        <input
                          type="text"
                          value={adminProfile.completedProjects}
                          onChange={(e) => setAdminProfile({ ...adminProfile, completedProjects: e.target.value })}
                          className="text-lg font-extrabold text-white bg-transparent border-b border-white/20 focus:border-blue-400 outline-none w-full"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">AI Automations</span>
                        <input
                          type="text"
                          value={adminProfile.automationPipelines}
                          onChange={(e) => setAdminProfile({ ...adminProfile, automationPipelines: e.target.value })}
                          className="text-lg font-extrabold text-blue-300 bg-transparent border-b border-white/20 focus:border-blue-400 outline-none w-full"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">Academic GPA</span>
                        <input
                          type="text"
                          value={adminProfile.gpaStatus}
                          onChange={(e) => setAdminProfile({ ...adminProfile, gpaStatus: e.target.value })}
                          className="text-xs font-bold text-emerald-300 bg-transparent border-b border-white/20 focus:border-blue-400 outline-none w-full"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] text-slate-400 uppercase font-mono block mb-1">New Inquiries</span>
                        <div className="text-lg font-extrabold text-indigo-300">
                          {inquiries.filter(i => !i.isRead).length} Unread
                        </div>
                      </div>
                    </div>

                    {/* Quick Profile Summary */}
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                      <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span>Current Portfolio Headline &amp; Status</span>
                      </h4>

                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">Status Banner</label>
                        <input
                          type="text"
                          value={adminProfile.currentStatus}
                          onChange={(e) => setAdminProfile({ ...adminProfile, currentStatus: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] text-slate-400 block mb-1">Hero Main Headline</label>
                        <input
                          type="text"
                          value={adminProfile.heroHeadline}
                          onChange={(e) => setAdminProfile({ ...adminProfile, heroHeadline: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* TAB 2: INBOX & INQUIRIES */}
                {/* -------------------------------------------------------- */}
                {activeTab === 'inbox' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-bold text-white flex items-center gap-2">
                          <Inbox className="w-4 h-4 text-blue-400" />
                          <span>Client Inquiries &amp; Contact Submissions</span>
                        </h3>
                        <p className="text-xs text-slate-400">
                          {inquiries.length} total messages received across website forms
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          const newInq: InquiryItem = {
                            id: `inq-${Date.now()}`,
                            name: 'Prospective Client',
                            email: 'client@company.com',
                            projectType: 'AI Workflow Automation',
                            message: 'Looking for a quote on building an automated CRM syncing pipeline using n8n and OpenAI.',
                            date: new Date().toLocaleString(),
                            isRead: false,
                          };
                          setInquiries([newInq, ...inquiries]);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs text-slate-200 border border-white/10 flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>+ Test Inquiry</span>
                      </button>
                    </div>

                    {inquiries.length === 0 ? (
                      <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/10 text-slate-400 text-xs">
                        No inquiries received yet.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {inquiries.map((inq) => (
                          <div
                            key={inq.id}
                            className={`p-4 rounded-2xl border transition-all ${
                              inq.isRead 
                                ? 'bg-white/[0.02] border-white/10 text-slate-300' 
                                : 'bg-blue-950/30 border-blue-500/40 text-white shadow-md'
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-white">{inq.name}</span>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.08] text-blue-300 border border-white/10">
                                  {inq.projectType}
                                </span>
                                {!inq.isRead && (
                                  <span className="w-2 h-2 rounded-full bg-blue-400" title="Unread" />
                                )}
                              </div>
                              <span className="text-[10px] text-slate-400 font-mono">{inq.date}</span>
                            </div>

                            <p className="text-xs text-slate-300 mb-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                              "{inq.message}"
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                              <div className="flex items-center gap-3">
                                <a
                                  href={`mailto:${inq.email}?subject=Re: ${encodeURIComponent(inq.projectType)} project inquiry`}
                                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono text-[11px]"
                                >
                                  <Mail className="w-3 h-3" />
                                  <span>{inq.email}</span>
                                </a>
                              </div>

                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleInquiryRead(inq.id)}
                                  className="px-2.5 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-[11px] text-slate-300 flex items-center gap-1 cursor-pointer"
                                >
                                  <Check className="w-3 h-3" />
                                  <span>{inq.isRead ? 'Mark Unread' : 'Mark Read'}</span>
                                </button>
                                <button
                                  onClick={() => deleteInquiry(inq.id)}
                                  className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 cursor-pointer"
                                  title="Delete"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* TAB 3: PROFILE & CONTACT INFO */}
                {/* -------------------------------------------------------- */}
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={adminProfile.fullName}
                          onChange={(e) => setAdminProfile({ ...adminProfile, fullName: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Direct Phone / WhatsApp</label>
                        <input
                          type="text"
                          value={adminProfile.phone}
                          onChange={(e) => setAdminProfile({ ...adminProfile, phone: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Public Email</label>
                        <input
                          type="email"
                          value={adminProfile.email}
                          onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">Location</label>
                        <input
                          type="text"
                          value={adminProfile.location}
                          onChange={(e) => setAdminProfile({ ...adminProfile, location: e.target.value })}
                          className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white outline-none focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Professional Bio</label>
                      <textarea
                        rows={4}
                        value={adminProfile.bio}
                        onChange={(e) => setAdminProfile({ ...adminProfile, bio: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-200 outline-none focus:border-blue-400 resize-none"
                      />
                    </div>

                    <button
                      onClick={handleSaveProfile}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold flex items-center gap-2 shadow-md cursor-pointer border border-white/15"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Profile Updates</span>
                    </button>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* TAB 4: SERVICES MANAGER */}
                {/* -------------------------------------------------------- */}
                {activeTab === 'services' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-white">Active Core Services ({servicesList.length})</h3>
                      <span className="text-xs text-emerald-400 font-mono">All 10 Services Live</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {servicesList.map((svc) => (
                        <div
                          key={svc.number}
                          className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-white flex items-center gap-1.5">
                              <span className="font-mono text-[10px] text-blue-400">#{svc.number}</span>
                              <span>{svc.title}</span>
                            </div>
                            <div className="text-[10px] text-slate-400">{svc.tags ? svc.tags[0] : 'Service'}</div>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono">
                            Active
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* -------------------------------------------------------- */}
                {/* TAB 5: SYSTEM & BACKUP */}
                {/* -------------------------------------------------------- */}
                {activeTab === 'system' && (
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                        Keyboard Shortcut &amp; Access Controls
                      </h4>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-bold text-slate-200">Global Admin Portal Shortcut</div>
                          <div className="text-[11px] text-slate-400">Press from anywhere across the website to toggle this modal</div>
                        </div>
                        <div className="flex items-center gap-1 font-mono text-xs text-blue-300 font-bold bg-blue-950/60 px-3 py-1.5 rounded-xl border border-blue-400/30">
                          <span>Ctrl + Alt + Shift + T</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1 text-xs">
                        <div className="text-slate-300 font-semibold">Admin Credentials Record</div>
                        <div className="text-slate-400 font-mono text-[11px]">Gmail: adib1234w@gmail.com</div>
                        <div className="text-slate-400 font-mono text-[11px]">Password: 1234567899T</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleExportData}
                        className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-white text-xs font-semibold flex items-center gap-2 border border-white/10 cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-blue-400" />
                        <span>Export Backup Data (JSON)</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm('Reset all custom admin modifications to default?')) {
                            localStorage.removeItem('taif_custom_profile');
                            window.location.reload();
                          }
                        }}
                        className="px-4 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 text-xs font-semibold flex items-center gap-2 border border-red-500/30 cursor-pointer"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Reset Defaults</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Saved Notification Toast */}
              {savedNotification && (
                <div className="absolute bottom-4 right-6 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-white/20 animate-bounce">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Changes saved successfully!</span>
                </div>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
