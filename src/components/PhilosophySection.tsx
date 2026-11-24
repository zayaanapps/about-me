import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
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
      <div className="flex flex-col gap-2">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
          Guiding Principles
        </p>
        <h2
          id="philosophy-heading"
          className="font-display text-2xl font-extrabold tracking-tight text-[#0E1813] sm:text-3xl dark:text-white"
        >
          My Philosophy
        </h2>
      </div>

      {/* Main Feature Quote Card */}
      <div className="mt-8 rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#EFF8F3] to-[#DCEEE5] p-6 shadow-sm sm:p-8 dark:border-emerald-400/30 dark:from-[#11221A] dark:to-[#0D1914]">
        <Quote className="h-9 w-9 text-emerald-700 opacity-80 dark:text-emerald-400" />
        <p className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-[#0E1813] sm:text-2xl dark:text-white">
          &ldquo;{mainQuote.quote}&rdquo;
        </p>
        <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-300">
          — {mainQuote.author}
        </p>
      </div>

      {/* Supporting Quotes Grid */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {otherQuotes.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-6 shadow-xs transition-colors duration-300 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <p className="font-display text-sm font-bold leading-relaxed text-[#24382E] dark:text-[#C5D8CE]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <span className="mt-5 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
              {item.author}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
