// All portfolio content lives here. Edit this file to update the site.

export const PROFILE = {
  name: 'Latha Kankanala',
  role: 'Software Engineer · Angular',
  location: 'Hyderabad, India',
  email: 'kankanala.latha123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/latha-kankanala',
  github: 'https://github.com/LathaKankanala',
  // Put your PDF at public/Latha_Kankanala_Resume.pdf
  resume: 'Latha_Kankanala_Resume.pdf',
  headline: 'I build fast, maintainable Angular front-ends for OTT and enterprise platforms.',
  summary:
    'Angular developer with 3.5+ years of experience building the admin and content-management front-ends that power video streaming (OTT) platforms. ' +
    'I work across the full UI lifecycle: requirement analysis, component architecture, REST API integration, validation-heavy forms, performance tuning and production support, inside Agile teams.',
  openTo: 'Open to Angular / Front-End Engineer roles · Hyderabad or remote',
};

export const STATS = [
  { value: '3.5+', label: 'Years with Angular' },
  { value: '10+', label: 'OTT platforms supported' },
  { value: '2', label: 'Product companies' },
  { value: 'Agile', label: 'Scrum, JIRA, CI/CD' },
];

export const SKILL_GROUPS = [
  { title: 'Core', items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS'] },
  { title: 'Angular', items: ['Angular 2 → 22', 'RxJS', 'NgRx', 'Signals', 'Reactive Forms', 'Lazy Loading', 'Ionic'] },
  { title: 'UI', items: ['Bootstrap', 'Responsive Design', 'Cross-browser', 'Accessibility basics'] },
  { title: 'Integration', items: ['REST APIs', 'HTTP Interceptors', 'JSON', 'Firebase', 'Node.js'] },
  { title: 'Quality', items: ['Jasmine / Karma', 'Vitest', 'Unit Testing', 'Code Reviews', 'Debugging'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'JIRA', 'Jenkins', 'VS Code', 'ClickUp'] },
];

export interface Job {
  role: string;
  company: string;
  period: string;
  context: string;
  points: string[];
  tech: string[];
}

export const EXPERIENCE: Job[] = [
  {
    role: 'Software Engineer (Angular)',
    company: 'Yupp Video Services India Pvt. Ltd. (YuppTV)',
    period: 'Dec 2023 – Present',
    context: 'Enterprise OTT Content Management System: one multi-tenant admin platform configured for 10+ OTT brands in India and the US.',
    points: [
      'Build and maintain CMS modules for movies, web series, episodes, playlists, live channels and subscription packages using Angular, TypeScript and Bootstrap.',
      'Added multi-language metadata support across the content modules so each title can carry localized names and descriptions.',
      'Delivered a bulk coupon generation flow with multiple coupon rules and conditional limit validation for a subscription platform.',
      'Implemented the front-end for two-factor authentication on the admin login.',
      'Built subscriber-support screens: refund and cancellation with tax and service-charge breakdown, demo-pack activation with custom date ranges, address management and device deactivation.',
      'Added record-level and report exports, plus a content-level cache purge integration for faster catalogue updates.',
      'Reduced page load waits by running independent API calls in parallel with RxJS forkJoin.',
      'Onboard and retire client tenants through environment configuration, and resolve production issues raised by QA and client teams.',
    ],
    tech: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap', 'REST APIs', 'Git', 'JIRA', 'Jenkins'],
  },
  {
    role: 'Junior Angular Developer',
    company: 'Senwell Solutions',
    period: 'Mar 2022 – Oct 2022',
    context: 'Lotto Social App for Hatchster Ltd. (UK).',
    points: [
      'Developed responsive, interactive screens with Angular 12, Ionic and Bootstrap from UI designs and requirements.',
      'Integrated Firebase and Node.js services and handled JSON data flows across the app.',
      'Worked with senior developers on testing, debugging and maintenance of the production application.',
    ],
    tech: ['Angular 12', 'Ionic', 'TypeScript', 'Firebase', 'Node.js', 'ClickUp'],
  },
];

export interface Project {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  demo: string;
  repo: string;
  images: { src: string; alt: string }[];
}

export const PROJECTS: Project[] = [
  {
    name: 'StreamDesk CMS',
    tagline: 'OTT content management dashboard',
    description:
      'A demo of the kind of admin platform I build every day: a content library for movies, series, episodes and live channels with a full create, edit and delete workflow. It uses only fictional sample data.',
    features: [
      'Debounced search, filters, sorting and pagination synced to the URL',
      'Typed Reactive Forms with sync, async (duplicate title) and cross-field validation',
      'Dynamic FormArray for multi-language titles',
      'HTTP interceptors for auth and a mock REST API, plus route guards',
      'Bulk delete, CSV export, toasts, confirm dialogs and unsaved-changes guard',
      'Lazy-loaded standalone components, Signals, zoneless change detection and unit tests',
    ],
    tech: ['Angular 22', 'TypeScript', 'RxJS', 'Signals', 'Reactive Forms', 'Vitest', 'SCSS'],
    // TODO: update after deployment.
    demo: 'https://streamdesk-cms.vercel.app',
    repo: 'https://github.com/LathaKankanala/streamdesk-cms',
    images: [
      { src: 'projects/streamdesk-list.png', alt: 'StreamDesk content library with search, filters and a sortable table' },
      { src: 'projects/streamdesk-dashboard.png', alt: 'StreamDesk dashboard with catalogue statistics' },
      { src: 'projects/streamdesk-form.png', alt: 'StreamDesk add-content form showing validation messages' },
    ],
  },
];

export const EDUCATION = [
  { degree: 'M.Tech', school: 'JNTUH College of Engineering, Hyderabad' },
  { degree: 'B.Tech, Electronics & Communication Engineering', school: 'JNTUH College of Engineering, Hyderabad' },
];
