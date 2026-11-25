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
      className="rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Compass className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Active Curiosity
          </p>
          <h2
            id="exploring-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Currently Exploring
          </h2>
        </div>
      </div>

      <p className="mt-5 text-sm font-medium text-[#4A5D53] dark:text-[#90A49A]">
        AI workflows, web frameworks, Android ideas, and digital tools I am actively experimenting
        with right now.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-[#E4ECE7] pt-6 sm:grid-cols-2 lg:grid-cols-3 dark:border-[#24382E]">
        {profile.currentlyExploring.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3.5 rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
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
