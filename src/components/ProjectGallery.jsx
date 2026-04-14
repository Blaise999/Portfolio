"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProjectGallery({ screens, color, isOpen, onClose }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const goNext = () => setCurrent((c) => (c + 1) % screens.length);
  const goPrev = () => setCurrent((c) => (c - 1 + screens.length) % screens.length);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 z-10"
        >
          <X size={20} />
        </button>

        {/* Image viewer */}
        <div
          className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main image */}
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src={`/images/${screens[current].file}`}
              alt={screens[current].name}
              width={1200}
              height={750}
              className="max-h-[70vh] w-auto object-contain"
              unoptimized
            />
          </motion.div>

          {/* Caption */}
          <div className="text-center">
            <h4 className="font-display text-lg font-bold text-white mb-1">
              {screens[current].name}
            </h4>
            <p className="text-sm text-white/40 max-w-[500px]">
              {screens[current].desc}
            </p>
            <p className="text-[12px] text-white/20 font-mono mt-2">
              {current + 1} / {screens.length}
            </p>
          </div>

          {/* Navigation */}
          <button
            onClick={goPrev}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {screens.map((screen, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                i === current
                  ? "border-white/60 opacity-100"
                  : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              <Image
                src={`/images/${screen.file}`}
                alt={screen.name}
                width={64}
                height={40}
                className="w-full h-full object-cover"
                unoptimized
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
