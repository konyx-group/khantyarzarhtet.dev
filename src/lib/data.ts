/**
 * Content data
 */
import {
  MOBILE_APP_IMAGE_URL,
  EMS_IMAGE_URL,
  POS_IMAGE_URL,
  WORK_IMAGE_URL,
  MUSIC_APP_IMAGE_URL,
  VOTING_APP_IMAGE_URL,
  TRIP_APP_IMAGE_URL,
  SHOP_APP_IMAGE_URL,
  PLAY_CLAW_IMAGE_URL,
  PLACEHOLDER_LINK,
  LOCATION,
  PLAY_SECRET_BOX_IMAGE_URL,
  PLAY_RANDOM_NUMBER_IMAGE_URL,
  PLAY_FUNNY_GAME_IMAGE_URL,
} from './constants'

// ---- Hero typewriter roles ----
export const ROLES = [
  'Full Stack Developer',
  'PHP Laravel Developer',
  'React Native Developer',
  'UI/UX Enthusiast',
]

// ---- Skills (grouped for Skills section) ----
export type SkillGroup = {
  num: string
  label: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    num: '01',
    label: 'Backend',
    items: [
      'PHP',
      'Laravel',
      'MySQL',
      'REST APIs',
      'System Design',
      'Authentication',
    ],
  },
  {
    num: '02',
    label: 'Frontend',
    items: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'HTML / CSS',
      'Tailwind CSS',
      'Vite',
    ],
  },
  {
    num: '03',
    label: 'Mobile',
    items: [
      'React Native',
      'Firebase',
      'Cross-Platform UI',
      'Push Notifications',
      'App Navigation',
    ],
  },
  {
    num: '04',
    label: 'Tools & Craft',
    items: [
      'Java / JavaFX',
      'Git & GitHub',
      'Clean Architecture',
      'UI / UX Design',
      'OOP',
      'Problem Solving',
    ],
  },
]

/** Flat list kept for any legacy consumers */
export const SKILLS = SKILL_GROUPS.flatMap((g) => g.items)

