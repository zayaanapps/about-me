import { motion } from 'motion/react';
import { BookOpen, BrainCircuit, GraduationCap, MessageSquareText, PenTool } from 'lucide-react';
import { ACADEMIC_DEGREES, ACADEMIC_STRENGTHS } from '../data/profile';

export function EducationSection() {
  const strengthIcons = [
    <MessageSquareText key="comm" className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    <BrainCircuit key="crit" className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    <BookOpen key="interp" className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
    <PenTool key="struct" className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />,
  ];

  return (
    <motion.section
      id="education"
      aria-labelledby="education-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex items-center gap-3 border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Academic Background
          </p>
          <h2
            id="education-heading"
            className="font-display text-xl font-extrabold tracking-tight text-[#0E1813] sm:text-2xl dark:text-white"
          >
            Education &amp; Foundation
          </h2>
        </div>
      </div>

      <p className="mt-5 text-sm font-medium leading-relaxed text-[#384A41] sm:text-base dark:text-[#A4B8AE]">
        My academic journey in English at{' '}
        <span className="text-[0.9em] font-semibold text-[#0E1813] dark:text-white">
          Govt. Titumir College, Dhaka (Affiliated with Dhaka University)
        </span>{' '}
        did far more than teach literature and grammar—it trained how I listen, interpret ideas,
        think critically, and communicate clearly across both professional operations and digital
        creation.
      </p>

      {/* Degrees Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-[#E4ECE7] pt-6 md:grid-cols-2 dark:border-[#24382E]">
        {ACADEMIC_DEGREES.map((item, idx) => (
          <div
            key={item.degree}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex items-center justify-between gap-3 border-b border-[#E4ECE7] pb-3 dark:border-[#24382E]">
                <span className="font-mono text-[11px] font-bold text-emerald-700 tabular-nums dark:text-emerald-400">
                  0{idx + 1} · {item.field}
                </span>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                  <GraduationCap className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                </div>
              </div>

              <h3 className="mt-4 font-display text-lg font-extrabold text-[#0E1813] dark:text-white">
                {item.degree}
              </h3>

              <p className="mt-1 font-mono text-[11px] font-medium text-emerald-800 dark:text-emerald-300">
                {item.institution} · {item.location}
              </p>

              <p className="mt-3 border-t border-[#E4ECE7] pt-3 text-xs font-medium leading-relaxed text-[#4A5D53] sm:text-sm dark:border-[#24382E] dark:text-[#90A49A]">
                {item.focus}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* How Studying English Shaped My Mind */}
      <div className="mt-8 border-t-2 border-[#E4ECE7] pt-6 dark:border-[#24382E]">
        <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#384A41] dark:text-[#A4B8AE]">
          What English Studies Built in Me
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ACADEMIC_STRENGTHS.map((strength, idx) => (
            <div
              key={strength.title}
              className="flex items-start gap-3.5 rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-5 shadow-xs transition-all hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs dark:bg-[#1B2B22]">
                {strengthIcons[idx]}
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-[#0E1813] dark:text-white">
                  {strength.title}
                </h4>
                <p className="mt-1.5 text-xs font-medium leading-relaxed text-[#4A5D53] dark:text-[#90A49A]">
                  {strength.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
