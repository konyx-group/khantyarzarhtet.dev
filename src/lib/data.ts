/**
 * Content data
 */
import {
  MOBILE_APP_IMAGE_URL,
  INDEPENDENT_IMAGE_URL,
  EMS_IMAGE_URL,
  POS_IMAGE_URL,
  WORK_IMAGE_URL,
  PLACEHOLDER_LINK,
  LOCATION,
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
  title: string
  company: string
  location: string
  period: string
  description: string
  details: string
  skills: string[]
  category: ProjectCategory
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: 'PHP Laravel Developer',
    company: 'Current Professional Role',
    location: LOCATION,
    period: '2026 — Present',
    description: 'Developing and maintaining a scalable E-Learning Platform. Previously built dynamic web applications including a Music Web App and a Voting Web App. Focused on robust backend architecture, database optimization, and writing clean, maintainable code.',
    details: 'Working full-time on a production E-Learning Platform, handling course management, user authentication, payment integration, and content delivery. Built a Music Web App with streaming features and a Voting Web App with real-time results. Deeply focused on writing clean, testable code and optimizing MySQL queries for performance at scale.',
    skills: ['Laravel', 'PHP', 'MySQL', 'Web Apps', 'Backend Architecture'],
    category: 'Web',
    image: WORK_IMAGE_URL,
  },
{
    title: 'Mobile App Developer',
    company: 'Professional Role',
    location: LOCATION,
    period: 'Late 2025 — 2026',
    description: 'Worked in a fast-paced environment developing multiple cross-platform mobile applications over a 6-month period. Successfully shipped diverse apps including School Management, Trip App, Shop App, Property App, Learning App, and Car App. Integrated Firebase for real-time data sync and backend services.',
    details: 'Shipped 6+ production mobile apps across different industries in just 6 months. Built a School Management App with attendance and grade tracking, a Trip App with booking flows, a Shop App with cart and checkout, a Property App with listings, a Learning App with course content, and a Car App with vehicle management. Used Firebase for real-time sync, push notifications, and cloud storage.',
    skills: ['React Native', 'Firebase', 'Mobile Development', 'UI/UX', 'API Integration'],
    category: 'Mobile',
    image: MOBILE_APP_IMAGE_URL,
  },
  {
    title: 'Independent Mobile Developer',
    company: 'Freelance & Personal Projects',
    location: 'Remote',
    period: '2025',
    description: 'Designed and developed a suite of mobile applications featuring an E-Commerce platform, a Voting app, a Music streaming app, and "Loving 360". Emphasized responsive UI design, smooth animations, and seamless user experiences on both iOS and Android.',
    details: 'Independently designed and built 4+ mobile applications from concept to store-ready. Built an E-Commerce platform with product catalogs and payments, a Voting app with live tallying, a Music streaming app with playlists and playback, and "Loving 360" — a relationship-focused app. Emphasized smooth animations, responsive layouts, and delightful UX on both platforms.',
    skills: ['React Native', 'JavaScript', 'Cross-Platform', 'Mobile UI Design'],
    category: 'Mobile',
    image: INDEPENDENT_IMAGE_URL,
  },
{
    title: 'Employee Management System',
    company: 'OJT Project',
    location: 'MST College Training',
    period: '2025',
    description: 'Built a comprehensive Employee Management System from scratch using Pure PHP. Designed the relational database architecture and developed clean, functional interfaces for employee tracking and HR administration.',
    details: 'Designed and developed a full Employee Management System using pure PHP without frameworks — demonstrating deep understanding of core language features. Created relational database schemas for employees, departments, attendance, and leave management. Built clean, functional CRUD interfaces for HR administration.',
    skills: ['Pure PHP', 'MySQL', 'HTML/CSS', 'System Design', 'Relational Databases'],
    category: 'Web',
    image: EMS_IMAGE_URL,
  },
  {
    title: 'Point of Sale (POS) System',
    company: 'MST College (Final Project)',
    location: LOCATION,
    period: '2025',
    description: 'Developed a robust desktop Point of Sale (POS) application using JavaFX as the capstone project. Implemented inventory management, secure transaction handling, and a user-friendly cashier interface utilizing Object-Oriented Programming principles.',
    details: 'Built a complete desktop POS system with JavaFX as my capstone project. Implemented inventory management with stock tracking, secure transaction handling with receipt generation, and an intuitive cashier interface. Applied Object-Oriented Programming principles throughout — inheritance, encapsulation, and MVC architecture to keep the codebase maintainable and extensible.',
    skills: ['Java', 'JavaFX', 'Desktop Application', 'OOP', 'Database Management'],
    category: 'Desktop',
    image: POS_IMAGE_URL,
  },
]

export const PROJECT_FILTERS = ['All', 'Web', 'Mobile', 'Desktop'] as const
export type ProjectFilter = (typeof PROJECT_FILTERS)[number]

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