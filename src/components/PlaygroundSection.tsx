import { motion } from 'motion/react';
import {
  Bot,
  Code2,
  Cpu,
  FolderKanban,
  Globe,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { VIBE_CODING_AREAS } from '../data/profile';

export function PlaygroundSection() {
  const icons = [
    <Globe key="web" className="h-4 w-4 text-emerald-200" />,
    <Smartphone key="android" className="h-4 w-4 text-emerald-200" />,
    <Code2 key="webapp" className="h-4 w-4 text-emerald-200" />,
    <Bot key="ai" className="h-4 w-4 text-emerald-200" />,
    <FolderKanban key="systems" className="h-4 w-4 text-emerald-200" />,
    <Wrench key="prod" className="h-4 w-4 text-emerald-200" />,
    <Cpu key="exp" className="h-4 w-4 text-emerald-200" />,
  ];

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

      <div className="relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Vibe Coding &amp; AI Creation</span>
          </div>

          <h2
            id="playground-heading"
            className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            An Idea Is <span className="italic text-emerald-200">Only the Beginning.</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-emerald-50/95 sm:text-base">
            I do not follow the conventional path of a traditional software engineer. Instead, I
            treat artificial intelligence as a creative and technological partner—turning clear
            questions, logical thinking, experimentation, and persistence into practical websites,
            applications, and digital tools.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-emerald-100/85 sm:text-[15px]">
            Studying English taught me how to articulate intent clearly; working in operations taught
            me how real-world systems behave. Vibe Coding sits right where those strengths meet
            modern AI.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3.5 border-t border-white/20 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIBE_CODING_AREAS.map((area, idx) => (
            <div
              key={area.title}
              className="flex items-start gap-3 rounded-2xl border border-white/15 bg-black/20 p-4 backdrop-blur-xs transition-colors hover:border-white/30"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                {icons[idx]}
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-white">{area.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-emerald-50/80">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-200">
            Google Ecosystem Fluency
          </span>
          <p className="text-xs font-medium text-emerald-50/90 sm:text-right">
            Android · Firebase (Firestore &amp; Auth) · Gemini AI · Google Workspace · Cloud Web
          </p>
        </div>
      </div>
    </motion.section>
  );
}
