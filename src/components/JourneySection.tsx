import { motion } from 'motion/react';
import { Briefcase, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PROFESSIONAL_RESPONSIBILITIES } from '../data/profile';

export function JourneySection() {
  return (
    <motion.section
      id="journey"
      aria-labelledby="journey-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <Briefcase className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Professional Identity
          </p>
          <h2
            id="journey-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Security Professional
          </h2>
          <p className="mt-0.5 font-mono text-[11px] font-medium text-[#4A5D53] dark:text-[#90A49A]">
            Operations Officer, Cumilla Branch · G4S Secure Solutions Bangladesh (P) Ltd.
          </p>
        </div>
      </div>

      {/* Role Summary Banner */}
      <div className="mt-6 flex items-start gap-3.5 rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 dark:border-[#24382E] dark:bg-[#121B16]">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
          <ShieldCheck className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
        </div>
        <p className="text-sm font-medium leading-relaxed text-[#384A41] dark:text-[#A4B8AE]">
          Working in professional security services at{' '}
          <span className="text-[0.9em] font-semibold text-[#0E1813] dark:text-white">
            G4S Secure Solutions Bangladesh (P) Ltd.
          </span>{' '}
          centres on operational reliability, clear supervision, client trust, structured reporting,
          and steady problem-solving across day-to-day responsibilities.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-[#E4ECE7] pt-6 sm:grid-cols-2 lg:grid-cols-3 dark:border-[#24382E]">
        {PROFESSIONAL_RESPONSIBILITIES.map((item, index) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#E4ECE7] pb-3 dark:border-[#24382E]">
                <span className="font-mono text-xs font-bold text-emerald-700 tabular-nums dark:text-emerald-400">
                  0{index + 1}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-xs dark:bg-[#1B2B22]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                </div>
              </div>
              <h3 className="mt-3.5 font-display text-sm font-bold text-[#0E1813] dark:text-white">
                {item.title}
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
