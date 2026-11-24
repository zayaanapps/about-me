import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, Moon, SlidersHorizontal, Sun, X } from 'lucide-react';

interface NavbarProps {
  name: string;
  theme: 'light' | 'dark';
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onToggleTheme: () => void;
  onOpenCustomize: () => void;
}

const TABS = [
  { id: 'overview', label: 'Overview & Hero' },
  { id: 'about', label: 'About Me' },
  { id: 'journey', label: 'Journey' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'technology', label: 'Technology' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'beyond', label: 'Beyond Work' },
  { id: 'exploring', label: 'Exploring' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const;

export function Navbar({
  name,
  theme,
  activeTab,
  onSelectTab,
  onToggleTheme,
  onOpenCustomize,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

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
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-8">
        {/* Brand / Active Section indicator */}
        <div className="flex items-center gap-3 min-w-0">
          <a
            href="#top"
            onClick={() => onSelectTab('overview')}
            className="font-display text-base font-extrabold tracking-tight text-[#0E1813] transition-colors hover:text-emerald-700 whitespace-nowrap shrink-0 dark:text-white dark:hover:text-emerald-400"
          >
            {name}
          </a>
          <span className="hidden text-xs font-bold text-emerald-700 sm:inline dark:text-emerald-400">
            / {activeLabel}
          </span>
        </div>

        {/* Quick Actions & 3-Dot Menu */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-2 border-[#D8E6DE] bg-white text-[#0E1813] shadow-xs transition-colors hover:border-emerald-700/50 cursor-pointer dark:border-[#24382E] dark:bg-[#121B16] dark:text-white"
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
