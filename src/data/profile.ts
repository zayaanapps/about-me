export interface ProfessionalRole {
  title: string;
  category: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface TechInterest {
  name: string;
  category: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Websites' | 'Android Applications' | 'AI Experiments' | 'Automation & Digital Tools' | 'Personal Projects' | 'Future Ideas';
  status: 'Completed' | 'In Progress' | 'Experiment';
  summary: string;
  stack: string[];
  url?: string;
  sourceUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: string;
  url: string;
}

export interface PersonalProfile {
  name: string;
  tagline: string;
  introduction: string;
  location: string;
  email: string;
  avatarDataUrl: string | null;
  socials: {
    facebook: string;
    messenger: string;
    whatsapp: string;
    github: string;
    linkedin: string;
    website: string;
  };
  currentlyExploring: string[];
  projects: ProjectItem[];
  gallery: GalleryPhoto[];
}

export const STORAGE_KEY = 'kuafi-complete-personal-portfolio-v1';

export const DEFAULT_PORTRAIT_SRC = '/assets/portrait.jpg';
export const DEFAULT_SKETCH_SRC = '/assets/portrait-sketch.jpg';

export const DEFAULT_PROFILE: PersonalProfile = {
  name: 'Abdullahil Kuafi',
  tagline: 'Professional by Experience. Curious by Nature. A Builder by Passion.',
  introduction:
    "I'm a professional in operations and management with a passion for technology, digital innovation, and building practical solutions. I enjoy exploring new ideas, learning continuously, and turning concepts into something useful.",
  location: 'Bangladesh',
  email: 'themadkafi@gmail.com',
  avatarDataUrl: null,
  socials: {
    facebook: 'https://facebook.com',
    messenger: 'https://m.me',
    whatsapp: 'https://wa.me/8801313209156',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    website: '',
  },
  currentlyExploring: [
    'AI and AI-assisted development tools',
    'New web development frameworks and patterns',
    'Android application development and UI ergonomics',
    'Automation and daily workflow productivity',
    'Firebase cloud architecture and real-time sync',
    'Ideas for future digital tools and mobile apps',
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Siaam Store Cloud Accounting',
      category: 'Websites',
      status: 'Completed',
      summary:
        'Effortless cloud accounting & POS web app built for modern retail businesses with real-time Firestore sync.',
      stack: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      url: 'https://siaamstore.pages.dev',
      sourceUrl: 'https://github.com',
    },
    {
      id: 'proj-2',
      title: 'Retail POS Android App',
      category: 'Android Applications',
      status: 'Completed',
      summary:
        'Native Android point-of-sale companion crafted with Kotlin and Jetpack Compose for fast counter billing and stock tracking.',
      stack: ['Kotlin', 'Jetpack Compose', 'Firebase Firestore'],
      url: '#contact',
    },
    {
      id: 'proj-3',
      title: 'AI Workflow Assistant',
      category: 'AI Experiments',
      status: 'Experiment',
      summary:
        'An experimental helper prototype exploring intelligent note summarization and structured data extraction.',
      stack: ['TypeScript', 'Gemini API', 'React'],
      url: '#contact',
    },
    {
      id: 'proj-4',
      title: 'Personal Task Companion',
      category: 'Personal Projects',
      status: 'In Progress',
      summary:
        'A distraction-free daily planner with smooth motion and offline-first data persistence.',
      stack: ['React', 'TypeScript', 'PWA'],
      url: '#contact',
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      title: 'Workspace & Setup',
      caption: 'Where operations planning meets digital creation.',
      category: 'Technology',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'gal-2',
      title: 'Mobile & App Prototyping',
      caption: 'Testing tactile ergonomics for Android layouts.',
      category: 'Projects',
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 'gal-3',
      title: 'Quiet Moments of Focus',
      caption: 'Reflecting on new ideas and future digital solutions.',
      category: 'Everyday Life',
      url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    },
  ],
};

