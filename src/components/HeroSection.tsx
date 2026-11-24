import { useState } from 'react';
import { motion } from 'motion/react';
import { RefreshCw, ShieldCheck, Sparkles } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';
import { MinimalAvatar } from './MinimalAvatar';

interface HeroSectionProps {
  profile: PersonalProfile;
  onOpenCustomize: () => void;
}

type AvatarMode = 'portrait' | 'sketch';

export function HeroSection({ profile, onOpenCustomize }: HeroSectionProps) {
  const [avatarMode, setAvatarMode] = useState<AvatarMode>('portrait');
  const [flipCount, setFlipCount] = useState(0);

  const handleToggleAvatar = () => {
    setAvatarMode((prev) => (prev === 'portrait' ? 'sketch' : 'portrait'));
    setFlipCount((prev) => prev + 1);
  };

  const handleSelectMode = (nextMode: AvatarMode) => {
    if (nextMode === avatarMode) return;
    setAvatarMode(nextMode);
    setFlipCount((prev) => prev + 1);
  };

  return (
    <section
      id="hero"
      aria-label="Profile Card section"
      className="relative flex min-h-[calc(100vh-8rem)] flex-col justify-between overflow-hidden rounded-none border-x-0 border-b-2 border-t-0 border-[#D8E6DE] bg-white px-4 py-5 shadow-none sm:rounded-3xl sm:border-2 sm:px-10 sm:py-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div>
        {/* Canopy */}
        <div className="relative -mx-4 -mt-5 h-36 w-[calc(100%+2rem)] overflow-hidden bg-gradient-to-br from-[#044E38] via-[#047857] to-[#065F46] sm:-mx-10 sm:-mt-10 sm:h-44 sm:[width:calc(100%+5rem)] dark:from-[#02241C] dark:via-[#044E38] dark:to-[#033B2B]">
          <div className="relative flex items-center justify-between px-4 pt-3.5 sm:px-10 sm:pt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/25 px-3 py-1 font-mono text-[11px] font-bold text-emerald-100 backdrop-blur-xs">
              <ShieldCheck className="h-3 w-3" />
              <span>Operations Professional</span>
            </span>

            <button
              type="button"
              onClick={onOpenCustomize}
              className="inline-flex min-h-[32px] items-center gap-1.5 rounded-full bg-black/30 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-xs transition-colors hover:bg-black/50 cursor-pointer"
            >
              <Sparkles className="h-3 w-3 text-emerald-300" />
              <span>Customize</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="relative -mt-16 flex items-end gap-3.5">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-3 border-white bg-[#E2EFE8] ring-2 ring-emerald-700/35 shadow-lg sm:h-36 sm:w-36 dark:border-[#0D1411] dark:bg-[#122019]">
              <MinimalAvatar
                name={profile.name}
                mode={avatarMode}
                avatarDataUrl={profile.avatarDataUrl}
              />
            </div>

            <div className="flex flex-col gap-1.5 pb-1">
              <button
                type="button"
                onClick={handleToggleAvatar}
                aria-label="Toggle avatar mode"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#047857] text-white shadow-sm transition-transform active:scale-95 cursor-pointer dark:border-[#0D1411]"
              >
                <motion.span
                  animate={{ rotate: flipCount * 180 }}
                  transition={{ duration: 0.25 }}
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </motion.span>
              </button>

              <div
                role="tablist"
                className="inline-flex items-center rounded-xl border border-[#D8E6DE] bg-[#EEF4F1] p-0.5 dark:border-[#24382E] dark:bg-[#121B16]"
              >
                {(['portrait', 'sketch'] as const).map((option) => {
                  const isActive = avatarMode === option;
                  return (
                    <button
                      key={option}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      onClick={() => handleSelectMode(option)}
                      className={`relative rounded-lg px-2.5 py-0.5 text-[11px] font-bold transition-colors cursor-pointer ${
                        isActive
                          ? 'text-emerald-900 dark:text-emerald-200'
                          : 'text-[#4A5D53] dark:text-[#8AA095]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="hero-avatar-slider"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-[#1B2B22]"
                        />
                      )}
                      <span className="relative z-10 capitalize">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#D8E6DE] bg-[#F2F7F5] px-3.5 py-1.5 font-mono text-xs font-bold text-[#3E5147] shadow-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-[#9BB0A5]">
            <span>📍 {profile.location}</span>
          </span>
        </div>

        <div className="mt-5 max-w-3xl">
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-[#0E1813] sm:text-4xl dark:text-white">
            {profile.name}
          </h1>
          <p className="mt-1.5 font-display text-sm font-bold text-emerald-700 sm:text-lg dark:text-emerald-400">
            {profile.tagline}
          </p>
          <p className="mt-2 text-xs font-medium leading-relaxed text-[#384A41] sm:text-base dark:text-[#A4B8AE]">
            {profile.introduction}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3 border-t-2 border-[#E4ECE7] pt-4 sm:pt-5 dark:border-[#24382E]">
        <a
          href="#about"
          className="inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[#047857] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-colors hover:bg-[#065F46] cursor-pointer sm:text-sm"
        >
          Explore My World
        </a>
        <a
          href="#projects"
          className="inline-flex min-h-[42px] items-center justify-center rounded-xl border-2 border-[#D8E6DE] bg-white px-6 py-2.5 text-xs font-bold text-[#0E1813] transition-colors hover:border-emerald-700/50 cursor-pointer sm:text-sm dark:border-[#24382E] dark:bg-[#121B16] dark:text-white"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}
