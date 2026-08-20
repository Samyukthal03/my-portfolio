'use client';

import React, { useState } from 'react';
import CursorCat from '@/components/CursorCat';
import Atmosphere from '@/components/Atmosphere';
import DepthText from '@/components/DepthText';
import ExperienceAndWork from '@/components/ExperienceAndWork';
import CapabilitiesAndContact from '@/components/CapabilitiesAndContact';
import { 
  Menu, X, Mail, Phone, Github, Linkedin, 
  Award, Briefcase, Code, Sparkles 
} from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showExp, setShowExp] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showCerts, setShowCerts] = useState(true);
  const [showFoodCard, setShowFoodCard] = useState(false);

  return (
    <div className="editorial-shell relative min-h-screen selection:bg-[#E85D5D]/30">
      <Atmosphere />

      {/* OneKo Pixel Cat Cursor Follower */}
      <CursorCat />

      {/* Navigation Header */}
      <header className="editorial-nav sticky top-0 z-40 flex items-center justify-between border-b px-5 py-4 md:px-8">
        <a href="#about" className="leading-none" aria-label="Back to top">
          <span className="block text-sm font-bold tracking-[0.13em] text-[#F5F1EA] md:text-base">SAMYUKTHA A L</span>
          <span className="editorial-label mt-1 block text-[0.55rem] md:text-[0.625rem]">MCA · GENERATIVE AI</span>
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          data-menu-open={menuOpen}
          className="editorial-button inline-flex items-center gap-3 px-3 py-2"
        >
          <span className="text-sm">🐾 Menu</span>
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="editorial-menu fixed inset-0 z-30 flex min-h-screen flex-col justify-center px-6 pt-20 md:px-[10vw]" aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)} className="editorial-menu__link">01 / ABOUT</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="editorial-menu__link">02 / EXPERIENCE</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="editorial-menu__link">03 / SELECTED WORK</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="editorial-menu__link">04 / CAPABILITIES</a>
          <a href="#certs" onClick={() => setMenuOpen(false)} className="editorial-menu__link">05 / EDUCATION</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="editorial-menu__link">06 / CONTACT</a>
        </nav>
      )}

      {/* Hero Section */}
      <section id="about" className="relative mx-auto flex min-h-[calc(100svh-65px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-10">
        <p className="editorial-label mb-8 text-[#FF7373]">01 / AI · ML · FULL STACK · CREATIVE TECH</p>
        <DepthText text="ELEVATE" layers={34} depth={2.4} faceColor="#F5F1EA" depthColor="#E85D5D" tilt={7.5} pointerTracking smoothing={0.14} perspective={900} autoOrbit orbitSpeed={0.35} fontSize="clamp(3rem, 12vw, 7rem)" fontWeight={900} shadow />
        <div className="mt-14 grid max-w-5xl gap-8 md:ml-[21%] md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <p className="max-w-xl text-xl leading-snug tracking-tight text-[#F5F1EA] md:text-3xl">Building AI-powered and human-centered digital experiences where technology meets creativity.</p>
          <p className="editorial-label max-w-[15rem] leading-relaxed">MCA student in Generative AI, translating curiosity into useful, thoughtful technology.</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 md:ml-[21%]">
          <a href="#projects" className="editorial-button editorial-button--primary px-5 py-3">EXPLORE MY WORK <span aria-hidden="true">↘</span></a>
          <a href="#contact" className="editorial-button px-5 py-3">LET&apos;S TALK <span aria-hidden="true">↗</span></a>
        </div>
        <span className="editorial-label absolute bottom-7 right-6 hidden text-right leading-relaxed md:block md:right-10">SCROLL TO EXPLORE<br />↓</span>
      </section>

      <ExperienceAndWork />

      {/* Experience Section */}
      <section id="experience-legacy" className="hidden">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Briefcase className="text-cyan-400" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <button
            onClick={() => setShowExp(!showExp)}
            className="flex items-center gap-2 text-xs bg-purple-600/30 border border-purple-400/40 px-3 py-1.5 rounded-full hover:bg-purple-600/50 cursor-pointer"
          >
            🧶 <span>{showExp ? 'Play / Hide' : 'Toss Yarn to Reveal'}</span>
          </button>
        </div>

        {showExp && (
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="font-bold text-lg text-white">Full Stack Engineering Intern</h3>
                <span className="text-xs text-cyan-300 font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">Jan 2026 – Jul 2026[cite: 1]</span>
              </div>
              <p className="text-sm font-semibold text-slate-300 mb-2">Alpha Pixel Crafts[cite: 1]</p>
              <p className="text-slate-300 text-sm">Completed a 6-month full-stack engineering internship contributing to production-style application workflows and software delivery[cite: 1].</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="font-bold text-lg text-white">Data Intern (Content & Analytics)</h3>
                <span className="text-xs text-cyan-300 font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">Jan 2024 – May 2024[cite: 1]</span>
              </div>
              <p className="text-sm font-semibold text-slate-300 mb-2">Shiksha.com[cite: 1]</p>
              <p className="text-slate-300 text-sm">Curated and validated high-quality datasets, refining technical content to improve data accuracy[cite: 1].</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-1">
                <h3 className="font-bold text-lg text-white">Quality Committee Support Intern</h3>
                <span className="text-xs text-cyan-300 font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">Jan 2023 – Mar 2023[cite: 1]</span>
              </div>
              <p className="text-sm font-semibold text-slate-300 mb-2">IQAC — Bishop Heber College[cite: 1]</p>
              <p className="text-slate-300 text-sm">Executed data validation and rigorous quality audits, achieving 100% compliance with institutional standards[cite: 1].</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="font-bold text-lg text-white mb-1">English Teacher (Freelance & Voluntary)</h3>
              <p className="text-slate-300 text-sm">Taught local kids and classmates; conducted voluntary classes to teach underprivileged kids during high school and college[cite: 1].</p>
            </div>
          </div>
        )}
      </section>

      {/* Projects Section */}
      <section id="projects-legacy" className="hidden">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Code className="text-cyan-400" />
            <h2 className="text-2xl font-bold">Technical Projects</h2>
          </div>
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="flex items-center gap-2 text-xs bg-teal-600/30 border border-teal-400/40 px-3 py-1.5 rounded-full hover:bg-teal-600/50 cursor-pointer"
          >
            🧶 <span>{showProjects ? 'Play / Hide' : 'Toss Yarn to Reveal'}</span>
          </button>
        </div>

        {showProjects && (
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="font-bold text-lg text-white mb-1">Bird Species Sound Classifier</h3>
              <p className="text-xs text-teal-300 font-mono mb-3">Python • CNN • Xeno-canto API • Mel-Spectrogram[cite: 1]</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                End-to-end audio classification pipeline across 10 species[cite: 1]. Motivated by applied conservation research and published on GitHub[cite: 1].
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg text-white">Film Production Management</h3>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">In Progress[cite: 1]</span>
              </div>
              <p className="text-xs text-teal-300 font-mono mb-3">Next.js • Tailwind CSS • Supabase / PostgreSQL[cite: 1]</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Full-stack production platform handling crew scheduling, cast coordination, and resource allocation workflows[cite: 1].
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="font-bold text-lg text-white mb-1">E-Ration Website Project</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                User-friendly web platform designed for home delivery of essential goods, tailored specifically for senior citizen accessibility[cite: 1].
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="font-bold text-lg text-white mb-1">TechConnect: Bridging Generations</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Service-learning digital literacy project teaching senior citizens everyday digital navigation, smartphone skills, and online safety[cite: 1].
              </p>
            </div>
          </div>
        )}
      </section>

      <CapabilitiesAndContact />

      {/* Skills Section */}
      <section id="skills-legacy" className="hidden">
        <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
          <Sparkles className="text-cyan-400" />
          <h2 className="text-2xl font-bold">Skills & Competencies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="font-bold text-cyan-300 text-sm uppercase tracking-wider mb-3">Data & AI/ML</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Python, Pandas, SQL[cite: 1]</li>
              <li>• PyTorch, TensorFlow, scikit-learn[cite: 1]</li>
              <li>• CNNs, Supervised & Unsupervised[cite: 1]</li>
              <li>• Data Auditing & Feature Engineering[cite: 1]</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="font-bold text-cyan-300 text-sm uppercase tracking-wider mb-3">Tools & Development</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Next.js, React, Tailwind CSS[cite: 1]</li>
              <li>• Git / GitHub Workflows[cite: 1]</li>
              <li>• QA, Bug Reporting & Testing[cite: 1]</li>
              <li>• Technical Documentation[cite: 1]</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="font-bold text-cyan-300 text-sm uppercase tracking-wider mb-3">Languages & Values</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• English (Fluent), Tamil (Native)[cite: 1]</li>
              <li>• Cross-Cultural Communication (Model UN)[cite: 1]</li>
              <li>• Analytical Thinking & Empathy[cite: 1]</li>
              <li>• Team Collaboration & Accountability[cite: 1]</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Certifications, Education & Awards */}
      <section id="certs-legacy" className="hidden">
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
          <div className="flex items-center gap-3">
            <Award className="text-cyan-400" />
            <h2 className="text-2xl font-bold">Education, Certifications & Awards</h2>
          </div>
          <button
            onClick={() => setShowCerts(!showCerts)}
            className="flex items-center gap-2 text-xs bg-indigo-600/30 border border-indigo-400/40 px-3 py-1.5 rounded-full hover:bg-indigo-600/50 cursor-pointer"
          >
            🧶 <span>{showCerts ? 'Play / Hide' : 'Toss Yarn to Reveal'}</span>
          </button>
        </div>

        {showCerts && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-bold text-cyan-300 text-sm uppercase tracking-wider">Education</h3>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="font-bold text-white">MCA in Generative AI</h4>
                <p className="text-xs text-slate-300">SRM University • Expected May 2027[cite: 1]</p>
                <p className="text-cyan-300 text-xs font-semibold mt-1">CGPA: 9.8 (Semester 1)[cite: 1]</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <h4 className="font-bold text-white">B.Sc. Computer Science</h4>
                <p className="text-xs text-slate-300">Bishop Heber College • 2022 – 2025[cite: 1]</p>
                <p className="text-cyan-300 text-xs font-semibold mt-1">CGPA: 7.7[cite: 1]</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-cyan-300 text-sm uppercase tracking-wider">Certifications & Honors</h3>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 text-sm text-slate-300">
                <p>🎖️ <strong>Oracle Cloud 2025:</strong> Data Science Professional[cite: 1]</p>
                <p>🎖️ <strong>AWS & Forage:</strong> Solutions Architecture Job Simulation[cite: 1]</p>
                <p>🎖️ <strong>ISRO:</strong> LIDAR Data Processing & Applications[cite: 1]</p>
                <p>🎖️ <strong>United Nations University (UNU-IAS):</strong> Net Zero 101[cite: 1]</p>
                <p>🏆 <strong>Heber Model UN (2024):</strong> Special Mention & High Commendation[cite: 1]</p>
                <p>🏆 <strong>Google Cloud Gen AI Hackathon (2026):</strong> Career Advisor Prototype[cite: 1]</p>
                <p>🏆 <strong>SLGS-2025 Conference:</strong> Paper on Digital Literacy for Seniors[cite: 1]</p>
                <p>🏆 <strong>BOOTFEST 2K22:</strong> Certificate of Appreciation[cite: 1]</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Feed Cat / Hire Me Section */}
      <section id="contact-legacy" className="hidden">
        <button
          onClick={() => setShowFoodCard(!showFoodCard)}
          className="group inline-flex flex-col items-center justify-center p-8 rounded-3xl bg-amber-500/20 border-2 border-amber-400/40 hover:bg-amber-500/30 transition-all cursor-pointer shadow-lg hover:scale-105"
        >
          <span className="text-6xl mb-3 group-hover:rotate-12 transition-transform">🍲</span>
          <span className="text-lg font-bold text-amber-300">Feed Cat to Open Contact Details</span>
          <span className="text-xs text-amber-200/80 mt-1">(Click here!)</span>
        </button>

        {showFoodCard && (
          <div className="mt-8 p-6 rounded-2xl bg-slate-900/90 border border-white/20 backdrop-blur-xl text-left space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-bold text-xl text-center text-white">Let's Work Together!</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:samyukthanathan03@gmail.com" className="hover:text-white underline">samyukthanathan03@gmail.com[cite: 1]</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" />
                <span>+91 8072971820 (Tamil Nadu, India)[cite: 1]</span>
              </p>
              <p className="flex items-center gap-3">
                <Github size={16} className="text-cyan-400" />
                <a href="https://github.com/Samyukthal03" target="_blank" rel="noreferrer" className="hover:text-white underline">github.com/Samyukthal03[cite: 1]</a>
              </p>
              <p className="flex items-center gap-3">
                <Linkedin size={16} className="text-cyan-400" />
                <a href="https://www.linkedin.com/in/samyuktha-al-366052284/" target="_blank" rel="noreferrer" className="hover:text-white underline">linkedin.com/in/samyuktha-al-366052284/[cite: 1]</a>
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
