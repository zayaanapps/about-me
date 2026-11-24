import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Cpu, Sparkles, Smartphone, Wrench } from 'lucide-react';
import { TECH_INTERESTS } from '../data/profile';

type TechFilter = 'All' | 'Innovation' | 'Web' | 'Mobile' | 'Productivity' | 'Cloud';

const FILTERS: TechFilter[] = ['All', 'Innovation', 'Web', 'Mobile', 'Productivity', 'Cloud'];

export function TechnologySection() {
  const [activeFilter, setActiveFilter] = useState<TechFilter>('All');

  const filteredTech =
    activeFilter === 'All'
      ? TECH_INTERESTS
      : TECH_INTERESTS.filter((t) => t.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <motion.section
      id="technology"
      aria-labelledby="tech-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Digital Interests
          </p>
          <h2
            id="tech-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Technology &amp; Interests
          </h2>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs font-medium text-[#4A5D53] dark:text-[#90A49A]">
          Personal experimentation, AI exploration, web and mobile development interests.
        </p>

        <div
          role="tablist"
          className="inline-flex flex-wrap items-center gap-1 rounded-xl border-2 border-[#D8E6DE] bg-[#EEF4F1] p-1.5 dark:border-[#24382E] dark:bg-[#121B16]"
        >
          {FILTERS.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`relative rounded-lg px-3 py-1 text-[11px] font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-emerald-900 dark:text-emerald-200'
                    : 'text-[#3E5147] dark:text-[#8AA095]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-filter-slider"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-[#1B2B22]"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTech.map((item) => (
          <div
            key={item.name}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-md bg-emerald-100 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300">
                  {item.category}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                  {item.category === 'Web' ? (
                    <Code className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  ) : item.category === 'Mobile' ? (
                    <Smartphone className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  ) : item.category === 'Innovation' ? (
                    <Cpu className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  ) : (
                    <Wrench className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                  )}
                </div>
              </div>

              <h3 className="mt-4 font-display text-sm font-bold text-[#0E1813] dark:text-white">
                {item.name}
              </h3>
              <p className="mt-2 text-xs font-medium leading-relaxed text-[#4A5D53] dark:text-[#90A49A]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