export const PROFESSIONAL_RESPONSIBILITIES = [
  {
    title: 'Operations Management & Coordination',
    description: 'Directing daily service operations, resource scheduling, and site coordination with precision.',
  },
  {
    title: 'Security Services Management',
    description: 'Maintaining rigorous security protocols, risk oversight, and compliance across operational sites.',
  },
  {
    title: 'Client Relationship Management',
    description: 'Building trusted partnerships, handling client inquiries, and aligning service delivery with expectations.',
  },
  {
    title: 'Workforce & Manpower Management',
    description: 'Coordinating team schedules, deployment rosters, and staff support for smooth service execution.',
  },
  {
    title: 'Site & Service Monitoring',
    description: 'Conducting thorough service checks, quality audits, and proactive site inspections.',
  },
  {
    title: 'Reporting & Documentation',
    description: 'Preparing detailed operational logs, incident records, and status documentation.',
  },
  {
    title: 'Administrative Management',
    description: 'Overseeing routine administrative workflows, correspondence, and record organization.',
  },
  {
    title: 'Operational Planning',
    description: 'Formulating practical contingency plans, schedules, and step-by-step execution guides.',
  },
  {
    title: 'Resource & Inventory Coordination',
    description: 'Tracking equipment allocation, inventory readiness, and supply distribution.',
  },
  {
    title: 'Problem-Solving & Decision-Making',
    description: 'Evaluating on-ground challenges calmly and implementing effective corrective actions.',
  },
  {
    title: 'Team Coordination & Communication',
    description: 'Fostering clear dialogue, mutual responsibility, and dependable collaboration across teams.',
  },
  {
    title: 'Maintaining Service Standards',
    description: 'Upholding strict professionalism, accountability, and consistent quality benchmarks.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Operations & Management',
    skills: [
      'Operational Coordination',
      'Workforce Management',
      'Service Delivery',
      'Operational Planning',
      'Team Coordination',
    ],
  },
  {
    title: 'Client & Communication',
    skills: [
      'Client Relationship Management',
      'Professional Communication',
      'Issue Resolution',
      'Coordination & Follow-up',
    ],
  },
  {
    title: 'Administration',
    skills: [
      'Reporting & Documentation',
      'Administrative Management',
      'Resource Coordination',
      'Record Management',
    ],
  },
  {
    title: 'Problem-Solving',
    skills: [
      'Practical Decision-Making',
      'Process Improvement',
      'Critical Thinking',
      'Managing Multiple Responsibilities',
    ],
  },
];

export const TECH_INTERESTS: TechInterest[] = [
  {
    name: 'Artificial Intelligence',
    category: 'Innovation',
    description: 'Exploring machine intelligence models, intelligent assistants, and prompt engineering.',
  },
  {
    name: 'AI-Powered Development',
    category: 'Engineering',
    description: 'Leveraging AI tools to accelerate prototyping, test ideas, and write clean code.',
  },
  {
    name: 'Website Development',
    category: 'Web',
    description: 'Building modern responsive web interfaces with React, TypeScript, and Tailwind CSS.',
  },
  {
    name: 'Android Applications',
    category: 'Mobile',
    description: 'Crafting intuitive mobile experiences using Kotlin and Jetpack Compose.',
  },
  {
    name: 'Automation',
    category: 'Productivity',
    description: 'Eliminating repetitive daily chores through smart scripts and workflow triggers.',
  },
  {
    name: 'Digital Tools & Productivity',
    category: 'Utility',
    description: 'Testing software that enhances focus, organization, and personal efficiency.',
  },
  {
    name: 'Firebase & Cloud Technologies',
    category: 'Cloud',
    description: 'Implementing real-time Firestore sync, secure authentication, and cloud storage.',
  },
  {
    name: 'GitHub & Version Control',
    category: 'DevOps',
    description: 'Managing source code history, branches, and collaborative version tracking.',
  },
  {
    name: 'Modern Web Technologies',
    category: 'Ecosystem',
    description: 'Staying current with fast edge hosting, client-side routing, and responsive design standards.',
  },
  {
    name: 'Exploring New Platforms',
    category: 'Curiosity',
    description: 'Testing experimental software platforms, developer previews, and emerging tech stacks.',
  },
];

export const PHILOSOPHY_QUOTES = [
  {
    quote: 'Learn continuously. Think practically. Build meaningfully.',
    author: 'Abdullahil Kuafi',
    highlight: true,
  },
  {
    quote: 'Always keep learning. Stay curious. Keep things simple.',
    author: 'Core Mindset',
    highlight: false,
  },
  {
    quote: 'Solve real problems. Be responsible for what you do.',
    author: 'Professional Ethics',
    highlight: false,
  },
  {
    quote: 'Focus on usefulness, not just appearance. Turn ideas into action.',
    author: 'Execution Principle',
    highlight: false,
  },
];

export function loadSavedProfile(): PersonalProfile {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw) as Partial<PersonalProfile>;
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      socials: {
        ...DEFAULT_PROFILE.socials,
        ...(parsed.socials ?? {}),
        whatsapp:
          !parsed.socials?.whatsapp || parsed.socials.whatsapp === 'https://wa.me'
            ? DEFAULT_PROFILE.socials.whatsapp
            : parsed.socials.whatsapp,
      },
      currentlyExploring:
        Array.isArray(parsed.currentlyExploring) && parsed.currentlyExploring.length > 0
          ? parsed.currentlyExploring
          : DEFAULT_PROFILE.currentlyExploring,
      projects:
        Array.isArray(parsed.projects) && parsed.projects.length > 0
          ? parsed.projects
          : DEFAULT_PROFILE.projects,
      gallery:
        Array.isArray(parsed.gallery) && parsed.gallery.length > 0
          ? parsed.gallery
          : DEFAULT_PROFILE.gallery,
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: PersonalProfile): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Ignore storage quota errors
  }
}

export function clearSavedProfile(): void {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}
