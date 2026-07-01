import { Project, Experience, SkillCategory, Service } from './types';

export const PERSONAL_INFO = {
  name: 'Ahmed Hazem',
  title: 'Full-Stack Software Engineer',
  location: 'Sohag, Egypt',
  phone: '+20-1068298970',
  email: 'mailto:ahemd01068@gmail.com',
  profilePic: 'https://avatars.githubusercontent.com/u/268745089?v=4',
  summary:
    'Full-Stack Software Engineer focused on business systems, client portals, e-commerce, and operational dashboards. I build production web and mobile products with Next.js, TypeScript, ASP.NET Core, Supabase/PostgreSQL, and Flutter—from secure workflows and real-time collaboration to payments, reporting, and role-based access.',
  socials: {
    github: 'https://github.com/AhmedHazem03',
    linkedin: 'https://www.linkedin.com/in/ahmed-hazem-235953369/',
    email: 'mailto:ahemd01068@gmail.com',
    codeforces: 'https://codeforces.com/profile/A.Hazem_2003',
    leetcode: 'https://leetcode.com/u/A_Hazem-2003/',
    whatsapp: 'https://wa.me/201068298970'
  }
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: 'Founder & Full-Stack Software Engineer',
    company: 'DXIQ',
    period: 'May 2026 – Present',
    description: [
      'Build client-facing digital products and operational systems for businesses that need clearer workflows, visibility, and reliable delivery.',
      'Own technical delivery across product architecture, frontend experience, database design, security rules, deployment, and ongoing iteration.',
      'Work across Next.js, TypeScript, Supabase/PostgreSQL, Flutter, Cloudinary, and Vercel to ship maintainable production software.'
    ],
    type: 'Work'
  },
  {
    role: 'Full-Stack Software Engineer',
    company: 'Xfuse',
    period: '2025 – May 2026',
    description: [
      'Delivered production SaaS and commerce products, including an operations dashboard and a delivery-driver application.',
      'Built real-time workflows, reporting, notifications, and location-aware experiences while collaborating on end-to-end product delivery.',
      'Worked across responsive web interfaces, APIs, database-backed features, and deployment-ready integrations.'
    ],
    type: 'Work'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'DEX Agency OS & Client Portal',
    period: '2026',
    description:
      'Built an operating system for a marketing agency that centralizes seven-stage task workflows, revisions and approvals, attachments, client follow-up, treasury records, invoices, financial reports, and exports. The platform uses role-based permissions and database security rules so each team member and client sees only the information relevant to them.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Realtime', 'Vercel'],
    type: 'System',
    link: 'https://www.dex-adv-agency.com/'
  },
  {
    title: 'Jada Perfumes — Luxury E-Commerce',
    period: '2026',
    description:
      'Delivered a premium, responsive e-commerce experience for a perfume brand with a 3D-led hero section, clear product discovery, product-detail flows, cart interactions, offers, coupons, loyalty features, inventory-aware admin tools, and role-based operations.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS', 'Framer Motion'],
    type: 'E-Commerce',
    link: 'https://www.jada-perfumes.com/'
  },
  {
    title: 'Mahalk — Commerce Operations & Delivery',
    period: '2025 – 2026',
    description:
      'Work delivered at Xfuse: built a business dashboard for tracking orders, revenue, drivers, reports, and notifications, alongside a driver application that handles order delivery, live location sharing, Google Maps workflows, and proximity-aware updates.',
    techStack: ['Next.js', 'TypeScript', 'Flutter', 'Dart', 'Google Maps API', 'Realtime Updates'],
    type: 'SaaS'
  },
  {
    title: 'Elite International Schools — Digital Platform',
    period: '2026',
    description:
      'Developed a bilingual Arabic/English school platform with a polished responsive experience, admissions and content workflows, a dashboard for administration, and SEO-ready delivery. The build combines modern UI motion with a Supabase-backed application layer.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    type: 'Website',
    link: 'https://www.eliteinternationale.com/ar'
  },
  {
    title: 'Mentorly — Student Guidance API',
    period: '2026',
    description:
      'Graduation-project backend for a platform that helps students explore university faculties and make informed academic choices. Designed the API and backend structure with maintainability and clear domain logic in mind.',
    techStack: ['ASP.NET Core', 'C#', 'REST APIs', 'SQL', 'Entity Framework Core'],
    type: 'API',
    link: 'https://github.com/AhmedHazem03/Mentorly'
  }
];

