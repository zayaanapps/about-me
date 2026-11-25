import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { JourneySection } from './components/JourneySection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectsSection } from './components/ProjectsSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { PhilosophySection } from './components/PhilosophySection';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { ExploringSection } from './components/ExploringSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import {
  clearSavedProfile,
  DEFAULT_PROFILE,
  loadSavedProfile,
  saveProfile,
  type GalleryPhoto,
  type PersonalProfile,
  type ProjectItem,
} from './data/profile';

type ThemeMode = 'light' | 'dark';

function getInitialTheme(): ThemeMode {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [profile, setProfile] = useState<PersonalProfile>(loadSavedProfile);
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [customizeOpen, setCustomizeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('kuafi-portfolio-theme', theme);
    } catch {
      // Ignore storage restrictions
    }
  }, [theme]);

  useEffect(() => {
    document.title = `${profile.name} — Professional & Personal Portfolio`;
  }, [profile.name]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSaveProfile = (nextProfile: PersonalProfile) => {
    setProfile(nextProfile);
    saveProfile(nextProfile);
  };

  const handleAddProject = (project: ProjectItem) => {
    const next: PersonalProfile = {
      ...profile,
      projects: [project, ...profile.projects],
    };
    setProfile(next);
    saveProfile(next);
  };

  const handleDeleteProject = (projectId: string) => {
    const remaining = profile.projects.filter((p) => p.id !== projectId);
    if (remaining.length === 0) return;
    const next: PersonalProfile = {
      ...profile,
      projects: remaining,
    };
    setProfile(next);
    saveProfile(next);
  };

  const handleAddPhoto = (photo: GalleryPhoto) => {
    const next: PersonalProfile = {
      ...profile,
      gallery: [photo, ...profile.gallery],
    };
    setProfile(next);
    saveProfile(next);
  };

  const handleDeletePhoto = (photoId: string) => {
    const remaining = profile.gallery.filter((g) => g.id !== photoId);
    if (remaining.length === 0) return;
    const next: PersonalProfile = {
      ...profile,
      gallery: remaining,
    };
    setProfile(next);
    saveProfile(next);
  };

  const handleResetProfile = () => {
    clearSavedProfile();
    setProfile(DEFAULT_PROFILE);
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        id="top"
        className="flex min-h-dvh flex-col bg-[#F7FAF8] text-[#0E1813] transition-colors duration-300 dark:bg-[#080C0A] dark:text-[#EFF4F1]"
      >
        <Navbar
          name={profile.name}
          avatarDataUrl={profile.avatarDataUrl}
          theme={theme}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onToggleTheme={handleToggleTheme}
          onOpenCustomize={() => setCustomizeOpen(true)}
        />

        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-0 py-0 sm:px-8 sm:pt-6 sm:pb-6">
          {activeTab === 'overview' && (
            <HeroSection
              profile={profile}
              onSelectTab={handleSelectTab}
              onOpenCustomize={() => setCustomizeOpen(true)}
            />
          )}

          {activeTab === 'about' && <AboutSection profile={profile} />}

          {activeTab === 'education' && <EducationSection />}

          {activeTab === 'journey' && <JourneySection />}

          {activeTab === 'expertise' && <ExpertiseSection />}

          {activeTab === 'technology' && <TechnologySection />}

          {activeTab === 'projects' && (
            <ProjectsSection
              projects={profile.projects}
              onAddProject={handleAddProject}
              onDeleteProject={handleDeleteProject}
              onNavigateContact={() => handleSelectTab('contact')}
            />
          )}

          {activeTab === 'playground' && <PlaygroundSection />}

          {activeTab === 'philosophy' && <PhilosophySection />}

          {activeTab === 'beyond' && <BeyondWorkSection profile={profile} />}

          {activeTab === 'exploring' && <ExploringSection profile={profile} />}

          {activeTab === 'gallery' && (
            <GallerySection
              gallery={profile.gallery}
              onAddPhoto={handleAddPhoto}
              onDeletePhoto={handleDeletePhoto}
            />
          )}

          {activeTab === 'contact' && <ContactSection profile={profile} />}
        </main>

        {/* Sticky Minimal Footer across all pages */}
        <footer className="sticky bottom-0 z-30 w-full border-t-2 border-[#D8E6DE] bg-white/95 backdrop-blur-md transition-colors duration-300 sm:bg-[#F7FAF8]/90 dark:border-[#24382E] dark:bg-[#0D1411]/95 sm:dark:bg-[#080C0A]/90">
          <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-2.5 sm:px-8 sm:py-3">
            <p className="text-center font-mono text-[11px] font-medium text-[#3E5147] sm:text-xs dark:text-[#9BB0A5]">
              ©{' '}
              <a
                href="https://abdullahilkuafi.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Abdullahil Kuafi
              </a>{' '}
              <span className="text-[9.5px] text-[#60746A] sm:text-[10.5px] dark:text-[#7E9288]">
                | All Rights Reserved
              </span>
            </p>
          </div>
        </footer>

        <CustomizeDrawer
          open={customizeOpen}
          profile={profile}
          onClose={() => setCustomizeOpen(false)}
          onSave={handleSaveProfile}
          onReset={handleResetProfile}
        />
      </div>
    </MotionConfig>
  );
}
