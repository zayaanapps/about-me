import { motion } from 'motion/react';
import { Compass } from 'lucide-react';
import type { PersonalProfile } from '../data/profile';

interface ExploringSectionProps {
  profile: PersonalProfile;
}

export function ExploringSection({ profile }: ExploringSectionProps) {
  return (
    <motion.section
      id="exploring"
      aria-labelledby="exploring-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-3xl border border-[#E2EBE6] bg-white p-6 transition-colors duration-300 sm:p-10 dark:border-[#1D2923] dark:bg-[#101613]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
          Live Status
        </p>
        <h2
          id="exploring-heading"
          className="font-display text-2xl font-semibold tracking-tight text-[#0E1813] sm:text-3xl dark:text-[#EFF4F1]"
        >
          Currently Exploring
        </h2>
        <p className="mt-1 text-sm text-[#52665C] dark:text-[#899E93]">
          Topics, technologies, and ideas I am actively experimenting with right now.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.currentlyExploring.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3.5 rounded-2xl border border-[#E4ECE7] bg-[#F7FAF8] p-5 transition-colors duration-300 dark:border-[#1D2923] dark:bg-[#0B100D]"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/70">
              <Compass className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
            </div>
            <p className="text-sm font-medium leading-relaxed text-[#24382E] dark:text-[#C5D8CE]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
