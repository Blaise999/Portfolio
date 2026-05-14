"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * MagneticButton — the cursor pulls the button toward it on hover.
 * Spring-physics based for that organic Framer feel.
 *
 * Pass `as="a"` and `href` to render an anchor, or use the default button.
 */
export default function MagneticButton({
  children,
  className = "",
  as = "button",
  strength = 0.35,
  href,
  target,
  rel,
  onClick,
  ...rest
}) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring smoothing — that "wet" pull feel
  const x = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.4 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.4 });

  // Inner content shifts slightly less than the wrapper, creating depth
  const innerX = useTransform(x, (v) => v * 0.55);
  const innerY = useTransform(y, (v) => v * 0.55);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(offsetX * strength);
    mouseY.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  const Tag = motion[as] || motion.button;

  return (
    <Tag
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center will-change-transform ${className}`}
      {...rest}
    >
      <motion.span style={{ x: innerX, y: innerY }} className="flex items-center gap-2">
        {children}
      </motion.span>
    </Tag>
  );
}