// ---- Stats ----
export const STATS = [
  { value: '2+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '10+', label: 'Mobile Apps Built' },
  { value: '5', label: 'Certifications' },
]

// ---- Projects (Work) ----
export type ProjectCategory = 'Web' | 'Mobile' | 'Desktop'

export type Project = {
  num: string
  title: string
  company: string
  role: string
  location: string
  period: string
  description: string
  details: string
  highlights: string[]
  skills: string[]
  category: ProjectCategory
  image: string
}

export const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'E-Learning Platform',
    company: 'Professional Role',
    role: 'PHP Laravel Developer',
    location: LOCATION,
    period: '2026 — Present',
    description:
      'Production learning platform with courses, auth, payments, and content delivery — built for scale and clean maintainability.',
    details:
      'Full-time work on a production E-Learning Platform: course management, user authentication, payment flows, and content delivery. Focused on robust Laravel architecture, MySQL performance, and code that stays readable as the product grows.',
    highlights: [
      'Course & enrollment management',
      'Auth + payment integration',
      'MySQL query optimization',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'Auth', 'Payments'],
    category: 'Web',
    image: WORK_IMAGE_URL,
  },
  {
    num: '02',
    title: 'Music Web App',
    company: 'Professional Role',
    role: 'Full-Stack Developer',
    location: LOCATION,
    period: '2025 — 2026',
    description:
      'Streaming-focused web app with playlists, playback, and a clean listening experience on the browser.',
    details:
      'Built a Music Web App with streaming features, playlist management, and a responsive player UI. Handled backend data models and frontend flows so browsing and playback feel fast and reliable.',
    highlights: [
      'Streaming playback flows',
      'Playlist management',
      'Responsive player UI',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    category: 'Web',
    image: MUSIC_APP_IMAGE_URL,
  },
  {
    num: '03',
    title: 'Voting Web App',
    company: 'Professional Role',
    role: 'Full-Stack Developer',
    location: LOCATION,
    period: '2025',
    description:
      'Web voting system with live tallying, secure ballots, and clear real-time results.',
    details:
      'Designed and shipped a Voting Web App with secure casting, live result updates, and an admin-friendly structure for campaigns and tallies.',
    highlights: [
      'Secure ballot casting',
      'Live result updates',
      'Campaign-ready admin flows',
    ],
    skills: ['Laravel', 'PHP', 'MySQL', 'Real-time UI'],
    category: 'Web',
    image: VOTING_APP_IMAGE_URL,
  },
  {
    num: '04',
    title: 'School Management App',
    company: 'Professional Role',
    role: 'Mobile App Developer',
    location: LOCATION,
    period: '2025 — 2026',
    description:
      'Cross-platform school app for attendance, grades, and day-to-day campus workflows.',
    details:
      'Part of a multi-app mobile engagement: built School Management with attendance and grade tracking, synced through Firebase for realtime updates and reliable offline-friendly UX patterns.',
    highlights: [
      'Attendance & grade tracking',
      'Firebase realtime sync',
      'Cross-platform React Native',
    ],
    skills: ['React Native', 'Firebase', 'Mobile UI'],
    category: 'Mobile',
    image: MOBILE_APP_IMAGE_URL,
  },
  {
    num: '05',
    title: 'Trip Booking App',
    company: 'Professional Role',
    role: 'Mobile App Developer',
    location: LOCATION,
    period: '2025 — 2026',
    description:
      'Travel booking flows — browse trips, reserve seats, and track bookings on iOS and Android.',
    details:
      'Shipped a Trip App with booking flows, listing screens, and Firebase-backed data so travelers can discover and reserve trips smoothly across devices.',
    highlights: [
      'Trip listings & search',
      'Booking reservation flow',
      'Push-ready Firebase stack',
    ],
    skills: ['React Native', 'Firebase', 'API Integration'],
    category: 'Mobile',
    image: TRIP_APP_IMAGE_URL,
  },
  {
    num: '06',
    title: 'Shop & Commerce Apps',
    company: 'Freelance & Professional',
    role: 'Independent Mobile Developer',
    location: 'Remote / Yangon',
    period: '2025',
    description:
      'E-commerce and shop experiences — catalogs, cart, checkout — plus personal apps like Loving 360.',
    details:
      'Designed and built commerce-focused mobile apps with product catalogs, cart, and checkout. Independently shipped related products including a Voting app, Music streaming app, and Loving 360 with polished UI and smooth animations.',
    highlights: [
      'Catalog · cart · checkout',
      '4+ apps from concept to ready',
      'Polished cross-platform UX',
    ],
    skills: ['React Native', 'JavaScript', 'Firebase', 'UI Design'],
    category: 'Mobile',
    image: SHOP_APP_IMAGE_URL,
  },
  {
    num: '07',
    title: 'Employee Management System',
    company: 'MST College · OJT',
    role: 'PHP Developer',
    location: 'MST College Training',
    period: '2025',
    description:
      'HR-focused EMS built in pure PHP — employees, departments, attendance, and leave.',
    details:
      'Designed relational schemas and CRUD interfaces for employees, departments, attendance, and leave without a framework — proving core PHP and system design skills.',
    highlights: [
      'Relational DB architecture',
      'Pure PHP CRUD admin UI',
      'Attendance & leave modules',
    ],
    skills: ['Pure PHP', 'MySQL', 'HTML/CSS', 'System Design'],
    category: 'Web',
    image: EMS_IMAGE_URL,
  },
  {
    num: '08',
    title: 'Point of Sale (POS)',
    company: 'MST College · Capstone',
    role: 'Java Desktop Developer',
    location: LOCATION,
    period: '2025',
    description:
      'Desktop POS with inventory, secure transactions, receipts, and a cashier-first UI in JavaFX.',
    details:
      'Capstone desktop POS: stock tracking, transaction handling, receipt generation, and MVC structure using OOP principles for a maintainable JavaFX codebase.',
    highlights: [
      'Inventory & stock tracking',
      'Secure checkout + receipts',
      'JavaFX · MVC · OOP',
    ],
    skills: ['Java', 'JavaFX', 'OOP', 'MVC'],
    category: 'Desktop',
    image: POS_IMAGE_URL,
  },
]

export const PROJECT_FILTERS = ['All', 'Web', 'Mobile', 'Desktop'] as const
export type ProjectFilter = (typeof PROJECT_FILTERS)[number]

// ---- Play (fun HTML/JS experiments on GitHub Pages) ----
export type PlayProject = {
  num: string
  title: string
  description: string
  liveUrl: string
  repoUrl: string
  tags: string[]
  image: string
}

export const PLAY_PROJECTS: PlayProject[] = [
  {
    num: '01',
    title: 'Love Claw Machine',
    description:
      'A playful claw-machine game — insert a credit, move the claw, and grab a prize.',
    liveUrl: 'https://konyx-group.github.io/claw-machine/',
    repoUrl: 'https://github.com/konyx-group/claw-machine',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: PLAY_CLAW_IMAGE_URL,
  },
  {
    num: '02',
    title: 'Secret Audit Box',
    description:
      'Click mystery boxes for a light office-day distraction — surprises inside each gift.',
    liveUrl: 'https://konyx-group.github.io/box-a-game/',
    repoUrl: 'https://github.com/konyx-group/box-a-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: PLAY_SECRET_BOX_IMAGE_URL,
  },
  {
    num: '03',
    title: 'Love Number Guesser',
    description:
      'Pick a range, choose a difficulty, and guess the secret number in as few tries as you can.',
    liveUrl: 'https://konyx-group.github.io/random-number/',
    repoUrl: 'https://github.com/konyx-group/random-number',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: PLAY_RANDOM_NUMBER_IMAGE_URL,
  },
  {
    num: '04',
    title: 'Do You Love Me?',
    description:
      'A cheeky yes/no UI experiment — the "No" button has a mind of its own.',
    liveUrl: 'https://konyx-group.github.io/funny-game/',
    repoUrl: 'https://github.com/konyx-group/funny-game',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: PLAY_FUNNY_GAME_IMAGE_URL,
  },
]

