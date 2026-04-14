"use client";

import Reveal from "./ui/Reveal";

const LOGOS = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Solidity", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", invert: true },
  { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Figma", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export default function TechLogos() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="text-[12px] tracking-[4px] uppercase text-neon-cyan font-mono">Technologies</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-extrabold leading-[1.12] tracking-tight mb-4">
            Our Tech Stack
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[14px] text-white/30 mb-12 max-w-[480px] font-light leading-[1.75]">
            We use industry-leading technologies to build fast, secure, and scalable applications. Every tool is chosen for the job, not the trend.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {LOGOS.map(({ name, url, invert }) => (
              <div
                key={name}
                className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:border-neon-violet/20 hover:bg-white/[0.03] transition-all duration-300"
              >
                <img
                  src={url}
                  alt={name}
                  className={`w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300 ${
                    invert ? "invert brightness-200" : ""
                  }`}
                  loading="lazy"
                />
                <span className="text-[10px] text-white/30 font-mono tracking-wide text-center group-hover:text-white/50 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
