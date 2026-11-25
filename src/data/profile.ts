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

export interface IdentityPillar {
  id: 'scholar' | 'professional' | 'creator';
  title: string;
  subtitle: string;
  summary: string;
}

export interface AcademicDegree {
  degree: string;
  field: string;
  institution: string;
  location: string;
  focus: string;
}

export interface PhilosophyItem {
  quote: string;
  theme: string;
  reflection: string;
  highlight: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category:
    | 'Websites'
    | 'Android Applications'
    | 'AI Experiments'
    | 'Automation & Digital Tools'
    | 'Personal Projects'
    | 'Future Ideas';
  status: 'Completed' | 'In Progress' | 'Experiment';
  summary: string;
  stack: string[];
  logoUrl?: string;
  url?: string;
  appUrl?: string;
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

const LEGACY_TAGLINE =
  'Professional by Experience. Curious by Nature. A Builder by Passion.';
const LEGACY_TAGLINE_V2 =
  'English Postgraduate. Security Professional. AI Vibe Coder.';
const LEGACY_INTRODUCTION =
  "I'm a professional in operations and management with a passion for technology, digital innovation, and building practical solutions. I enjoy exploring new ideas, learning continuously, and turning concepts into something useful.";
const LEGACY_INTRODUCTION_V2 =
  'An English graduate and postgraduate from Government Titumir College, Dhaka, working as a Security Professional at G4S Secure Solutions Bangladesh—and a curious Vibe Coder collaborating with AI to turn everyday ideas into websites, Android apps, and practical digital tools.';
const LEGACY_INTRODUCTION_V3 =
  'An English graduate and postgraduate from Govt. Titumir College, Dhaka, working as a Security Professional at G4S Secure Solutions Bangladesh (P) Ltd.—and a curious Vibe Coder collaborating with AI to build websites, Android apps, and practical digital tools.';

export const DEFAULT_PROFILE: PersonalProfile = {
  name: 'Abdullahil Kuafi',
  tagline: 'English Postgraduate. Security Professional. Artificial Intelligence Vibe Coder.',
  introduction:
    'An English graduate and postgraduate from Govt. Titumir College, Dhaka, working as a Security Professional at G4S Secure Solutions Bangladesh (P) Ltd.—and a curious Vibe Coder collaborating with Artificial Intelligence to build websites, Android apps, and practical digital tools.',
  location: 'Dhaka, Bangladesh',
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
    'AI-assisted software creation & Vibe Coding workflows',
    'Google Ecosystem tools across Android, Firebase & Gemini',
    'Modern web applications & responsive interfaces',
    'Android application development and mobile UI ergonomics',
    'AI-powered productivity & digital management tools',
    'Turning everyday operational ideas into usable prototypes',
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

export const IDENTITY_PILLARS: IdentityPillar[] = [
  {
    id: 'scholar',
    title: 'The Scholar',
    subtitle: 'B.A. & M.A. in English · Govt. Titumir College, Dhaka (Affiliated with Dhaka University)',
    summary:
      'Grounded in language, interpretation, critical thinking, and clear human communication.',
  },
  {
    id: 'professional',
    title: 'The Security Professional',
    subtitle: 'Operations Officer, Cumilla Branch · G4S Secure Solutions Bangladesh (P) Ltd.',
    summary:
      'Shaped by operational coordination, client trust, team supervision, and calm problem-solving.',
  },
  {
    id: 'creator',
    title: 'The Digital Creator',
    subtitle: 'Vibe Coder · AI & App Explorer',
    summary:
      'Collaborating with AI through logic, creativity, and persistence to build websites, apps, and tools.',
  },
];

export const ACADEMIC_DEGREES: AcademicDegree[] = [
  {
    degree: 'Master of Arts (M.A.) in English',
    field: 'Postgraduate Studies in English',
    institution: 'Govt. Titumir College, Dhaka',
    location: 'Affiliated with Dhaka University',
    focus:
      'Deepened analytical reading, critical interpretation, structured argumentation, and thoughtful written expression.',
  },
  {
    degree: 'Bachelor of Arts (B.A.) in English',
    field: 'Undergraduate Studies in English',
    institution: 'Govt. Titumir College, Dhaka',
    location: 'Affiliated with Dhaka University',
    focus:
      'Built a strong foundation in language precision, comprehension of complex ideas, and clear communication.',
  },
];

export const ACADEMIC_STRENGTHS = [
  {
    title: 'Clear Communication',
    description:
      'Expressing ideas, operational updates, and project goals with precision and empathy across teams and clients.',
  },
  {
    title: 'Analytical & Critical Thinking',
    description:
      'Reading between the lines, questioning assumptions, and breaking down multifaceted situations logically.',
  },
  {
    title: 'Interpretation of Ideas',
    description:
      'Understanding nuance in human language—an unexpected superpower when designing interfaces and prompting AI.',
  },
  {
    title: 'Structured Expression',
    description:
      'Turning scattered thoughts into clear documentation, coherent reports, and well-defined digital workflows.',
  },
];

export const PROFESSIONAL_RESPONSIBILITIES = [
  {
    title: 'Security Management & Operations',
    description:
      'Overseeing daily security operations, service readiness, and site standards with disciplined accountability.',
  },
  {
    title: 'Operational Coordination',
    description:
      'Aligning shift schedules, operational handovers, and day-to-day workflows so teams operate seamlessly.',
  },
  {
    title: 'Client Management',
    description:
      'Maintaining dependable client communication, listening carefully to needs, and ensuring service expectations are met.',
  },
  {
    title: 'Supervision & Team Management',
    description:
      'Guiding field teams with clarity, fairness, and steady follow-through across daily operational duties.',
  },
  {
    title: 'Team Communication',
    description:
      'Building clear dialogue and mutual accountability between management, supervisors, and on-ground personnel.',
  },
  {
    title: 'Documentation & Reporting',
    description:
      'Preparing accurate operational reports, routine logs, and structured administrative documentation.',
  },
  {
    title: 'Practical Problem-Solving',
    description:
      'Evaluating real-world operational challenges calmly and implementing workable, timely solutions.',
  },
  {
    title: 'Discipline & Adaptability',
    description:
      'Balancing structured professional standards with the flexibility to respond effectively to changing situations.',
  },
  {
    title: 'Service Quality & Compliance',
    description:
      'Upholding professional ethics, site protocols, and consistent service benchmarks every day.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Security & Operations',
    skills: [
      'Security Management & Operations',
      'Operational Coordination',
      'Supervision & Team Management',
      'Service Quality & Readiness',
    ],
  },
  {
    title: 'Client & Communication',
    skills: [
      'Client Management & Follow-up',
      'Team Communication',
      'Clear Written & Verbal Expression',
      'Constructive Issue Resolution',
    ],
  },
  {
    title: 'Reporting & Administration',
    skills: [
      'Documentation & Reporting',
      'Operational Planning',
      'Structured Record Management',
      'Process Organization',
    ],
  },
  {
    title: 'Problem-Solving & Mindset',
    skills: [
      'Practical Problem-Solving',
      'Discipline & Adaptability',
      'Critical & Analytical Thinking',
      'Calm Decision-Making',
    ],
  },
];

export const VIBE_CODING_AREAS = [
  {
    title: 'Websites',
    description: 'Clean, responsive personal and business websites designed for speed and clarity.',
  },
  {
    title: 'Android Applications',
    description: 'Practical mobile tools tailored for everyday ergonomics on Android devices.',
  },
  {
    title: 'Web Applications',
    description: 'Interactive browser apps with real-time state, cloud sync, and offline support.',
  },
  {
    title: 'AI-Powered Tools',
    description: 'Smart assistants and workflows built by pairing human intent with modern AI models.',
  },
  {
    title: 'Digital Management Systems',
    description: 'Structured record-keeping, billing, and operational dashboards for real needs.',
  },
  {
    title: 'Productivity Tools',
    description: 'Distraction-free helpers that simplify repetitive daily work and personal planning.',
  },
  {
    title: 'Creative Tech Experiments',
    description: 'Hands-on prototypes exploring what becomes possible when curiosity meets persistence.',
  },
];

export const TECH_INTERESTS: TechInterest[] = [
  {
    name: 'Vibe Coding & AI Collaboration',
    category: 'Innovation',
    description:
      'Using AI as a creative and technical partner to iterate from raw concepts into working software.',
  },
  {
    name: 'Artificial Intelligence Tools',
    category: 'Innovation',
    description:
      'Exploring intelligent assistants, prompt architecture, and practical AI-assisted problem-solving.',
  },
  {
    name: 'Website & Web App Development',
    category: 'Web',
    description:
      'Building modern, responsive interfaces and interactive web applications with React, TypeScript, and Tailwind CSS.',
  },
  {
    name: 'Android Applications',
    category: 'Mobile',
    description:
      'Crafting tactile mobile experiences and everyday utility companions with Kotlin and Jetpack Compose.',
  },
  {
    name: 'Digital Management Systems',
    category: 'Productivity',
    description:
      'Designing practical accounting, inventory, and workflow systems that simplify daily business tasks.',
  },
  {
    name: 'Automation & Productivity Tools',
    category: 'Productivity',
    description:
      'Reducing friction in routine work through structured digital tools and smart automation.',
  },
  {
    name: 'Google Ecosystem & Platforms',
    category: 'Cloud',
    description:
      'Practical familiarity across Android, Firebase (Firestore & Auth), Gemini AI, and Google Workspace productivity workflows.',
  },
  {
    name: 'Firebase & Cloud Architecture',
    category: 'Cloud',
    description:
      'Implementing real-time Firestore sync, authentication, and reliable cloud data workflows.',
  },
  {
    name: 'GitHub & Edge Deployment',
    category: 'Web',
    description:
      'Managing clean version history with GitHub and shipping fast static web apps globally.',
  },
  {
    name: 'Creative Technology Experiments',
    category: 'Innovation',
    description:
      'Testing emerging platforms, developer previews, and new ways to bring ideas to life.',
  },
];

export const PHILOSOPHY_QUOTES: PhilosophyItem[] = [
  {
    quote: 'Learning should never stop—curiosity is more valuable than knowing everything.',
    theme: 'Lifelong Learning',
    reflection:
      'From studying English literature to coordinating security operations and building apps with AI, every chapter begins with the willingness to be a beginner again.',
    highlight: true,
  },
  {
    quote: 'Ideas are valuable, but execution is what gives them meaning.',
    theme: 'Action Over Theory',
    reflection:
      'A small, working solution built with persistence matters far more than a grand concept that stays only in your head.',
    highlight: false,
  },
  {
    quote: 'Technology should exist to make real life simpler and easier.',
    theme: 'Human-Centered Tech',
    reflection:
      'Complexity for its own sake impresses nobody; the best digital tools quietly remove friction from everyday work.',
    highlight: false,
  },
  {
    quote: "You don't need to know everything before you begin building.",
    theme: 'Start Where You Are',
    reflection:
      'Clarity arrives through doing. Begin with a clear question, stay patient, and learn each missing piece along the way.',
    highlight: false,
  },
  {
    quote: 'Real progress comes from exploring, experimenting, failing thoughtfully, and improving.',
    theme: 'Iterative Growth',
    reflection:
      'Every bug, false start, and revision teaches something no textbook ever could.',
    highlight: false,
  },
  {
    quote: 'Professional discipline and creative curiosity can—and should—coexist.',
    theme: 'Balanced Identity',
    reflection:
      'Operational structure keeps my feet on the ground, while creative experimentation keeps my mind moving forward.',
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
      tagline:
        !parsed.tagline ||
        parsed.tagline === LEGACY_TAGLINE ||
        parsed.tagline === LEGACY_TAGLINE_V2
          ? DEFAULT_PROFILE.tagline
          : parsed.tagline,
      introduction:
        !parsed.introduction ||
        parsed.introduction === LEGACY_INTRODUCTION ||
        parsed.introduction === LEGACY_INTRODUCTION_V2 ||
        parsed.introduction === LEGACY_INTRODUCTION_V3
          ? DEFAULT_PROFILE.introduction
          : parsed.introduction,
      location:
        !parsed.location || parsed.location === 'Bangladesh'
          ? DEFAULT_PROFILE.location
          : parsed.location,
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
