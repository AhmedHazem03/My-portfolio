import { useMemo, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  CheckCircle,
  ChevronRight,
  Code,
  Component,
  Database,
  Download,
  ExternalLink,
  FileText,
  Files,
  Github,
  Layers,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Search,
  Server,
  Shield,
  Terminal,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import Hero3D from './components/Hero3D';
import {
  ACHIEVEMENTS,
  CERTIFICATIONS,
  EDUCATION,
  LANGUAGES,
  PERSONAL_INFO,
  PROJECTS,
  SERVICES,
  SKILLS,
  VOLUNTEERING,
  WORK_EXPERIENCE,
} from './constants';
import { Project } from './types';

type Tab = 'Overview' | 'Projects' | 'Experience' | 'Expertise' | 'Resume';

const tabs: Array<{ id: Tab; icon: typeof Files }> = [
  { id: 'Overview', icon: Files },
  { id: 'Projects', icon: Briefcase },
  { id: 'Experience', icon: Workflow },
  { id: 'Expertise', icon: Component },
  { id: 'Resume', icon: FileText },
];

const serviceIcons: Record<string, typeof Server> = {
  Server,
  Database,
  Workflow,
  Zap,
  Shield,
};

function SectionHeading({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: typeof Workflow;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
        <Icon size={15} /> {eyebrow}
      </div>
      <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <p className="mt-2 max-w-3xl leading-7 text-slate-400">{description}</p>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end bg-slate-950/80 p-0 backdrop-blur-sm md:items-center md:justify-center md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-slate-700 bg-[#111827] shadow-2xl md:max-w-3xl md:rounded-2xl"
          initial={{ y: 26, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 26, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 flex items-start justify-between border-b border-slate-700 bg-[#111827]/95 p-5 backdrop-blur">
            <div>
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-xs font-medium text-sky-200">
                {project.type}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{project.period}</p>
            </div>
            <button
              aria-label="Close project details"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-5 md:p-7">
            <p className="leading-8 text-slate-300">{project.description}</p>
            <div className="mt-7">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Key technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                View project <ExternalLink size={16} />
              </a>
            )}
          </div>
        </motion.article>
      </motion.div>
    </AnimatePresence>
  );
}

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return PROJECTS;

    return PROJECTS.filter((project) =>
      [project.title, project.description, project.type, ...project.techStack]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    );
  }, [query]);

  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/65 p-6 shadow-2xl md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <Hero3D />
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
              <CheckCircle size={14} /> Available for freelance and contract work
            </div>
            <p className="font-mono text-sm text-sky-300">// Full-stack software engineering</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
              Systems that make business operations clearer, faster, and easier to manage.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              {PERSONAL_INFO.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => switchTab('Projects')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                Explore production work <ExternalLink size={16} />
              </button>
              <button
                onClick={() => switchTab('Resume')}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-900/80 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-800"
              >
                <FileText size={16} /> View resume
              </button>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-xs grid-cols-2 gap-3 lg:max-w-none">
            <div className="rounded-xl border border-slate-700 bg-slate-950/55 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="mt-1 text-xs leading-5 text-slate-400">Highlighted production projects</div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/55 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">Web + Mobile</div>
              <div className="mt-1 text-xs leading-5 text-slate-400">Connected customer and operations workflows</div>
            </div>
            <div className="col-span-2 rounded-xl border border-slate-700 bg-slate-950/55 p-4 backdrop-blur">
              <div className="font-mono text-xs text-sky-300">Core stack</div>
              <div className="mt-2 text-sm font-semibold text-slate-200">
                ASP.NET Core · Next.js · TypeScript · Supabase/PostgreSQL · Flutter
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ['Business systems', 'Workflows, approvals, operational visibility, and team collaboration.', Workflow],
          ['Commerce experiences', 'Premium responsive storefronts and practical customer journeys.', Zap],
          ['Reliable foundations', 'Secure data access, role boundaries, integrations, and real-time workflows.', Shield],
        ].map(([title, description, Icon]) => {
          const CardIcon = Icon as typeof Workflow;
          return (
            <div key={title as string} className="rounded-xl border border-slate-700 bg-slate-900/70 p-5">
              <CardIcon className="text-sky-300" size={21} />
              <h3 className="mt-4 font-bold text-white">{title as string}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description as string}</p>
            </div>
          );
        })}
      </section>
    </div>
  );

  const renderProjects = () => (
    <div>
      <SectionHeading
        icon={Briefcase}
        eyebrow="Selected work"
        title="Production projects with real operational context"
        description="A focused selection of systems and products built around workflows, customer journeys, reporting, delivery operations, and maintainable foundations."
      />

      <div className="relative mb-6 max-w-xl">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects, technology, or capability"
          className="w-full rounded-lg border border-slate-700 bg-slate-900 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-500"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.button
            key={project.title}
            type="button"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group flex min-h-[280px] flex-col rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-left transition hover:-translate-y-1 hover:border-sky-400/70 hover:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-200">
                {project.type}
              </span>
              <ChevronRight className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-300" size={19} />
            </div>
            <h3 className="mt-5 text-lg font-bold leading-7 text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{project.period}</p>
            <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-400">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-md bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="rounded-lg border border-dashed border-slate-700 p-8 text-center text-slate-400">
          No projects match “{query}”.
        </p>
      )}
    </div>
  );

  const renderExperience = () => (
    <div>
      <SectionHeading
        icon={Workflow}
        eyebrow="Career timeline"
        title="Building from backend foundations to complete products"
        description="Experience across production web products, delivery operations, business tooling, and student technical leadership."
      />

      <div className="relative ml-2 border-l border-slate-700 pl-6 md:ml-5 md:pl-8">
        {[...WORK_EXPERIENCE, ...EDUCATION, ...CERTIFICATIONS, ...VOLUNTEERING, ...ACHIEVEMENTS].map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="relative mb-6 rounded-xl border border-slate-700 bg-slate-900/75 p-5"
          >
            <div className="absolute -left-[33px] top-6 h-3.5 w-3.5 rounded-full border-4 border-[#0B1120] bg-sky-400 md:-left-[41px]" />
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold text-sky-300">{item.role}</p>
                <h3 className="mt-1 text-lg font-bold text-white">{item.company}</h3>
              </div>
              <span className="w-fit rounded bg-slate-800 px-2 py-1 font-mono text-xs text-slate-400">{item.period}</span>
            </div>
            {item.description && (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
                {item.description.map((description) => (
                  <li key={description} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    {description}
                  </li>
                ))}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200"
              >
                View credential <ExternalLink size={14} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );

  const renderExpertise = () => (
    <div>
      <SectionHeading
        icon={Component}
        eyebrow="Capabilities"
        title="What I build and how I approach it"
        description="The work is centered on useful outcomes: clearer operations, responsive customer experiences, secure data access, and systems people can actually run day to day."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, index) => {
          const Icon = serviceIcons[service.icon] ?? Code;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl border border-slate-700 bg-slate-900/75 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10 text-sky-300">
                <Icon size={21} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2 min-h-14 text-sm leading-6 text-slate-400">{service.description}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-700 pt-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle size={14} className="shrink-0 text-emerald-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>

      <section className="mt-8 rounded-xl border border-slate-700 bg-slate-900/75 p-6">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          <Terminal size={19} className="text-sky-300" /> Technical stack
        </h3>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {SKILLS.map((group) => (
            <div key={group.name}>
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300">{group.name}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-sm text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderResume = () => (
    <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl md:p-11">
      <header className="border-b-2 border-slate-900 pb-5">
        <h2 className="text-3xl font-bold tracking-tight">{PERSONAL_INFO.name}</h2>
        <p className="mt-1 text-lg font-semibold">{PERSONAL_INFO.title}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          <span>{PERSONAL_INFO.location}</span>
          <span>•</span>
          <a href={PERSONAL_INFO.email} className="hover:underline">{PERSONAL_INFO.email.replace('mailto:', '')}</a>
          <span>•</span>
          <span>{PERSONAL_INFO.phone}</span>
        </div>
      </header>

      <section className="mt-7">
        <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Professional Summary</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700">{PERSONAL_INFO.summary}</p>
      </section>

      <section className="mt-7">
        <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Work Experience</h3>
        {WORK_EXPERIENCE.map((work) => (
          <div key={work.company} className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <div>
                <p className="font-bold">{work.role}</p>
                <p className="text-sm italic text-slate-600">{work.company}</p>
              </div>
              <p className="text-sm text-slate-600">{work.period}</p>
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
              {work.description?.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-7">
        <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Selected Projects</h3>
        {PROJECTS.map((project) => (
          <div key={project.title} className="mt-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <p className="font-bold">{project.title}</p>
              <p className="text-sm text-slate-600">{project.period}</p>
            </div>
            <p className="mt-1 text-sm leading-6 text-slate-700">{project.description}</p>
            <p className="mt-1 text-sm"><span className="font-semibold">Tech:</span> {project.techStack.join(', ')}</p>
          </div>
        ))}
      </section>

      <section className="mt-7 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Education</h3>
          {EDUCATION.map((education) => (
            <div key={education.company} className="mt-3 text-sm">
              <p className="font-bold">{education.role}</p>
              <p>{education.company}</p>
              <p className="text-slate-600">{education.period}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Languages</h3>
          {LANGUAGES.map((language) => (
            <p key={language.language} className="mt-3 text-sm"><span className="font-bold">{language.language}:</span> {language.level}</p>
          ))}
        </div>
      </section>

      <section className="mt-7">
        <h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Skills</h3>
        <div className="mt-3 grid gap-2 text-sm">
          {SKILLS.map((group) => <p key={group.name}><span className="font-bold">{group.name}:</span> {group.skills.join(', ')}</p>)}
        </div>
      </section>

      <div className="mt-8 flex justify-end">
        <a
          href={PERSONAL_INFO.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
        >
          <Download size={15} /> Connect on LinkedIn
        </a>
      </div>
    </article>
  );

  const content: Record<Tab, ReactNode> = {
    Overview: renderOverview(),
    Projects: renderProjects(),
    Experience: renderExperience(),
    Expertise: renderExpertise(),
    Resume: renderResume(),
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0B1120]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button onClick={() => switchTab('Overview')} className="flex items-center gap-2 text-left">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-600 font-mono font-bold text-white">&gt;_</span>
            <span>
              <span className="block text-sm font-bold text-white">Ahmed Hazem</span>
              <span className="block text-[11px] text-slate-500">Full-Stack Software Engineer</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {tabs.map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => switchTab(id)}
                className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition ${activeTab === id ? 'bg-slate-800 text-white' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`}
              >
                <Icon size={15} />
                {id}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"><Github size={18} /></a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"><Linkedin size={18} /></a>
            <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"><MessageCircle size={18} /></a>
          </div>

          <button aria-label="Open navigation" onClick={() => setMenuOpen((open) => !open)} className="rounded-md p-2 text-slate-300 hover:bg-slate-800 lg:hidden">
            <Menu size={21} />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-800 lg:hidden">
              <div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">
                {tabs.map(({ id, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => switchTab(id)}
                    className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm ${activeTab === id ? 'bg-slate-800 text-white' : 'text-slate-400'}`}
                  >
                    <Icon size={16} />
                    {id}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-10">
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>
            {content[activeTab]}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <span>Built by Ahmed Hazem — focused on practical software for real operations.</span>
          <div className="flex flex-wrap gap-3">
            <span>{PERSONAL_INFO.location}</span>
            <a href={PERSONAL_INFO.email} className="inline-flex items-center gap-1 hover:text-slate-300"><Mail size={13} /> Email</a>
            <a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-slate-300"><Phone size={13} /> WhatsApp</a>
          </div>
        </div>
      </footer>

      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
