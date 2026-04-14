"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Terminal, Eye } from "lucide-react";
import Image from "next/image";
import ProjectGallery from "./ProjectGallery";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [archOpen, setArchOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const previewScreens = project.screens.slice(0, 4);

  return (
    <>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.9,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="rounded-[20px] bg-white/[0.015] border border-white/[0.05] overflow-hidden transition-colors duration-500 group"
        style={{
          borderColor: hovered ? `${project.color}30` : undefined,
        }}
      >
        {/* ─── Header ─── */}
        <div className="p-8 pb-0">
          {/* Tags + arrow */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-2 flex-wrap">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wide"
                  style={{
                    color: project.color,
                    border: `1px solid ${project.color}25`,
                    background: `${project.color}08`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.div
              animate={{ rotate: hovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={20} style={{ color: project.color }} />
            </motion.div>
          </div>

          {/* Title */}
          <div className="flex items-baseline gap-3 mb-1">
            <h3 className="font-display text-[28px] font-extrabold">{project.title}</h3>
            <span className="text-[13px] text-white/20 font-mono">{project.year}</span>
          </div>
          <p className="text-[15px] text-white/35 font-normal mb-4">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-[14px] text-white/50 leading-[1.75] mb-5 max-w-[720px]">
            {project.description}
          </p>

          {/* Challenge callout */}
          <div
            className="rounded-xl p-4 mb-5 border"
            style={{
              background: `${project.color}06`,
              borderColor: `${project.color}12`,
            }}
          >
            <div
              className="text-[11px] font-mono tracking-[1.5px] uppercase mb-2 flex items-center gap-2"
              style={{ color: project.color }}
            >
              <Terminal size={13} />
              Core Challenge
            </div>
            <p className="text-[13px] text-white/45 leading-[1.7]">
              {project.challenge}
            </p>
          </div>

          {/* Architecture toggle */}
          <button
            onClick={() => setArchOpen(!archOpen)}
            className="text-[12px] font-mono text-white/30 hover:text-white/60 transition-colors mb-4 flex items-center gap-2"
          >
            <Terminal size={12} />
            {archOpen ? "Hide" : "Show"} Technical Architecture
            <span className="text-[10px]">{archOpen ? "▲" : "▼"}</span>
          </button>

          {/* Architecture details */}
          <motion.div
            initial={false}
            animate={{ height: archOpen ? "auto" : 0, opacity: archOpen ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="bg-black/30 rounded-xl p-5 mb-5 border border-white/[0.04]">
              <ul className="space-y-3">
                {project.architecture.map((item, i) => (
                  <li
                    key={i}
                    className="text-[12px] font-mono text-white/40 leading-[1.8] pl-4 relative before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:rounded-full"
                    style={{
                      "--before-bg": project.color,
                    }}
                  >
                    <span
                      className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full"
                      style={{ background: project.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ─── Screenshot Grid ─── */}
        <div className="px-8 pb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono tracking-[2px] uppercase text-white/20">
              Screens · {project.screens.length} total
            </span>
            <button
              onClick={() => setGalleryOpen(true)}
              className="text-[12px] font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-all"
              style={{ color: project.color }}
            >
              <Eye size={13} />
              View All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {previewScreens.map((screen, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, scale: 1.01 }}
                onClick={() => setGalleryOpen(true)}
                className="rounded-xl overflow-hidden border border-white/[0.06] cursor-pointer group/screen relative"
              >
                <Image
                  src={`/images/${screen.file}`}
                  alt={screen.name}
                  width={300}
                  height={190}
                  className="w-full h-[140px] object-cover object-top"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-[12px] font-display font-semibold text-white mb-1">
                    {screen.name}
                  </span>
                  <span className="text-[10px] text-white/50 leading-tight">
                    {screen.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.article>

      {/* Gallery modal */}
      <ProjectGallery
        screens={project.screens}
        color={project.color}
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
      />
    </>
  );
}
