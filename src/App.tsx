import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
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
          theme={theme}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onToggleTheme={handleToggleTheme}
          onOpenCustomize={() => setCustomizeOpen(true)}
        />

        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-0 py-0 sm:px-8 sm:pt-6 sm:pb-3">
          {activeTab === 'overview' && (
            <HeroSection
              profile={profile}
              onSelectTab={handleSelectTab}
              onOpenCustomize={() => setCustomizeOpen(true)}
            />
          )}

          {activeTab === 'about' && <AboutSection profile={profile} />}

          {activeTab === 'journey' && <JourneySection />}

          {activeTab === 'expertise' && <ExpertiseSection />}

          {activeTab === 'technology' && <TechnologySection />}

          {activeTab === 'projects' && (
            <ProjectsSection
              projects={profile.projects}
              onAddProject={handleAddProject}
              onDeleteProject={handleDeleteProject}
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

        {/* Minimal + Compact + Full-Bleed Android Footer attached to Profile Card */}
        <footer className="mx-auto w-full max-w-5xl px-0 py-0 sm:px-8 sm:pt-3 sm:pb-6">
          <div className="flex flex-row items-center justify-between gap-2 rounded-none border-x-0 border-b-0 border-t-2 border-[#D8E6DE] bg-white px-4 py-2.5 shadow-none sm:gap-4 sm:rounded-2xl sm:border-2 sm:px-6 sm:py-3.5 sm:shadow-sm dark:border-[#24382E] dark:bg-[#0D1411]">
            <div className="flex min-w-0 items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 sm:h-8 sm:w-8 sm:rounded-xl dark:bg-emerald-950/80 dark:text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-bold text-[#0E1813] dark:text-white">
                  {profile.name}
                </p>
                <p className="truncate text-[10px] font-medium text-[#52665C] sm:text-[11px] dark:text-[#8AA095]">
                  © {new Date().getFullYear()} · Curious by Nature
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setCustomizeOpen(true)}
                className="inline-flex min-h-[34px] items-center gap-1 rounded-lg border border-[#D8E6DE] bg-[#F4F8F5] px-2.5 py-1 text-[11px] font-bold text-[#3E5147] transition-colors hover:border-emerald-700/50 whitespace-nowrap cursor-pointer sm:rounded-xl sm:px-3.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-[#A4B8AE]"
              >
                <Heart className="h-3 w-3 text-emerald-700 sm:h-3.5 sm:w-3.5 dark:text-emerald-400" />
                <span>Customize</span>
              </button>

              <button
                type="button"
                onClick={() => handleSelectTab('overview')}
                aria-label="Scroll to top"
                className="inline-flex min-h-[34px] items-center gap-1 rounded-lg border border-[#D8E6DE] bg-[#F4F8F5] px-2.5 py-1 text-[11px] font-bold text-[#3E5147] transition-colors hover:border-emerald-700/50 whitespace-nowrap cursor-pointer sm:rounded-xl sm:px-3.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-[#A4B8AE]"
              >
                <span>Top</span>
                <ArrowUp className="h-3 w-3 text-emerald-700 sm:h-3.5 sm:w-3.5 dark:text-emerald-400" />
              </button>
            </div>
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
