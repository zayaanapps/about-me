import { motion } from 'motion/react';
import { Compass, Quote } from 'lucide-react';
import { PHILOSOPHY_QUOTES } from '../data/profile';

export function PhilosophySection() {
  const mainQuote = PHILOSOPHY_QUOTES[0];
  const otherQuotes = PHILOSOPHY_QUOTES.slice(1);

  return (
    <motion.section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Compass className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Mindset &amp; Outlook
          </p>
          <h2
            id="philosophy-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            My Philosophy &amp; Mindset
          </h2>
        </div>
      </div>

      {/* Main Feature Principle */}
      <div className="mt-6 rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#EFF8F3] to-[#DCEEE5] p-6 shadow-sm sm:p-8 dark:border-emerald-400/30 dark:from-[#11221A] dark:to-[#0D1914]">
        <div className="flex items-center justify-between gap-3">
          <Quote className="h-8 w-8 text-emerald-700 opacity-85 dark:text-emerald-400" />
          <span className="font-mono text-xs font-bold text-emerald-800 dark:text-emerald-300">
            01 · {mainQuote.theme}
          </span>
        </div>
        <p className="mt-4 font-display text-xl font-semibold italic leading-snug tracking-tight text-[#0E1813] sm:text-2xl dark:text-white">
          &ldquo;{mainQuote.quote}&rdquo;
        </p>
        <p className="mt-3 border-t border-emerald-700/20 pt-3 text-sm font-medium leading-relaxed text-[#384A41] dark:border-emerald-400/20 dark:text-[#A4B8AE]">
          {mainQuote.reflection}
        </p>
      </div>

      {/* Supporting Principles Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-[#E4ECE7] pt-6 sm:grid-cols-2 lg:grid-cols-3 dark:border-[#24382E]">
        {otherQuotes.map((item, idx) => (
          <div
            key={item.theme}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="border-b border-[#E4ECE7] pb-2.5 dark:border-[#24382E]">
                <span className="font-mono text-[11px] font-bold text-emerald-700 tabular-nums dark:text-emerald-400">
                  0{idx + 2} · {item.theme}
                </span>
              </div>
              <h3 className="mt-3 font-display text-[15px] font-semibold italic leading-snug text-[#0E1813] sm:text-base dark:text-white">
                &ldquo;{item.quote}&rdquo;
              </h3>
              <p className="mt-2.5 border-t border-[#E4ECE7] pt-2.5 text-xs font-medium leading-relaxed text-[#4A5D53] dark:border-[#24382E] dark:text-[#90A49A]">
                {item.reflection}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
