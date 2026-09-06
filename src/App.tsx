import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationTimeline } from './components/EducationTimeline';
import { TrainingCertificates } from './components/TrainingCertificates';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { HonestStats } from './components/HonestStats';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { DedicatedCaseStudyView } from './components/DedicatedCaseStudyView';
import { TaifAssistantWidget } from './components/TaifAssistantWidget';
import { MobileBottomNav } from './components/MobileBottomNav';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { AdminPortalModal } from './components/AdminPortalModal';
import { PageRoute } from './types';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('/');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalPrefill, setContactModalPrefill] = useState<string | undefined>(undefined);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  // Global Keyboard Shortcut: Ctrl + Alt + Shift + T (or Cmd + Alt + Shift + T)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isControlOrMeta = e.ctrlKey || e.metaKey;
      if (isControlOrMeta && e.altKey && e.shiftKey && (e.key === 'T' || e.key === 't')) {
        e.preventDefault();
        setIsAdminModalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync route with browser window pathname or hash
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname as PageRoute;
      if (
        path === '/about' ||
        path === '/skills' ||
        path === '/services' ||
        path === '/projects' ||
        path === '/case-studies' ||
        path === '/case-studies/ai-automation' ||
        path === '/certifications' ||
        path === '/contact'
      ) {
        setCurrentRoute(path);
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    if (route === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (route === '/case-studies/ai-automation') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elementId = route.replace('/', '');
      const el = document.getElementById(elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenContactModal = (prefill?: string) => {
    setContactModalPrefill(prefill);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Refined Executive Ambient Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-gradient-to-b from-blue-600/[0.07] via-indigo-600/[0.03] to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="fixed top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[150px] pointer-events-none -z-10" />
      <div className="fixed top-2/3 -right-32 w-[550px] h-[550px] rounded-full bg-indigo-600/[0.04] blur-[160px] pointer-events-none -z-10" />
      
      {/* Precision Micro Dot Matrix with smooth radial vignette */}
      <div 
        className="fixed inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-10"
        style={{
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 30%, black 40%, transparent 95%)'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#080d1a]/40 to-[#080d1a]/95 pointer-events-none -z-10" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Sticky Header Navigation */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Main Content Areas */}
      {currentRoute === '/case-studies/ai-automation' ? (
        <main className="min-h-screen">
          <DedicatedCaseStudyView
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        </main>
      ) : (
        <main>
          {/* Hero Section with 3D Scene */}
          <HeroSection
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleOpenContactModal()}
          />

          {/* About Section */}
          <AboutSection onOpenContactModal={() => handleOpenContactModal('About MD Taif Mia')} />

          {/* Education Timeline */}
          <EducationTimeline />

          {/* Training & Certifications */}
          <TrainingCertificates />

          {/* Skills Section */}
          <SkillsSection />

          {/* Services Section */}
          <ServicesSection onOpenContactModal={handleOpenContactModal} />

          {/* Projects Showcase */}
          <ProjectsSection onOpenContactModal={handleOpenContactModal} />

          {/* Case Studies */}
          <CaseStudiesSection
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />

          {/* Experience Section */}
          <ExperienceSection />

          {/* Why Work With Me */}
          <WhyWorkWithMe />

          {/* Honest Stats */}
          <HonestStats />

          {/* Testimonials */}
          <TestimonialsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>
      )}

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Mobile & Tablet Bottom Navigation Bar (Phone & Tablet Friendly) */}
      <MobileBottomNav
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        servicePrefill={contactModalPrefill}
      />

      {/* Floating Circular Scroll To Top Button with Progress Ring */}
      <ScrollToTopButton />

      {/* Interactive Floating AI Assistant Widget */}
      <TaifAssistantWidget />

      {/* Hidden/Protected Frontend Admin Portal (Shortcut: Ctrl+Alt+Shift+T) */}
      <AdminPortalModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}
