import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, Moon, SlidersHorizontal, Sun } from 'lucide-react';
import { DEFAULT_PORTRAIT_SRC } from '../data/profile';

interface NavbarProps {
  name: string;
  avatarDataUrl: string | null;
  theme: 'light' | 'dark';
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onToggleTheme: () => void;
  onOpenCustomize: () => void;
}

const TABS = [
  { id: 'overview', label: 'Overview & Hero' },
  { id: 'about', label: 'About Me' },
  { id: 'education', label: 'Education' },
  { id: 'journey', label: 'Professional Identity' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'technology', label: 'Technology' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Vibe Coding & AI' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'beyond', label: 'Beyond Work' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar({
  name,
  avatarDataUrl,
  theme,
  activeTab,
  onSelectTab,
  onToggleTheme,
  onOpenCustomize,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const avatarSrc = avatarDataUrl || DEFAULT_PORTRAIT_SRC;

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menuOpen]);

  const activeLabel = TABS.find((t) => t.id === activeTab)?.label ?? 'Overview';

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#D8E6DE] bg-[#F7FAF8]/90 backdrop-blur-md transition-colors duration-300 dark:border-[#24382E] dark:bg-[#080C0A]/90">
      <div className="mx-auto flex h-[50px] max-w-5xl items-center justify-between gap-4 px-4 sm:h-[58px] sm:px-8">
        {/* Brand / Active Section indicator */}
        <div className="flex items-center gap-2.5 min-w-0">
          <a
            href="#top"
            onClick={() => onSelectTab('overview')}
            className="inline-flex items-center gap-2 font-display text-lg font-bold italic tracking-tight text-[#0E1813] transition-colors hover:text-emerald-700 whitespace-nowrap shrink-0 dark:text-white dark:hover:text-emerald-400"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#D8E6DE] bg-[#E2EFE8] ring-1 ring-emerald-700/25 sm:h-8 sm:w-8 dark:border-[#24382E] dark:bg-[#122019]">
              {!avatarFailed ? (
                <img
                  src={avatarSrc}
                  alt={name}
                  referrerPolicy="no-referrer"
                  onError={() => setAvatarFailed(true)}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <span className="font-display text-[10px] font-bold not-italic text-emerald-900 dark:text-emerald-200">
                  AK
                </span>
              )}
            </span>
            <span className="inline-block origin-left scale-x-110 font-name text-[20px] font-normal not-italic leading-none tracking-normal sm:mr-3.5 sm:text-[22px]">
              {name}
            </span>
          </a>
          <span className="hidden font-mono text-[11px] font-medium tracking-wide text-emerald-700 sm:inline dark:text-emerald-400">
            / {activeLabel}
          </span>
        </div>

        {/* Quick Actions & 3-Dot Menu */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#D8E6DE] bg-white text-[#647A6F] shadow-xs transition-colors hover:border-emerald-700/50 hover:text-[#3E5147] cursor-pointer dark:border-[#24382E] dark:bg-[#121B16] dark:text-[#DCEAE2] dark:hover:text-white"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenCustomize}
            aria-label="Customize profile"
            title="Customize Profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#D8E6DE] bg-white text-[#0E1813] shadow-xs transition-colors hover:border-emerald-700/50 cursor-pointer dark:border-[#24382E] dark:bg-[#121B16] dark:text-white"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>

          {/* 3-Dot Menu Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#D8E6DE] bg-white text-[#0E1813] shadow-xs transition-colors hover:border-emerald-700/50 cursor-pointer dark:border-[#24382E] dark:bg-[#121B16] dark:text-white"
            >
              <MoreVertical className="h-4 w-4" />
            </button>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 4 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 4 }}
                  transition={{ duration: 0.16 }}
                  className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border-2 border-[#D8E6DE] bg-white py-2 shadow-xl dark:border-[#24382E] dark:bg-[#101613]"
                >
                  <div className="border-b border-[#E4ECE7] px-4 py-2 dark:border-[#24382E]">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#7E9288] dark:text-[#5C7166]">
                      Navigation Menu
                    </span>
                  </div>

                  <div className="max-h-[65vh] overflow-y-auto px-2 py-1">
                    {TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            onSelectTab(tab.id);
                            setMenuOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-bold transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-emerald-700 text-white dark:bg-emerald-600'
                              : 'text-[#384A41] hover:bg-emerald-50 hover:text-emerald-800 dark:text-[#A4B8AE] dark:hover:bg-[#18261F] dark:hover:text-emerald-300'
                          }`}
                        >
                          <span>{tab.label}</span>
                          {isActive && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
