import { Project, Experience, SkillCategory, Service } from './types';

export const PERSONAL_INFO = {
  name: 'Ahmed Hazem',
  title: 'Full-Stack Software Engineer',
  location: 'Sohag, Egypt',
  phone: '+20-1068298970',
  email: 'mailto:div.ahmedhazam@gmail.com',
  profilePic: 'https://avatars.githubusercontent.com/u/268745089?v=4',
  summary:
    'Full-Stack Software Engineer who builds production business systems, operational dashboards, e-commerce platforms, and client portals. I combine an ASP.NET Core foundation with Next.js, TypeScript, Supabase/PostgreSQL, and product thinking to turn complex workflows into reliable, easy-to-use software.',
  socials: {
    github: 'https://github.com/AhmedHazem03',
    linkedin: 'https://www.linkedin.com/in/ahmed-hazem-235953369/',
    email: 'mailto:div.ahmedhazam@gmail.com',
    codeforces: 'https://codeforces.com/profile/A.Hazem_2003',
    leetcode: 'https://leetcode.com/u/A_Hazem-2003/',
    whatsapp: 'https://wa.me/201068298970',
  },
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Founder & Full-Stack Software Engineer',
    company: 'DXIQ',
    period: 'Jan 2026 – Present',
    description: [
      'Lead end-to-end delivery of web systems for agencies and businesses, from discovery and architecture to deployment and support.',
      'Build operational tools that centralize workflows, approvals, client communication, reporting, and financial visibility.',
      'Work across Next.js, TypeScript, Supabase/PostgreSQL, ASP.NET Core foundations, cloud deployment, and secure role-based access.',
    ],
    type: 'Work',
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Xfuse',
    period: 'Sep 2025 – May 2026',
    description: [
      'Built and delivered customer-facing products across dashboard, marketplace, and delivery operations.',
      'Developed Mahalk operations tooling for orders, revenue, reporting, notifications, and live driver visibility.',
      'Shipped responsive web experiences and Flutter delivery workflows backed by real-time data and Google Maps integrations.',
    ],
    type: 'Work',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'DEX Agency OS — Operations, Treasury & Client Portal',
    period: '2026',
    description:
      'Designed and delivered an agency operating system that brings task execution, approvals, client feedback, attachments, and treasury reporting into one operational workspace. The product includes a seven-stage Kanban workflow, revision handling, income and expense tracking, invoices, analytics, Excel export, and a client portal for approvals and feedback.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'RBAC', 'Realtime', 'Excel Export'],
    type: 'System',
    link: 'https://www.dex-adv-agency.com/',
  },
  {
    title: 'Mahalk — Marketplace Operations & Driver Delivery App',
    period: '2025 – 2026',
    description:
      'Delivered two connected production products at Xfuse: an admin dashboard for orders, revenue, driver operations, reporting, and automated notifications; plus Deliverzler, a Flutter driver app for receiving deliveries, sharing live location, navigating with Google Maps, and handling proximity-based delivery updates.',
    techStack: ['Next.js', 'TypeScript', 'Flutter', 'Dart', 'Google Maps API', 'Realtime Tracking', 'Notifications', 'Reports'],
    type: 'System',
  },
  {
    title: 'Jada Perfumes — Luxury E-Commerce Experience',
    period: '2026',
    description:
      'Built a production luxury e-commerce experience with premium product discovery, responsive mobile shopping, dynamic offers, coupons, loyalty features, and a streamlined cart flow. The platform includes an admin experience for inventory and content operations, role-based access, and a polished storefront built for a high-end brand feel.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Cloudinary'],
    type: 'Website',
    link: 'https://www.jada-perfumes.com/',
  },
  {
    title: 'Elite International Schools — Digital Admissions Platform',
    period: '2026',
    description:
      'Developed a bilingual educational platform with Arabic/English RTL support, a responsive premium interface, admissions workflows, content management, and an admin dashboard. The implementation uses Next.js and Supabase with SEO-focused metadata, structured data, and performance-conscious rendering.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RTL', 'Framer Motion', 'SEO', 'ISR'],
    type: 'Website',
    link: 'https://www.eliteinternationale.com/ar',
  },
  {
    title: 'School Management System API',
    period: '2024',
    description:
      'Designed a school administration API using Clean Architecture with authenticated role-based access, structured domain logic, and maintainable data access patterns for core school operations.',
    techStack: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'JWT', 'Clean Architecture'],
    type: 'API',
    link: 'https://github.com/AhmedHazem02/school-management-system',
  },
];

