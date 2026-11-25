import { motion } from 'motion/react';
import { Layers, Star } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/profile';

export function ExpertiseSection() {
  return (
    <motion.section
      id="expertise"
      aria-labelledby="expertise-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Layers className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
            G4S Secure Solutions Bangladesh (P) Ltd. · Core Capabilities
          </p>
          <h2
            id="expertise-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Expertise &amp; Skills
          </h2>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {SKILL_CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div className="flex items-center justify-between border-b border-[#E4ECE7] pb-3 dark:border-[#24382E]">
              <h3 className="font-display text-sm font-bold text-[#0E1813] dark:text-white">
                {cat.title}
              </h3>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-xs dark:bg-[#1B2B22]">
                <Star className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
              </div>
            </div>

            <ul className="mt-4 space-y-2.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 rounded-xl border border-[#D8E6DE] bg-white px-3.5 py-2 text-xs font-semibold text-[#384A41] shadow-2xs dark:border-[#24382E] dark:bg-[#18261F] dark:text-[#A4B8AE]"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
