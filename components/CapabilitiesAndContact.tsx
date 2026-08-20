'use client';

import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const capabilityGroups = [
  ['DATA & AI / ML', 'Python, Pandas, SQL, PyTorch, TensorFlow, scikit-learn, CNNs, supervised and unsupervised learning, data auditing, feature engineering.'],
  ['TOOLS & DEVELOPMENT', 'Next.js, React, Tailwind CSS, Git, GitHub, testing, QA, bug reporting, and technical documentation.'],
  ['LANGUAGES & HUMAN SKILLS', 'English, Tamil, analytical thinking, empathy, cross-cultural communication, teamwork, and accountability.'],
];

export default function CapabilitiesAndContact() {
  const [contactOpen, setContactOpen] = useState(false);

  return <>
    <section id="skills" className="editorial-section mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="editorial-section-heading"><span>04</span><h2>CAPABILITIES</h2></div>
      <div className="mt-12 grid border-t border-[var(--line)] md:grid-cols-3">
        {capabilityGroups.map(([title, content], index) => <article key={title} className="capability-column py-8 md:px-7 md:first:pl-0 md:last:pr-0">
          <span className="editorial-label text-[#FF7373]">0{index + 1}</span>
          <h3 className="mt-5 text-lg font-medium tracking-[-0.035em] text-[#F5F1EA]">{title}</h3>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--muted)]">{content}</p>
        </article>)}
      </div>
    </section>

    <section id="certs" className="editorial-section mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="editorial-section-heading"><span>05</span><h2>EDUCATION & RECOGNITION</h2></div>
      <div className="mt-12 grid gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <p className="editorial-label text-[#FF7373]">EDUCATION</p>
          <div className="mt-5 border-t border-[var(--line)]">
            <article className="education-row"><div><h3>MCA in Generative AI</h3><p>SRM University</p></div><span>EXPECTED MAY 2027<br />CGPA 9.8 · SEM 1</span></article>
            <article className="education-row"><div><h3>B.Sc. Computer Science</h3><p>Bishop Heber College</p></div><span>2022 — 2025<br />CGPA 7.7</span></article>
          </div>
        </div>
        <div>
          <p className="editorial-label text-[#FF7373]">CERTIFICATIONS & AWARDS</p>
          <ul className="recognition-list mt-5 border-t border-[var(--line)]">
            <li><span>01</span>Oracle Cloud 2025 — Data Science Professional</li>
            <li><span>02</span>AWS & Forage — Solutions Architecture Job Simulation</li>
            <li><span>03</span>ISRO — LIDAR Data Processing & Applications</li>
            <li><span>04</span>Google Cloud Gen AI Hackathon 2026 — Career Advisor Prototype</li>
            <li><span>05</span>Heber Model UN 2024 — Special Mention & High Commendation</li>
            <li><span>06</span>SLGS-2025 — Paper on Digital Literacy for Seniors</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="contact" className="contact-section mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-36">
      <p className="editorial-label text-[#FF7373]">06 / CONTACT</p>
      <div className="mt-8 border-y border-[var(--line)] py-10 md:py-14">
        <h2 className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.075em] text-[#F5F1EA] md:text-8xl">LET&apos;S BUILD SOMETHING<br />WORTH REMEMBERING.</h2>
        <div className="mt-12 flex flex-wrap items-center gap-5 md:mt-16">
          <a className="contact-link" href="mailto:samyukthanathan03@gmail.com"><Mail size={17} /> EMAIL <ArrowUpRight size={16} /></a>
          <button type="button" aria-expanded={contactOpen} onClick={() => setContactOpen(!contactOpen)} className="feed-cat-button">{contactOpen ? 'CAT IS FED — CLOSE DETAILS' : 'FEED CAT FOR CONTACT DETAILS'} <span aria-hidden="true">◌</span></button>
        </div>
        {contactOpen && <div className="contact-details mt-10 grid gap-5 border-t border-[var(--line)] pt-7 md:grid-cols-2">
          <a href="mailto:samyukthanathan03@gmail.com"><Mail size={16} /><span>EMAIL</span><strong>samyukthanathan03@gmail.com</strong></a>
          <a href="tel:+918072971820"><Phone size={16} /><span>PHONE</span><strong>+91 8072971820</strong></a>
          <a href="https://github.com/Samyukthal03" target="_blank" rel="noreferrer"><Github size={16} /><span>GITHUB</span><strong>github.com/Samyukthal03</strong></a>
          <a href="https://www.linkedin.com/in/samyuktha-al-366052284/" target="_blank" rel="noreferrer"><Linkedin size={16} /><span>LINKEDIN</span><strong>linkedin.com/in/samyuktha-al-366052284</strong></a>
        </div>}
      </div>
    </section>
  </>;
}
