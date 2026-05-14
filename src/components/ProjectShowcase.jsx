"use client";

import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Terminal, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

/* ─── Fullscreen Lightbox ─── */
function Lightbox({ screens, index, onClose }) {
  const [cur, setCur] = useState(index);
  const s = screens[cur];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-white/5 text-white/50 hover:text-white transition-colors z-10"
      >
        <X size={20} />
      </button>
      <motion.div
        key={cur}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-[95vw] sm:max-w-[85vw] max-h-[72vh] sm:max-h-[78vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={`/images/${s.file}`}
          alt={s.name}
          width={1400}
          height={900}
          className="rounded-xl sm:rounded-2xl border border-white/10 shadow-2xl max-h-[68vh] sm:max-h-[72vh] w-auto object-contain"
          unoptimized
        />
      </motion.div>
      <div className="mt-5 text-center max-w-[90vw]">
        <h4 className="font-display text-base sm:text-lg font-bold">{s.name}</h4>
        <p className="text-xs sm:text-sm text-white/40 mt-1 max-w-md mx-auto px-2">{s.desc}</p>
        <p className="text-[10px] sm:text-[11px] text-white/15 font-mono mt-2">
          {cur + 1} / {screens.length}
        </p>
      </div>
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCur((c) => (c - 1 + screens.length) % screens.length);
          }}
          className="p-2 sm:p-3 rounded-full bg-white/5 text-white/40 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCur((c) => (c + 1) % screens.length);
          }}
          className="p-2 sm:p-3 rounded-full bg-white/5 text-white/40 hover:text-white transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Single Project Showcase ─── */
export default function ProjectShowcase({ project, index }) {
  const [archOpen, setArchOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const galleryRef = useRef(null);
  const ref = useRef(null);
  const heroImgRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Subtle parallax — hero image drifts as the card scrolls past
  const { scrollYProgress } = useScroll({
    target: heroImgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const scrollGallery = (dir) => {
    if (galleryRef.current) galleryRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <>
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl sm:rounded-3xl border border-white/[0.05] bg-white/[0.01] overflow-hidden hover:border-white/[0.08] transition-colors duration-500"
        style={{ "--accent": project.color }}
      >
        {/* ── HERO IMAGE — parallax ── */}
        <div
          ref={heroImgRef}
          className="relative group cursor-pointer overflow-hidden"
          onClick={() => setLightbox(0)}
        >
          <motion.div style={{ y: imgY }} className="will-change-transform">
            <Image
              src={`/images/${project.hero}`}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-[260px] sm:h-[360px] md:h-[480px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
              unoptimized
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
          {/* Project title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-2 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono tracking-wider uppercase backdrop-blur-sm"
                  style={{
                    color: project.color,
                    border: `1px solid ${project.color}30`,
                    background: `${project.color}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
              <span className="text-[10px] sm:text-[11px] text-white/20 font-mono ml-1 sm:ml-2">
                {project.year}
              </span>
            </div>
            <h3 className="font-display text-[clamp(22px,4vw,42px)] font-extrabold leading-tight tracking-tight">
              {project.title}
            </h3>
            <p className="text-[13px] sm:text-[15px] text-white/40 mt-1">{project.subtitle}</p>
          </div>
          {/* View hint */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight size={16} />
          </div>
        </div>

        {/* ── BODY ── */}
        <div className="p-5 sm:p-8 md:p-10">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/55 leading-[1.8] max-w-[750px] mb-6 sm:mb-8">
            {project.description}
          </p>

          {/* Architecture toggle */}
          <button
            onClick={() => setArchOpen(!archOpen)}
            className="flex items-center gap-2 text-[11px] sm:text-[12px] font-mono tracking-wide mb-5 px-3.5 sm:px-4 py-2.5 rounded-xl border transition-all duration-300"
            style={{
              color: archOpen ? project.color : "rgba(255,255,255,0.35)",
              borderColor: archOpen ? `${project.color}30` : "rgba(255,255,255,0.06)",
              background: archOpen ? `${project.color}08` : "transparent",
            }}
          >
            <Terminal size={13} />
            Technical Architecture
            <span className="text-[10px] ml-1">{archOpen ? "▲" : "▼"}</span>
          </button>

          {/* Architecture details */}
          <AnimatePresence initial={false}>
            {archOpen && (
              <motion.div
                key="arch"
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: "auto", opacity: 1, marginBottom: 32 }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-[#080c18] rounded-2xl p-4 sm:p-6 border border-white/[0.04]">
                  <div className="space-y-3">
                    {project.architecture.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        className="flex gap-3 text-[11px] sm:text-[12px] md:text-[13px] font-mono text-white/45 leading-[1.85]"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                          style={{ background: project.color }}
                        />
                        <span>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SCREENSHOT GALLERY ── */}
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[2px] uppercase text-white/25">
                {project.screens.length} Screens
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollGallery(-1)}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white hover:border-white/15 transition-all"
                  aria-label="Previous screens"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollGallery(1)}
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/30 hover:text-white hover:border-white/15 transition-all"
                  aria-label="Next screens"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable gallery */}
            <div
              ref={galleryRef}
              className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none" }}
            >
              {project.screens.map((screen, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setLightbox(i)}
                  className="shrink-0 snap-start cursor-pointer group/img rounded-xl overflow-hidden border border-white/[0.06] hover:border-white/15 transition-colors duration-300 relative"
                  style={{ width: "clamp(240px, 30vw, 340px)" }}
                >
                  <Image
                    src={`/images/${screen.file}`}
                    alt={screen.name}
                    width={340}
                    height={220}
                    className="w-full h-[170px] sm:h-[200px] object-cover object-top group-hover/img:scale-[1.03] transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                    <span className="font-display text-[12px] sm:text-[13px] font-bold text-white">
                      {screen.name}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-white/55 mt-0.5 leading-tight">
                      {screen.desc}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fade edges */}
            <div className="absolute right-0 top-10 bottom-4 w-12 sm:w-16 bg-gradient-to-l from-obsidian to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox screens={project.screens} index={lightbox} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
