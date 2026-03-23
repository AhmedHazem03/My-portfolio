
import { Project, Experience, SkillCategory, Service } from './types';

export const PERSONAL_INFO = {
  name: "Ahmed Hazem",
  title: "Software Engineer",
  location: "Sohag, Egypt",
  phone: "+20-1068298970",
  email: "mailto:div.ahmedhazam@gmail.com",
  profilePic: "https://github.com/AhmedHazem03.png",
  summary: "I am a results-oriented Software Engineer specializing in scalable full-stack systems. With a strong competitive programming foundation, I bring sharp algorithmic thinking to every project. Currently at Xfuse, I bridge powerful .NET backends with dynamic Next.js frontends to deliver production-grade platforms across the Educational, E-commerce, and Medical sectors.",
  socials: {    
    github: "https://github.com/AhmedHazem03",
    linkedin: "https://www.linkedin.com/in/ahmed-hazem-235953369/",
    email: "mailto:div.ahmedhazam@gmail.com",
    codeforces: "https://codeforces.com/profile/A.Hazem_2003",
    leetcode: "https://leetcode.com/u/A_Hazem-2003/",
    whatsapp: "https://wa.me/201068298970"
  }
};

export const WORK_EXPERIENCE: Experience[] = [
  {
    role: "Backend Developer",
    company: "Xfuse",
    period: "Sep 2025 – Present",
    description: [
      "Design and develop scalable backend services and APIs for production-level applications.",
      "Lead the backend architecture for key company products including e-commerce and medical platforms.",
      "Optimize database schema and queries in MSSQL to enhance system performance and reduce latency.",
      "Apply Clean Architecture principles and Design Patterns to ensure code maintainability."
    ],
    type: "Work"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Elite International School Digital Platform",
    period: "Feb 3, 2026 – Feb 10, 2026",
    description: "Architected and developed a comprehensive full-stack educational platform. Built a premium user interface using Next.js 15 (App Router), TypeScript, and Framer Motion for cinematic micro-interactions, complete with Dark/Light modes and a glassmorphic design. Integrated Supabase (PostgreSQL, Auth, Storage) for robust backend operations, handling real-time admissions and content management. Engineered a dynamic Admin Dashboard with bilingual (Arabic/English RTL) capabilities, optimized with ISR caching and JSON-LD schemas for peak SEO performance.",
    techStack: ["Next.js 15", "TypeScript", "Supabase", "Framer Motion", "ISR/SEO"],
    type: "Website",
    link: "https://www.eliteinternationale.com/ar"
  },
  {
    title: "Agency OS & Web Presence (Marketing DEX)",
    period: "Jan 22, 2026 – Mar 10, 2026",
    description: "Built a production-ready Agency Operating System integrating a Kanban Task Management board, Treasury System with automated financial reports, and a Client Portal for streamlined feedback. Developed custom Department Workflows, real-time chat powered by WebSockets, and a robust Admin CMS. Ensured enterprise-level security with Row-Level Security (RLS) on every table and Role-Based Access Control (RBAC) accommodating 10 distinct roles. Fully bilingual (Arabic/English RTL), optimized for 15,000+ concurrent users, and deployed on Vercel's Edge Network.",
    techStack: ["System Architecture", "WebSockets", "Row-Level Security", "RBAC", "Vercel"],
    type: "System",
    link: "https://www.dex-adv-agency.com/ar"
  },
  {
    title: "MakaStore – Production-Ready E-Commerce",
    period: "Oct 2025 – Nov 2025",
    description: "Architected the entire backend and transaction engine for an Arabic-first (RTL) e-commerce platform. Constructed a custom Order Engine to validate and manage the full order lifecycle and inventory updates. Developed a complete Payment System from scratch, handling transaction generation, webhook verification, and edge cases. Established secure admin operations for customizable store layout control and content management.",
    techStack: ["Backend Architecture", "Payment Flows", "Webhook Security", "Inventory Logic", "Vercel"],
    type: "System",
    link: "https://maka-store.vercel.app/"
  },
  {
    title: "Integrated Medical Platform (Sehaty)",
    period: "Nov 2025 – Dec 2025",
    description: "Engineered the backend for a comprehensive medical platform digitizing patient journeys (Booking, Labs, Home Services). Integrated Firebase Auth for secure authentication and Firestore for real-time data management. Incorporated online payments via Kashier and automated notifications using WhatsApp API. Orchestrated complex file workflows for prescriptions using Cloudinary and Airtable.",
    techStack: ["Firebase", "Firestore", "Kashier Payment Gateway", "WhatsApp API", "Cloudinary"],
    type: "System",
    link: "https://sehaty-86se.vercel.app/"
  },
  {
    title: "School Management System (API)",
    period: "Sep 2024 – Nov 2024",
    description: "Architected a comprehensive API for school administration using Clean Architecture and .NET Core. Enforced robust security measures using JWT authentication and role-based authorization.",
    techStack: ["C#", ".NET Core", "SQL", "Entity Framework Core", "LINQ"],
    type: "API",
    link: "https://github.com/AhmedHazem02/school-management-system"
  },
  {
    title: "Talabat E-commerce Clone (API)",
    period: "Apr 2024 – Jun 2024",
    description: "Engineered a high-performance backend system replicating core functionalities of a food delivery platform. Integrated Redis for caching frequently accessed data, significantly reducing database load.",
    techStack: ["C#", ".NET Web API", "Redis", "SQL", "AutoMapper"],
    type: "API",
    link: "https://github.com/AhmedHazem02/e-commerce-website-API-Route-/tree/master"
  },
  {
    title: "Employee Management System (MVC)",
    period: "Feb 2024 – Mar 2024",
    description: "Developed a full-stack MVC application for managing employees and departments. Implemented secure login/signup functionality and full CRUD operations with server-side validation using Clean Architecture principles.",
    techStack: ["ASP.NET Core MVC", "SQL", "Entity Framework", "Bootstrap", "HTML/CSS"],
    type: "MVC",
    link: "https://github.com/AhmedHazem02/MVC_Project_Route/tree/master"
  }
];