// ---- Education ----
export type EducationItem = {
  num: string
  school: string
  title: string
  period: string
  location: string
  body: string
}

export const EDUCATION: EducationItem[] = [
  {
    num: '01',
    school: 'University of Computer Studies, Yangon (UCSY)',
    title: 'Computer Science',
    period: 'Foundation',
    location: 'Yangon, Myanmar',
    body: 'My journey in computer science began here, driven by a passion for practical engineering — programming, algorithms, and software development.',
  },
  {
    num: '02',
    school: 'MST College',
    title: 'ITPEC Pathway — IP & FE',
    period: '2024 — 2025',
    location: 'Myanmar',
    body: 'Studied Japan\'s ITPEC programs at MST College and passed the Fundamental Information Technology Engineer (FE) examination in April 2025.',
  },
  {
    num: '03',
    school: 'On-the-Job Training',
    title: 'Employee Management System',
    period: '2025',
    location: 'MST College Training',
    body: 'Built an Employee Management System with pure PHP during OJT, focused on real-world problems and practical engineering skills.',
  },
]

// ---- Certifications ----
export type Certification = {
  title: string
  issuer: string
  year: string
  description: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Professional Web Developer',
    issuer: 'Fairway Technology',
    year: '2024',
    description: 'Completed professional web development training at Fairway Technology, gaining hands-on experience in building production-ready web applications with modern technologies. This certification covers frontend and backend development, including HTML/CSS, JavaScript, PHP, and database integration — laying the foundation for my career in professional web development.',
  },
  {
    title: 'Fundamental Information Technology Engineer (FE)',
    issuer: 'Japan ITPEC Program',
    year: '2025',
    description: 'Passed the FE examination in April 2025 — a prestigious Japanese ITPEC certification validating fundamental knowledge of computer science, algorithms, data structures, system design, and software engineering. This international certification demonstrates a strong engineering foundation recognized across Japan and Asia.',
  },
  {
    title: 'IP Certificate',
    issuer: 'MST College',
    year: '2024',
    description: 'Certified in the Information Technology Professional (IP) program at MST College, covering foundational IT concepts, computer architecture, networking fundamentals, and professional engineering practices. The IP program is the first level of Japan\'s ITPEC certification pathway.',
  },
  {
    title: 'Java SE',
    issuer: 'MST College',
    year: '2024',
    description: 'Certified in Java Standard Edition, demonstrating proficiency in core Java programming, object-oriented concepts, data structures, collections, exception handling, and desktop application development with JavaFX. This certification reflects strong foundation in one of the world\'s most widely-used programming languages.',
  },
  {
    title: 'Internship Certificate',
    issuer: 'Fairway Technology',
    year: '2024',
    description: 'Completed a professional internship at Fairway Technology, contributing to real-world development projects and gaining valuable industry experience. Worked with professional teams, followed software development workflows, version control practices, and shipped meaningful features to production.',
  },
]
// ---- Talks (Speaking) ----
export const TALKS = [
  {
    title: 'Building Scalable Web Applications with Laravel',
    event: 'Team Knowledge Sharing',
    year: '2026',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'From JavaFX to Modern Web: My Development Journey',
    event: 'MST College Tech Talk',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'Introduction to React Native for Cross-Platform Development',
    event: 'Developer Meetup',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'Passing the ITPEC FE Exam: Tips & Study Strategies',
    event: 'MST College Workshop',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
]

// ---- Articles (Writing) ----
export const ARTICLES = [
  {
    title: 'Getting Started with Laravel: A Practical Guide',
    publication: 'Personal Blog',
    year: '2026',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'Building Cross-Platform Apps with React Native',
    publication: 'Personal Blog',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'My Journey Passing the ITPEC FE Exam',
    publication: 'MST College Journal',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
  {
    title: 'Clean Architecture Principles for PHP Developers',
    publication: 'Personal Blog',
    year: '2025',
    link: PLACEHOLDER_LINK,
  },
]

// ---- Testimonials ----
export const TESTIMONIALS = [
  {
    quote: 'Khant is a dedicated developer who delivers clean, reliable code. His ability to learn fast and ship production-ready features is impressive.',
    name: 'Team Lead',
    role: 'Current Workplace',
  },
  {
    quote: 'A self-driven engineer with a strong foundation in both frontend and backend. He consistently focuses on solving real problems.',
    name: 'Mentor',
    role: 'MST College',
  },
  {
    quote: 'Great collaborator with a keen eye for clean architecture and thoughtful UX. A valuable asset to any development team.',
    name: 'Colleague',
    role: 'Fairway Technology',
  },
]