export const EDUCATION: Experience[] = [
  {
    company: 'Sohag University — Faculty of Computers and Artificial Intelligence',
    role: 'Bachelor of Information Technology',
    period: 'Oct 2022 – Jun 2026',
    type: 'Education',
  },
];

export const CERTIFICATIONS: Experience[] = [
  {
    company: 'Route Academy',
    role: 'Back-End ASP.NET Certificate',
    period: 'Nov 2023 – Jun 2024',
    type: 'Certificate',
    link: 'https://drive.google.com/file/d/10OGnhBa2WcJwSV2iTr_PfdL0fjy9NbFr/view?pli=1',
  },
  {
    company: 'Egyptian Collegiate Programming Contest',
    role: 'ECPC Qualification Certificate',
    period: '2024',
    type: 'Certificate',
    link: 'https://drive.google.com/file/d/1-0k0nKGk8Wh6n8bzaHv42KtWaOLdOxpU/view',
  },
];

export const VOLUNTEERING: Experience[] = [
  {
    role: 'Head of Back-End Committee',
    company: 'Smart Student Activity — Sohag University',
    period: 'Apr 2024 – Jan 2025',
    description: ['Led backend training for junior students and helped structure learning material for backend tracks.'],
    type: 'Volunteering',
  },
];

export const ACHIEVEMENTS: Experience[] = [
  {
    company: 'Coach Academy',
    role: 'Competitive Programming Training — Level 3',
    period: 'May 2023 – Feb 2024',
    type: 'Achievement',
    link: 'https://drive.google.com/file/d/1DYJZQgJAoz6sT8Vy0FZxsje-Cu3_Ohz9/view?pli=1',
  },
];

export const LANGUAGES = [
  { language: 'Arabic', level: 'Native' },
  { language: 'English', level: 'Professional working proficiency' },
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Dart', 'SQL', 'Python'],
  },
  {
    name: 'Frontend & Mobile',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Flutter', 'Responsive UI', 'RTL'],
  },
  {
    name: 'Backend & Data',
    skills: ['ASP.NET Core', 'REST APIs', 'PostgreSQL', 'Supabase', 'Prisma', 'SQL Server', 'Redis', 'Firebase'],
  },
  {
    name: 'Systems & Security',
    skills: ['RLS', 'RBAC', 'JWT', 'Webhooks', 'Realtime Workflows', 'Role-Based Access', 'File Storage', 'Caching'],
  },
  {
    name: 'AI-Assisted Engineering',
    skills: ['OpenAI Codex', 'Claude', 'GitHub Copilot', 'ChatGPT', 'Code Review', 'Test Design', 'Technical Documentation'],
  },
  {
    name: 'Tooling & Delivery',
    skills: ['Git', 'GitHub', 'Vercel', 'Docker', 'Postman', 'Cloudinary', 'Cloudflare R2', 'Google Maps API'],
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Business Systems & Operational Dashboards',
    description: 'I turn scattered operational work into clear systems for teams, managers, and clients.',
    features: ['Workflow Design', 'Dashboards & Reports', 'Approvals & Client Portals', 'Treasury & Operations'],
    icon: 'Workflow',
  },
  {
    title: 'Full-Stack Web Applications',
    description: 'Production-ready web applications built with a practical balance of UX, maintainability, and speed.',
    features: ['Next.js & TypeScript', 'ASP.NET Core Foundations', 'Responsive UI', 'Deployment & Monitoring'],
    icon: 'Server',
  },
  {
    title: 'E-Commerce & Customer Experiences',
    description: 'Modern storefronts and commerce flows that make product discovery and mobile shopping feel effortless.',
    features: ['Product Discovery', 'Cart & Checkout Flows', 'Offers & Loyalty', 'Admin Operations'],
    icon: 'Zap',
  },
  {
    title: 'Data, Access & Integrations',
    description: 'Reliable data flows and integrations with appropriate security boundaries for real business needs.',
    features: ['PostgreSQL & Supabase', 'RLS & RBAC', 'Payments & Webhooks', 'Realtime & Notifications'],
    icon: 'Database',
  },
  {
    title: 'Mobile Delivery Workflows',
    description: 'Connected mobile and web workflows for field teams, drivers, and operational users.',
    features: ['Flutter Applications', 'Live Location', 'Google Maps', 'Operational Notifications'],
    icon: 'Shield',
  },
  {
    title: 'AI-Assisted Engineering Workflow',
    description: 'I use AI tools to accelerate focused engineering work while architecture, security, testing, and final decisions remain human-owned.',
    features: ['OpenAI Codex & Claude', 'GitHub Copilot', 'Debugging & Test Design', 'Review & Validation'],
    icon: 'Server',
  },
];
