import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ArrowUp } from 'lucide-react';
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
        className="min-h-screen bg-[#F7FAF8] text-[#0E1813] transition-colors duration-300 dark:bg-[#080C0A] dark:text-[#EFF4F1]"
      >
        <Navbar
          name={profile.name}
          theme={theme}
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onToggleTheme={handleToggleTheme}
          onOpenCustomize={() => setCustomizeOpen(true)}
        />

        <main className="mx-auto max-w-5xl px-4 py-6 sm:px-8 sm:py-8">
          {activeTab === 'overview' && (
            <HeroSection
              profile={profile}
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

        <footer className="border-t-2 border-[#D8E6DE] py-6 transition-colors duration-300 dark:border-[#24382E]">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-xs font-bold text-[#52665C] sm:flex-row sm:px-8 dark:text-[#8AA095]">
            <p>
              © {new Date().getFullYear()} {profile.name} · Professional by Experience. Curious by Nature.
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setCustomizeOpen(true)}
                className="min-h-[36px] font-bold text-[#384A41] transition-colors hover:text-emerald-700 cursor-pointer dark:text-[#A4B8AE] dark:hover:text-emerald-400"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={() => handleSelectTab('overview')}
                className="inline-flex min-h-[36px] items-center gap-1 font-bold text-[#384A41] transition-colors hover:text-emerald-700 cursor-pointer dark:text-[#A4B8AE] dark:hover:text-emerald-400"
              >
                <span>Top</span>
                <ArrowUp className="h-3 w-3" />
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
