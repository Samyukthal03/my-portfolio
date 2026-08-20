import { ArrowUpRight } from 'lucide-react';

const experience = [
  {
    role: 'Full Stack Engineering Intern',
    company: 'Alpha Pixel Crafts',
    date: 'JAN 2026 — JUL 2026',
    description: 'Contributed to production-style application workflows and software delivery during a six-month engineering internship.',
  },
  {
    role: 'Data Intern — Content & Analytics',
    company: 'Shiksha.com',
    date: 'JAN 2024 — MAY 2024',
    description: 'Curated and validated high-quality datasets, refining technical content to improve data accuracy.',
  },
  {
    role: 'Quality Committee Support Intern',
    company: 'IQAC — Bishop Heber College',
    date: 'JAN 2023 — MAR 2023',
    description: 'Executed data validation and quality audits, achieving 100% compliance with institutional standards.',
  },
  {
    role: 'English Teacher',
    company: 'Freelance & Voluntary',
    date: 'COMMUNITY WORK',
    description: 'Taught local children and classmates, including voluntary classes for underprivileged learners.',
  },
];

const projects = [
  ['Bird Species Sound Classifier', 'An end-to-end audio classification pipeline across 10 bird species, motivated by applied conservation research.', 'PYTHON · CNN · AUDIO ML'],
  ['Film Production Management', 'A full-stack production platform for crew scheduling, cast coordination, and resource allocation.', 'NEXT.JS · SUPABASE · POSTGRESQL'],
  ['E-Ration Website', 'A user-friendly essentials-delivery platform designed with senior citizen accessibility in mind.', 'ACCESSIBILITY · WEB DEVELOPMENT'],
  ['TechConnect: Bridging Generations', 'A service-learning project teaching senior citizens everyday digital navigation, smartphone skills, and online safety.', 'DIGITAL LITERACY · WEB'],
];

function SectionHeading({ number, title }: { number: string; title: string }) {
  return <div className="editorial-section-heading"><span>{number}</span><h2>{title}</h2></div>;
}

export default function ExperienceAndWork() {
  return (
    <>
      <section id="experience" className="editorial-section mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionHeading number="02" title="EXPERIENCE" />
        <div className="mt-10 border-t border-[var(--line)]">
          {experience.map((item, index) => (
            <article className="editorial-row group grid gap-4 py-7 md:grid-cols-[5rem_minmax(0,1.2fr)_minmax(0,0.7fr)_2rem] md:items-start md:gap-7" key={item.role}>
              <span className="editorial-row__number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{item.role}</h3><p className="editorial-row__company">{item.company}</p></div>
              <div><p className="editorial-row__date">{item.date}</p><p className="editorial-row__description">{item.description}</p></div>
              <ArrowUpRight aria-hidden="true" className="editorial-row__arrow" size={19} />
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="editorial-section mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <SectionHeading number="03" title="SELECTED WORK" />

        <a className="planktons-feature group mt-10 grid overflow-hidden border border-[rgba(245,241,234,0.18)] md:grid-cols-[1.15fr_0.85fr]" href="https://www.theplanktonsmusic.com/" target="_blank" rel="noreferrer" aria-label="View ThePlanktons website">
          <div className="planktons-preview relative min-h-[25rem] overflow-hidden p-7 md:min-h-[34rem] md:p-10" aria-hidden="true">
            <div className="planktons-light planktons-light--one" /><div className="planktons-light planktons-light--two" />
            <div className="planktons-particles" />
            <div className="planktons-waterline" />
            <div className="planktons-fish planktons-fish--one">⌁</div><div className="planktons-fish planktons-fish--two">⌁</div>
            <div className="planktons-seabed" /><span className="planktons-depth">SURFACE&nbsp;&nbsp;↓&nbsp;&nbsp;SEABED</span>
          </div>
          <div className="flex flex-col justify-between bg-[#0b0b0b] p-7 md:p-10">
            <div>
              <p className="editorial-label text-[#FF7373]">FREELANCE · MUSIC · INTERACTIVE WEB · HTML / CSS</p>
              <h3 className="mt-8 text-4xl font-semibold tracking-[-0.06em] text-[#F5F1EA] md:text-6xl">THEPLANKTONS</h3>
              <p className="mt-4 max-w-md text-xl leading-tight text-[#F5F1EA] md:text-2xl">Interactive underwater experience for a music band.</p>
              <p className="mt-9 max-w-md text-[var(--muted)] leading-relaxed">An immersive underwater website created for ThePlanktons, designed around a continuous scroll-driven journey from the ocean surface to the seabed.</p>
            </div>
            <span className="planktons-link mt-12 inline-flex items-center gap-3 font-mono text-xs tracking-[0.1em] text-[#F5F1EA]">VIEW LIVE <ArrowUpRight size={18} /></span>
          </div>
        </a>

        <div className="mt-20 border-t border-[var(--line)]">
          {projects.map(([title, description, technology], index) => (
            <article className="editorial-row group grid gap-4 py-7 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,0.68fr)_2rem] md:items-start md:gap-7" key={title}>
              <span className="editorial-row__number">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p className="editorial-row__description mt-3">{description}</p></div>
              <p className="editorial-row__date">{technology}</p>
              <ArrowUpRight aria-hidden="true" className="editorial-row__arrow" size={19} />
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
