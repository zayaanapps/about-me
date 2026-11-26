import { useState } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  FolderKanban,
  Globe,
  GraduationCap,
  Image,
  Mail,
  MapPin,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { IDENTITY_PILLARS, type PersonalProfile } from '../data/profile';
import { MinimalAvatar } from './MinimalAvatar';
import type { ProjectFilter } from './ProjectsSection';

interface HeroSectionProps {
  profile: PersonalProfile;
  onSelectTab: (tabId: string) => void;
  onSelectProjects: (filter?: ProjectFilter) => void;
  onOpenCustomize: () => void;
}

type AvatarMode = 'portrait' | 'sketch';

export function HeroSection({
  profile,
  onSelectTab,
  onSelectProjects,
  onOpenCustomize,
}: HeroSectionProps) {
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

  const pillarRoutes: Record<'scholar' | 'professional' | 'creator', string> = {
    scholar: 'education',
    professional: 'journey',
    creator: 'playground',
  };

  const pillarIcons: Record<'scholar' | 'professional' | 'creator', typeof BookOpen> = {
    scholar: BookOpen,
    professional: ShieldCheck,
    creator: Code2,
  };

  const pillarCards: Record<
    'scholar' | 'professional' | 'creator',
    { title: string; sub: string }
  > = {
    scholar: {
      title: 'Scholar',
      sub: 'Postgraduated from Govt. Titumir College, Dhaka, Affiliated with Dhaka University',
    },
    professional: {
      title: 'Security',
      sub: 'Operations Officer in Cumilla Branch in G4S Secure Solutions Bangladesh (P) Ltd.',
    },
    creator: {
      title: 'Vibe Code',
      sub: 'An Enthusiast in Artificial Intelligence, Websites & Productive Android Applications',
    },
  };

  return (
    <section
      id="hero"
      aria-label="Profile Card section"
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-none border-x-0 border-b-0 border-t-0 border-[#D8E6DE] bg-white px-4 pt-2 pb-1.5 shadow-none sm:rounded-3xl sm:border-2 sm:px-8 sm:pt-4 sm:pb-4 xl:px-10 xl:pt-5 xl:pb-5 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      {/* Canopy */}
      <div className="relative -mx-4 -mt-2 h-16 w-[calc(100%+2rem)] shrink-0 overflow-hidden bg-gradient-to-br from-[#044E38] via-[#047857] to-[#065F46] sm:-mx-8 sm:-mt-4 sm:h-20 sm:[width:calc(100%+4rem)] xl:-mx-10 xl:-mt-5 xl:h-28 xl:[width:calc(100%+5rem)] dark:from-[#02241C] dark:via-[#044E38] dark:to-[#033B2B]">
        <div className="relative flex items-center justify-between gap-2 px-4 pt-2 sm:px-8 sm:pt-3.5 xl:px-10 xl:pt-4">
          <span className="inline-flex max-w-[225px] items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 font-mono text-[9.5px] font-semibold text-emerald-100 backdrop-blur-xs sm:max-w-none sm:px-3 sm:text-[11px]">
            <ShieldCheck className="h-3 w-3 shrink-0" />
            <span className="truncate">G4S Secure Solutions Bangladesh (P) Ltd.</span>
          </span>

          <button
            type="button"
            onClick={onOpenCustomize}
            className="inline-flex min-h-[28px] items-center gap-1.5 rounded-full bg-black/30 px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-xs transition-colors hover:bg-black/50 whitespace-nowrap shrink-0 cursor-pointer sm:min-h-[30px] sm:px-3.5 sm:py-1 sm:text-xs"
          >
            <Sparkles className="h-3 w-3 text-emerald-300" />
            <span>Customize</span>
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col lg:grid lg:grid-cols-12 lg:items-stretch lg:gap-6 xl:gap-8">
        <div className="flex min-h-0 flex-col lg:col-span-7 lg:justify-between">
          <div>
            {/* Avatar & Location Single Row */}
            <div className="mt-1.5 flex items-end justify-between gap-2 sm:mt-2 sm:gap-4">
              <div className="relative -mt-8 flex items-end gap-2 sm:-mt-10 sm:gap-3 xl:-mt-13">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-3 border-white bg-[#E2EFE8] ring-2 ring-emerald-700/35 shadow-lg sm:h-20 sm:w-20 xl:h-26 xl:w-26 dark:border-[#0D1411] dark:bg-[#122019]">
                  <MinimalAvatar
                    name={profile.name}
                    mode={avatarMode}
                    avatarDataUrl={profile.avatarDataUrl}
                  />
                </div>

                <div className="flex flex-col gap-1 pb-0.5 sm:gap-1 sm:pb-1">
                  <button
                    type="button"
                    onClick={handleToggleAvatar}
                    aria-label="Toggle avatar mode"
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#047857] text-white shadow-sm transition-transform active:scale-95 cursor-pointer sm:h-8 sm:w-8 dark:border-[#0D1411]"
                  >
                    <motion.span
                      animate={{ rotate: flipCount * 180 }}
                      transition={{ duration: 0.25 }}
                    >
                      <RefreshCw className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
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
                          className={`relative rounded-lg px-2 py-0.5 text-[10px] font-bold transition-colors cursor-pointer sm:px-2.5 sm:text-[11px] ${
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

              <span className="inline-flex max-w-[145px] items-center gap-1 rounded-full border-2 border-[#D8E6DE] bg-[#F2F7F5] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#3E5147] shadow-xs sm:max-w-none sm:gap-1.5 sm:px-3 sm:py-1 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-[#9BB0A5]">
                <MapPin className="h-3 w-3 shrink-0 text-emerald-700 sm:h-3.5 sm:w-3.5 dark:text-emerald-400" />
                <span className="truncate">{profile.location}</span>
              </span>
            </div>

            {/* Name, Tagline, Bio */}
            <div className="mt-1.5 max-w-3xl border-t border-[#E4ECE7] pt-1.5 sm:mt-2.5 sm:border-t-2 sm:pt-2.5 xl:mt-3 xl:pt-3 dark:border-[#24382E]">
              <h1 className="font-name text-[22px] font-normal leading-tight tracking-normal text-[#0E1813] sm:text-[30px] xl:text-[38px] dark:text-white">
                {profile.name}
              </h1>
              <p className="mt-0.5 font-display text-[12px] font-semibold italic leading-snug tracking-normal text-emerald-800 sm:mt-1 sm:text-base xl:text-lg dark:text-emerald-300">
                {profile.tagline}
              </p>
              <p className="mt-1 text-[11px] font-normal leading-[1.35] text-[#2F4037] sm:mt-1.5 sm:text-xs sm:leading-snug xl:text-[14.5px] xl:leading-relaxed dark:text-[#B4C7BD]">
                {profile.introduction}
              </p>
            </div>
          </div>

          {/* Three Connected Identities: 3-column compact strip on mobile & desktop */}
          <div className="mt-1.5 border-t border-[#E4ECE7] pt-1.5 sm:mt-2.5 sm:border-t-2 sm:pt-2.5 xl:mt-3 xl:pt-3 dark:border-[#24382E]">
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 xl:gap-3">
              {IDENTITY_PILLARS.map((pillar) => {
                const Icon = pillarIcons[pillar.id];
                const card = pillarCards[pillar.id];
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => onSelectTab(pillarRoutes[pillar.id])}
                    className="group flex flex-col justify-between gap-1 rounded-xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-1.5 text-left transition-all hover:border-emerald-700/50 cursor-pointer sm:gap-1.5 sm:rounded-2xl sm:p-2.5 xl:p-3 dark:border-[#24382E] dark:bg-[#121B16]"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-700 shadow-xs transition-colors group-hover:bg-emerald-700 group-hover:text-white sm:h-7 sm:w-7 sm:rounded-xl dark:bg-[#1B2B22] dark:text-emerald-400">
                        <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </div>
                      <p className="truncate font-display text-[10.5px] font-bold text-[#0E1813] sm:text-xs xl:text-sm dark:text-white">
                        {card.title}
                      </p>
                    </div>

                    <p className="w-full border-t border-[#E4ECE7] pt-1 text-[8px] font-medium leading-[1.2] text-[#4A5D53] sm:pt-1 sm:text-[10px] sm:leading-snug xl:text-[11px] dark:border-[#24382E] dark:text-[#90A49A]">
                      {card.sub}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Unified Border Box: 8 Homepage Menus filling space between tags and footer */}
        <div className="mt-1.5 flex min-h-0 flex-1 flex-col border-t border-[#E4ECE7] pt-1.5 sm:mt-2.5 sm:border-t-2 sm:pt-2.5 lg:col-span-5 lg:mt-2.5 lg:border-t-0 lg:pt-0 dark:border-[#24382E]">
          <div className="flex min-h-0 flex-1 flex-col rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5]/75 p-1.5 shadow-xs sm:p-2.5 xl:p-3.5 dark:border-[#24382E] dark:bg-[#101814]/90">
            <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-4 gap-1 sm:gap-2 lg:grid-cols-1 lg:grid-rows-8 xl:grid-cols-2 xl:grid-rows-4">
              <button
                type="button"
                onClick={() => onSelectProjects('All')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <FolderKanban className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Projects</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectProjects('Android Applications')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Smartphone className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Android Apps</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectProjects('Websites')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Globe className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Websites</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('education')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <GraduationCap className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Education</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('philosophy')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Compass className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Philosophy</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('journey')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Briefcase className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Work</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('contact')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Contact</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('gallery')}
                className="flex h-full min-h-[28px] w-full items-center justify-center rounded-xl border border-[#D8E6DE] bg-white px-2.5 py-1 text-[11px] font-extrabold whitespace-nowrap text-[#0E1813] shadow-2xs transition-colors hover:border-emerald-700/50 hover:bg-emerald-50 cursor-pointer sm:min-h-[34px] sm:border-2 sm:px-3 sm:py-1.5 sm:text-xs dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:hover:border-emerald-500/40 dark:hover:bg-[#18261F]"
              >
                <span className="inline-flex w-[104px] items-center justify-start gap-1.5 sm:w-[116px] sm:gap-2">
                  <Image className="h-3.5 w-3.5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                  <span>Gallery</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