// ATS Rule: Education (Degrees only)
export const EDUCATION: Experience[] = [
  {
    company: "Sohag University",
    role: "Bachelor of Information Technology",
    period: "Oct 2022 – Jun 2026 (Expected)",
    type: "Education"
  }
];

// ATS Rule: Separate Section for Certifications
export const CERTIFICATIONS: Experience[] = [
  {
    company: "Route Academy",
    role: "Back-End ASP.NET Certificate",
    period: "Nov 2023 – Jun 2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/10OGnhBa2WcJwSV2iTr_PfdL0fjy9NbFr/view?pli=1"
  },
  {
    company: "Egyptian Collegiate Programming Contest",
    role: "ECPC Qualification Certificate",
    period: "2024",
    type: "Certificate",
    link: "https://drive.google.com/file/d/1-0k0nKGk8Wh6n8bzaHv42KtWaOLdOxpU/view"
  }
];

// ATS Rule: Volunteering / Achievements in separate or additional sections
export const VOLUNTEERING: Experience[] = [
  {
    role: "Head of Back-End Committee",
    company: "Smart Student Activity (Sohag University)",
    period: "Apr 2024 – Jan 2025",
    description: [
      "Spearheaded technical training for junior students and designed curriculum for backend tracks."
    ],
    type: "Volunteering"
  }
];

export const ACHIEVEMENTS: Experience[] = [
  {
    company: "Coach Academy",
    role: "Competitive Programming Training Level 3",
    period: "May 2023 – Feb 2024",
    type: "Achievement",
    link: "https://drive.google.com/file/d/1DYJZQgJAoz6sT8Vy0FZxsje-Cu3_Ohz9/view?pli=1"
  }
];

export const LANGUAGES = [
  { language: "Arabic", level: "Native" },
  { language: "English", level: "Professional Proficiency" }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["C#", "TypeScript", "C++", "Python", "SQL"]
  },
  {
    name: "Frameworks",
    skills: [".NET Core", "ASP.NET Web API", "Next.js", "React", "Entity Framework (EF)", "MVC", "LINQ"]
  },
  {
    name: "Databases",
    skills: ["MSSQL", "Supabase", "Redis", "Firestore"]
  },
  {
    name: "Concepts",
    skills: ["Clean Architecture", "CQRS", "SOLID Principles", "OOP", "Data Structures", "Algorithms", "RBAC"]
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Firebase", "Cloudflare R2", "TanStack Query"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Full-Stack System Engineering",
    description: "Bridging powerful .NET backends with dynamic Next.js frontends to deliver production-grade platforms.",
    features: ["Next.js (App Router)", "ASP.NET Core", "Clean Architecture", "TypeScript & C#"],
    icon: "Layout"
  },
  {
    title: "Backend & API Development",
    description: "Building robust, scalable RESTful APIs with secure authentication and real-time capabilities.",
    features: ["RESTful API Design", "WebSockets / Real-time", "JWT & RBAC Security", "High-traffic Optimization"],
    icon: "Server"
  },
  {
    title: "Database Architecture",
    description: "Designing and optimizing distributed databases for performance, security, and data integrity.",
    features: ["PostgreSQL (Supabase)", "MSSQL Server", "Row-Level Security (RLS)", "Redis Caching"],
    icon: "Database"
  },
  {
    title: "Modern UI/UX Development",
    description: "Creating premium, highly interactive, and responsive user interfaces with cinematic micro-interactions.",
    features: ["React & Framer Motion", "Tailwind CSS", "Dark/Light Modes", "Bilingual Support (i18n)"],
    icon: "Globe"
  },
  {
    title: "System Architecture & Security",
    description: "Designing maintainable enterprise systems using modern architectural patterns and best practices.",
    features: ["CQRS Pattern", "SOLID Principles", "Microservices Concepts", "Server-Side Validation"],
    icon: "Workflow"
  },
  {
    title: "Algorithmic Problem Solving",
    description: "Applying sharp algorithmic thinking and advanced data structures to solve complex logic challenges.",
    features: ["Competitive Programming", "Data Structures", "Algorithms", "Performance Optimization"],
    icon: "Zap"
  }
];
