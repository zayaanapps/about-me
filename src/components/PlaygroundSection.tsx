import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function PlaygroundSection() {
  return (
    <motion.section
      id="playground"
      aria-labelledby="playground-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl border border-emerald-700/20 bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#059669] p-6 text-white shadow-lg sm:p-10 dark:border-emerald-500/25 dark:from-[#032A20] dark:via-[#044E39] dark:to-[#033B2B]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full border border-white/10 bg-white/[0.04]"
      />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Digital Playground &amp; Experimentation</span>
        </div>

        <h2
          id="playground-heading"
          className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Curiosity Doesn&apos;t Stop at Ideas.
        </h2>

        <p className="mt-4 text-base leading-relaxed text-emerald-50/90 sm:text-lg">
          &ldquo;I enjoy exploring technology beyond its conventional use—experimenting with AI, testing new tools, building small applications, discovering possibilities, and learning through hands-on experience.&rdquo;
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-emerald-100/80">
          <span className="rounded-md bg-white/10 px-2.5 py-1">AI Prototyping</span>
          <span>·</span>
          <span className="rounded-md bg-white/10 px-2.5 py-1">Hands-On Testing</span>
          <span>·</span>
          <span className="rounded-md bg-white/10 px-2.5 py-1">Continuous Discovery</span>
        </div>
      </div>
    </motion.section>
  );
}
