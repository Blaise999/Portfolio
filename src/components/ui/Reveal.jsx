"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  y = 50,
  blur = 6,
  duration = 0.85,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: `blur(${blur}px)` }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // expoOut — that smooth Framer ease
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
