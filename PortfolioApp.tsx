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

const aiTools = [
  {
    name: 'OpenAI Codex',
    use: 'Scoped implementation, refactoring, repository exploration, and debugging support.',
  },
  {
    name: 'Claude',
    use: 'Architecture discussion, requirement analysis, code review, and technical writing.',
  },
  {
    name: 'GitHub Copilot',
    use: 'In-editor assistance for repetitive code, focused tests, and documentation.',
  },
  {
    name: 'ChatGPT',
    use: 'Research synthesis, edge-case thinking, and clearer technical communication.',
  },
];

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
    <div className="mb-7 md:mb-9">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
        <Icon size={15} /> {eyebrow}
      </div>
      <h2 className="max-w-4xl text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-300">{description}</p>
    </div>
  );
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-end bg-slate-950/85 p-0 backdrop-blur-sm md:items-center md:justify-center md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-slate-700 bg-[#111827] shadow-2xl md:max-w-3xl md:rounded-2xl"
          initial={{ y: 26, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 26, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="sticky top-0 flex items-start justify-between border-b border-slate-700 bg-[#111827]/95 p-5 backdrop-blur md:p-6">
            <div>
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-2.5 py-1 text-xs font-medium text-sky-100">
                {project.type}
              </span>
              <h3 className="mt-3 text-xl font-bold text-white md:text-2xl">{project.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{project.period}</p>
            </div>
            <button
              aria-label="Close project details"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X size={20} />
            </button>
          </div>
          <div className="p-5 md:p-7">
            <p className="leading-8 text-slate-200">{project.description}</p>
            <div className="mt-7">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Key technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1.5 font-mono text-xs text-slate-200">
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
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
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
    <div className="space-y-8 md:space-y-10">
      <section className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl md:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <Hero3D />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0B1120]/95 via-[#0B1120]/85 to-[#0B1120]/55" />

        <div className="relative z-10 grid gap-9 lg:grid-cols-[1.5fr_0.5fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
              <CheckCircle size={14} /> Open to full-time, contract, and freelance opportunities
            </div>
            <p className="font-mono text-sm text-sky-300">// Full-stack software engineering</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Full-Stack Engineer for business systems, dashboards, and e-commerce.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">{PERSONAL_INFO.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => switchTab('Projects')}
                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]"
              >
                Explore production work <ExternalLink size={16} />
              </button>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-500 bg-slate-950/45 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                <Linkedin size={16} /> LinkedIn profile
              </a>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-sm grid-cols-2 gap-3 lg:max-w-none">
            <div className="rounded-xl border border-slate-600/80 bg-slate-950/70 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="mt-1 text-xs leading-5 text-slate-300">Highlighted production projects</div>
            </div>
            <div className="rounded-xl border border-slate-600/80 bg-slate-950/70 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">Web + Mobile</div>
              <div className="mt-1 text-xs leading-5 text-slate-300">Connected customer and operations workflows</div>
            </div>
            <div className="col-span-2 rounded-xl border border-slate-600/80 bg-slate-950/70 p-4 backdrop-blur">
              <div className="font-mono text-xs text-sky-300">Core stack</div>
              <div className="mt-2 text-sm font-semibold leading-6 text-slate-100">
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
            <article key={title as string} className="rounded-xl border border-slate-700 bg-slate-900/75 p-5">
              <CardIcon className="text-sky-300" size={21} />
              <h2 className="mt-4 font-bold text-white">{title as string}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{description as string}</p>
            </article>
          );
        })}
      </section>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/75 p-6 md:p-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">Proof of work</p>
            <h2 className="mt-2 text-xl font-bold text-white">Recent systems, not just concepts.</h2>
          </div>
          <button onClick={() => switchTab('Projects')} className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
            See all work <ChevronRight size={16} />
          </button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {PROJECTS.slice(0, 3).map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="rounded-lg border border-slate-700 bg-slate-950/55 p-4 text-left transition hover:border-sky-400/70 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <p className="text-xs font-semibold text-sky-300">{project.type}</p>
              <h3 className="mt-2 text-sm font-bold leading-6 text-white">{project.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">{project.techStack.slice(0, 3).join(' · ')}</p>
            </button>
          ))}
        </div>
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
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects, technology, or capability"
          className="w-full rounded-lg border border-slate-600 bg-slate-900 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
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
            className="group flex min-h-[292px] flex-col rounded-xl border border-slate-700 bg-slate-900/80 p-5 text-left transition hover:-translate-y-1 hover:border-sky-400/70 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-semibold text-sky-100">{project.type}</span>
              <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-sky-300" size={19} />
            </div>
            <h3 className="mt-5 text-lg font-bold leading-7 text-white">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{project.period}</p>
            <p className="mt-4 line-clamp-4 text-sm leading-6 text-slate-300">{project.description}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {project.techStack.slice(0, 4).map((tech) => (
                <span key={tech} className="rounded-md border border-slate-700 bg-slate-950 px-2 py-1 font-mono text-[11px] text-slate-200">{tech}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="rounded-lg border border-dashed border-slate-600 p-8 text-center text-slate-300">No projects match “{query}”.</p>
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
              <span className="w-fit rounded bg-slate-950 px-2 py-1 font-mono text-xs text-slate-300">{item.period}</span>
            </div>
            {item.description && (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {item.description.map((description) => (
                  <li key={description} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />{description}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <a href={item.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sky-300 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                View credential <ExternalLink size={14} />
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );

  const renderExpertise = () => {
    const coreSkillGroups = SKILLS.filter((group) => group.name !== 'AI-Assisted Engineering');
    const aiSkillGroup = SKILLS.find((group) => group.name === 'AI-Assisted Engineering');

    return (
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
              <motion.article key={service.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="rounded-xl border border-slate-700 bg-slate-900/75 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-400/10 text-sky-300"><Icon size={21} /></div>
                <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 min-h-14 text-sm leading-6 text-slate-300">{service.description}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-700 pt-4">
                  {service.features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-slate-200"><CheckCircle size={14} className="shrink-0 text-emerald-300" />{feature}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <section className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/75 p-6 md:p-7">
          <h3 className="flex items-center gap-2 text-lg font-bold text-white"><Terminal size={19} className="text-sky-300" /> Technical stack</h3>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {coreSkillGroups.map((group) => (
              <div key={group.name}>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-sky-300">{group.name}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-md border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-sm text-slate-200">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-sky-400/25 bg-gradient-to-br from-sky-400/10 to-slate-900/80 p-6 md:p-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-sky-200">AI-assisted engineering</p>
              <h3 className="mt-2 text-xl font-bold text-white">AI tools, used with engineering guardrails.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">I use AI to speed up focused work—not to replace engineering judgment. Requirements, architecture, security boundaries, code review, tests, and final delivery remain my responsibility.</p>
            </div>
            <div className="rounded-lg border border-sky-300/20 bg-slate-950/50 px-4 py-3 text-sm text-sky-100">
              {aiSkillGroup?.skills.slice(0, 4).join(' · ')}
            </div>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {aiTools.map((tool) => (
              <article key={tool.name} className="rounded-xl border border-slate-600/80 bg-slate-950/55 p-4">
                <h4 className="font-semibold text-white">{tool.name}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-300">{tool.use}</p>
              </article>
            ))}
          </div>
          <div className="mt-5 grid gap-3 border-t border-sky-300/15 pt-5 text-sm text-slate-200 md:grid-cols-3">
            <p><span className="font-semibold text-white">1.</span> Define the problem and constraints before generation.</p>
            <p><span className="font-semibold text-white">2.</span> Validate outputs with types, tests, manual review, and production checks.</p>
            <p><span className="font-semibold text-white">3.</span> Keep secrets, customer data, and security decisions under explicit control.</p>
          </div>
        </section>
      </div>
    );
  };

  const renderResume = () => (
    <article className="rounded-2xl bg-white p-6 text-slate-900 shadow-2xl md:p-11">
      <header className="border-b-2 border-slate-900 pb-5">
        <h2 className="text-3xl font-bold tracking-tight">{PERSONAL_INFO.name}</h2>
        <p className="mt-1 text-lg font-semibold">{PERSONAL_INFO.title}</p>
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-600">
          <span>{PERSONAL_INFO.location}</span><span>•</span><a href={PERSONAL_INFO.email} className="hover:underline">{PERSONAL_INFO.email.replace('mailto:', '')}</a><span>•</span><span>{PERSONAL_INFO.phone}</span>
        </div>
      </header>

      <section className="mt-7"><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Professional Summary</h3><p className="mt-3 text-sm leading-7 text-slate-700">{PERSONAL_INFO.summary}</p></section>
      <section className="mt-7"><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Work Experience</h3>{WORK_EXPERIENCE.map((work) => <div key={work.company} className="mt-4"><div className="flex flex-col justify-between gap-1 sm:flex-row"><div><p className="font-bold">{work.role}</p><p className="text-sm italic text-slate-600">{work.company}</p></div><p className="text-sm text-slate-600">{work.period}</p></div><ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">{work.description?.map((line) => <li key={line}>{line}</li>)}</ul></div>)}</section>
      <section className="mt-7"><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Selected Projects</h3>{PROJECTS.map((project) => <div key={project.title} className="mt-4"><div className="flex flex-col justify-between gap-1 sm:flex-row"><p className="font-bold">{project.title}</p><p className="text-sm text-slate-600">{project.period}</p></div><p className="mt-1 text-sm leading-6 text-slate-700">{project.description}</p><p className="mt-1 text-sm"><span className="font-semibold">Tech:</span> {project.techStack.join(', ')}</p></div>)}</section>
      <section className="mt-7 grid gap-6 md:grid-cols-2"><div><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Education</h3>{EDUCATION.map((education) => <div key={education.company} className="mt-3 text-sm"><p className="font-bold">{education.role}</p><p>{education.company}</p><p className="text-slate-600">{education.period}</p></div>)}</div><div><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Languages</h3>{LANGUAGES.map((language) => <p key={language.language} className="mt-3 text-sm"><span className="font-bold">{language.language}:</span> {language.level}</p>)}</div></section>
      <section className="mt-7"><h3 className="border-b border-slate-300 pb-1 text-sm font-bold uppercase tracking-wider">Skills</h3><div className="mt-3 grid gap-2 text-sm">{SKILLS.map((group) => <p key={group.name}><span className="font-bold">{group.name}:</span> {group.skills.join(', ')}</p>)}</div></section>
      <div className="mt-8 flex justify-end"><a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"><Download size={15} /> Connect on LinkedIn</a></div>
    </article>
  );

  const content: Record<Tab, ReactNode> = { Overview: renderOverview(), Projects: renderProjects(), Experience: renderExperience(), Expertise: renderExpertise(), Resume: renderResume() };

  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#0B1120]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
          <button onClick={() => switchTab('Overview')} className="flex items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-sky-600 font-mono font-bold text-white">&gt;_</span>
            <span><span className="block text-sm font-bold text-white">Ahmed Hazem</span><span className="block text-[11px] text-slate-300">Full-Stack Software Engineer</span></span>
          </button>
          <nav className="hidden items-center gap-1 lg:flex">
            {tabs.map(({ id, icon: Icon }) => <button key={id} onClick={() => switchTab(id)} className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${activeTab === id ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-900 hover:text-white'}`}><Icon size={15} />{id}</button>)}
          </nav>
          <div className="hidden items-center gap-2 md:flex"><a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><Github size={18} /></a><a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><Linkedin size={18} /></a><a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="rounded-md p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"><MessageCircle size={18} /></a></div>
          <button aria-label="Open navigation" onClick={() => setMenuOpen((open) => !open)} className="rounded-md p-2 text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 lg:hidden"><Menu size={21} /></button>
        </div>
        <AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-slate-800 lg:hidden"><div className="mx-auto grid max-w-7xl gap-1 px-4 py-3">{tabs.map(({ id, icon: Icon }) => <button key={id} onClick={() => switchTab(id)} className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${activeTab === id ? 'bg-slate-800 text-white' : 'text-slate-300'}`}><Icon size={16} />{id}</button>)}</div></motion.div>}</AnimatePresence>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-10"><AnimatePresence mode="wait"><motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}>{content[activeTab]}</motion.div></AnimatePresence></main>
      <footer className="border-t border-slate-800"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-300 md:flex-row md:items-center md:justify-between md:px-6"><span>Built by Ahmed Hazem — focused on practical software for real operations.</span><div className="flex flex-wrap gap-3"><span>{PERSONAL_INFO.location}</span><a href={PERSONAL_INFO.email} className="inline-flex items-center gap-1 hover:text-white"><Mail size={13} /> Email</a><a href={PERSONAL_INFO.socials.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-white"><Phone size={13} /> WhatsApp</a></div></div></footer>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
