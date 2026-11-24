import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Code2, Plus, Trash2, X } from 'lucide-react';
import type { ProjectItem } from '../data/profile';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onAddProject: (project: ProjectItem) => void;
  onDeleteProject: (projectId: string) => void;
}

type ProjectFilter = 'All' | ProjectItem['category'];

const CATEGORIES: ProjectFilter[] = [
  'All',
  'Websites',
  'Android Applications',
  'AI Experiments',
  'Automation & Digital Tools',
  'Personal Projects',
  'Future Ideas',
];

export function ProjectsSection({
  projects,
  onAddProject,
  onDeleteProject,
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [modalOpen, setModalOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<ProjectItem['category']>('Websites');
  const [status, setStatus] = useState<ProjectItem['status']>('Completed');
  const [summary, setSummary] = useState('');
  const [stackInput, setStackInput] = useState('');
  const [url, setUrl] = useState('');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const handleCreateProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanSummary = summary.trim();
    if (!cleanTitle || !cleanSummary) return;

    const stack = stackInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      title: cleanTitle,
      category,
      status,
      summary: cleanSummary,
      stack: stack.length > 0 ? stack : ['React', 'TypeScript'],
      url: url.trim() || undefined,
    };

    onAddProject(newProj);
    setTitle('');
    setSummary('');
    setStackInput('');
    setUrl('');
    setModalOpen(false);
  };

  return (
    <motion.section
      id="projects"
      aria-labelledby="projects-heading"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-24 rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-lg transition-colors duration-300 sm:p-10 dark:border-[#24382E] dark:bg-[#0D1411]"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            Portfolio &amp; Creations
          </p>
          <h2
            id="projects-heading"
            className="mt-1 font-display text-2xl font-extrabold tracking-tight text-[#0E1813] sm:text-3xl dark:text-white"
          >
            My Projects &amp; Creations
          </h2>
          <p className="mt-1 text-sm font-medium text-[#4A5D53] dark:text-[#90A49A]">
            Websites, Android apps, AI experiments, and personal ideas.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#047857] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-200 hover:bg-[#065F46] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500"
        >
          <Plus className="h-4 w-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div
        role="tablist"
        aria-label="Project categories"
        className="mt-6 flex flex-wrap items-center gap-1.5 rounded-xl border-2 border-[#D8E6DE] bg-[#EEF4F1] p-1.5 shadow-xs transition-colors duration-300 dark:border-[#24382E] dark:bg-[#121B16]"
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat === activeFilter;
          return (
            <button
              key={cat}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveFilter(cat)}
              className={`relative min-h-[36px] rounded-lg px-3.5 py-1 text-xs font-bold transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 ${
                isActive
                  ? 'text-emerald-900 dark:text-emerald-200'
                  : 'text-[#3E5147] hover:text-[#0E1813] dark:text-[#8AA095] dark:hover:text-[#EFF4F1]'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter-slider"
                  transition={{ type: 'spring', stiffness: 480, damping: 36 }}
                  className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-[#1B2B22]"
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl border-2 border-[#D8E6DE] bg-[#F4F8F5] p-6 shadow-xs transition-all duration-200 hover:border-emerald-700/50 dark:border-[#24382E] dark:bg-[#121B16]"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-md bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300">
                  {project.category}
                </span>

                <div className="flex items-center gap-2.5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      project.status === 'Completed'
                        ? 'bg-emerald-200 text-emerald-950 dark:bg-emerald-900/60 dark:text-emerald-200'
                        : project.status === 'In Progress'
                          ? 'bg-amber-200 text-amber-950 dark:bg-amber-900/60 dark:text-amber-200'
                          : 'bg-sky-200 text-sky-950 dark:bg-sky-900/60 dark:text-sky-200'
                    }`}
                  >
                    {project.status}
                  </span>

                  {projects.length > 1 && (
                    <button
                      type="button"
                      onClick={() => onDeleteProject(project.id)}
                      aria-label="Delete project"
                      title="Delete project"
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#52665C] shadow-xs transition-colors hover:bg-rose-600 hover:text-white cursor-pointer dark:bg-[#1B2B22] dark:text-[#8AA095] dark:hover:bg-rose-600 dark:hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-[#0E1813] dark:text-white">
                {project.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-relaxed text-[#4A5D53] dark:text-[#90A49A]">
                {project.summary}
              </p>
            </div>

            <div className="mt-6 border-t-2 border-[#E4ECE7] pt-4 dark:border-[#24382E]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-bold text-[#52665C] dark:text-[#90A49A]">
                  {project.stack.map((tech, idx) => (
                    <span key={tech} className="inline-flex items-center gap-1.5">
                      {idx > 0 && <span>·</span>}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.button
              type="button"
              aria-label="Close modal"
              onClick={() => setModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/65 backdrop-blur-[3px] cursor-default"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border-2 border-[#D8E6DE] bg-white p-6 shadow-2xl sm:p-8 dark:border-[#24382E] dark:bg-[#0D1411]"
            >
              <div className="flex items-center justify-between border-b-2 border-[#E4ECE7] pb-4 dark:border-[#24382E]">
                <h3
                  id="modal-title"
                  className="font-display text-lg font-bold text-[#0E1813] dark:text-white"
                >
                  Add New Project
                </h3>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#DAE4DE] bg-[#F7FAF8] text-[#0E1813] transition-colors hover:border-emerald-700/50 cursor-pointer dark:border-[#223029] dark:bg-[#121B16] dark:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleCreateProject} className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="proj-title"
                    className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                  >
                    Project Title
                  </label>
                  <input
                    id="proj-title"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Retail POS Companion"
                    className="mt-1.5 min-h-[46px] w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="proj-cat"
                      className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                    >
                      Category
                    </label>
                    <select
                      id="proj-cat"
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value as ProjectItem['category'])
                      }
                      className="mt-1.5 min-h-[46px] w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:focus:border-emerald-400"
                    >
                      <option value="Websites">Websites</option>
                      <option value="Android Applications">Android Applications</option>
                      <option value="AI Experiments">AI Experiments</option>
                      <option value="Automation & Digital Tools">Automation &amp; Digital Tools</option>
                      <option value="Personal Projects">Personal Projects</option>
                      <option value="Future Ideas">Future Ideas</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="proj-status"
                      className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                    >
                      Status
                    </label>
                    <select
                      id="proj-status"
                      value={status}
                      onChange={(e) => setStatus(e.target.value as ProjectItem['status'])}
                      className="mt-1.5 min-h-[46px] w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:focus:border-emerald-400"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Experiment">Experiment</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="proj-summary"
                    className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                  >
                    Short Description
                  </label>
                  <textarea
                    id="proj-summary"
                    rows={3}
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Briefly describe what this project does..."
                    className="mt-1.5 w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="proj-stack"
                      className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                    >
                      Tech Stack (comma separated)
                    </label>
                    <input
                      id="proj-stack"
                      type="text"
                      value={stackInput}
                      onChange={(e) => setStackInput(e.target.value)}
                      placeholder="React, TypeScript, Kotlin"
                      className="mt-1.5 min-h-[46px] w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="proj-url"
                      className="block text-xs font-bold text-[#384A41] dark:text-[#A4B8AE]"
                    >
                      Project URL (optional)
                    </label>
                    <input
                      id="proj-url"
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://..."
                      className="mt-1.5 min-h-[46px] w-full rounded-xl border-2 border-[#D8E6DE] bg-white px-4 py-2.5 text-sm font-medium text-[#0E1813] placeholder:text-[#7E9288] focus:border-emerald-700 focus:outline-none dark:border-[#24382E] dark:bg-[#121B16] dark:text-white dark:placeholder:text-[#5C7166] dark:focus:border-emerald-400"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-bold text-[#52665C] transition-colors hover:text-[#0E1813] cursor-pointer dark:text-[#8AA095] dark:hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#047857] px-6 py-2.5 text-xs font-bold text-white shadow-md transition-colors hover:bg-[#065F46] cursor-pointer dark:bg-emerald-600 dark:hover:bg-emerald-500"
                  >
                    <Code2 className="h-4 w-4" />
                    <span>Save Project</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