export const EDUCATION: Experience[] = [
  {
    company: 'Sohag University',
    role: 'Bachelor of Computers and Artificial Intelligence',
    period: '2022 – Jun 2026',
    type: 'Education'
  }
];

export const CERTIFICATIONS: Experience[] = [
  {
    company: 'Route Academy',
    role: 'Back-End ASP.NET Certificate',
    period: 'Nov 2023 – Jun 2024',
    type: 'Certificate',
    link: 'https://drive.google.com/file/d/10OGnhBa2WcJwSV2iTr_PfdL0fjy9NbFr/view?pli=1'
  },
  {
    company: 'Egyptian Collegiate Programming Contest',
    role: 'ECPC Qualification Certificate',
    period: '2024',
    type: 'Certificate',
    link: 'https://drive.google.com/file/d/1-0k0nKGk8Wh6n8bzaHv42KtWaOLdOxpU/view'
  }
];

export const VOLUNTEERING: Experience[] = [
  {
    role: 'Head of Back-End Committee',
    company: 'Smart Student Activity, Sohag University',
    period: 'Apr 2024 – Jan 2025',
    description: ['Led technical training for junior students and helped shape the backend-track curriculum.'],
    type: 'Volunteering'
  }
];

export const ACHIEVEMENTS: Experience[] = [
  {
    company: 'Coach Academy',
    role: 'Competitive Programming Training Level 3',
    period: 'May 2023 – Feb 2024',
    type: 'Achievement',
    link: 'https://drive.google.com/file/d/1DYJZQgJAoz6sT8Vy0FZxsje-Cu3_Ohz9/view?pli=1'
  }
];

export const LANGUAGES = [
  { language: 'Arabic', level: 'Native' },
  { language: 'English', level: 'Professional Proficiency' }
];

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#', 'Dart', 'SQL', 'Python']
  },
  {
    name: 'Frontend & Mobile',
    skills: ['Next.js', 'React', 'Flutter', 'Tailwind CSS', 'Framer Motion']
  },
  {
    name: 'Backend & Data',
    skills: ['ASP.NET Core', 'Supabase', 'PostgreSQL', 'Prisma', 'Entity Framework Core', 'Redis']
  },
  {
    name: 'Product & Security',
    skills: ['RLS', 'RBAC', 'JWT', 'Webhooks', 'Payments', 'Realtime Workflows', 'Reporting']
  },
  {
    name: 'Tooling & Delivery',
    skills: ['Git', 'GitHub', 'Vercel', 'Cloudinary', 'Cloudflare R2', 'Docker', 'Postman']
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Business Systems & Dashboards',
    description: 'Operational products that bring tasks, approvals, clients, reporting, and financial visibility into one practical workflow.',
    features: ['Workflow Design', 'Admin Dashboards', 'Client Portals', 'Reporting & Exports'],
    icon: 'Layout'
  },
  {
    title: 'E-Commerce & Customer Experiences',
    description: 'Responsive shopping journeys with clear discovery, product details, carts, promotions, and the operational tools behind them.',
    features: ['Storefront UX', 'Product Operations', 'Offers & Coupons', 'Inventory-Aware Flows'],
    icon: 'Globe'
  },
  {
    title: 'Full-Stack Product Development',
    description: 'End-to-end application delivery from interface and API design to database rules, deployment, and iterative improvement.',
    features: ['Next.js & TypeScript', 'ASP.NET Core', 'Supabase & PostgreSQL', 'Flutter Mobile Apps'],
    icon: 'Server'
  },
  {
    title: 'Secure Data & Permissions',
    description: 'Systems designed with practical access boundaries, authenticated flows, and database-level rules from the start.',
    features: ['Row-Level Security', 'Role-Based Access', 'JWT Sessions', 'Server-Side Validation'],
    icon: 'Shield'
  },
  {
    title: 'Real-Time Workflows & Integrations',
    description: 'Live operational updates and trusted integrations for notifications, maps, storage, payments, and external services.',
    features: ['Realtime Updates', 'Maps & Location', 'Webhook Handling', 'Storage Integrations'],
    icon: 'Workflow'
  },
  {
    title: 'Performance & Maintainability',
    description: 'Clear architecture and delivery practices that keep projects dependable as data, features, and teams grow.',
    features: ['Database Design', 'Caching Strategy', 'SEO & Performance', 'Deployment Workflows'],
    icon: 'Zap'
  }
];
