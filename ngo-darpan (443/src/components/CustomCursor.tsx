/**
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for lag-free performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lagging spring config
  const springConfig = { damping: 30, stiffness: 280, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only render on screens with precise hover capabilities (typically desktops)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("input") || 
        target.closest("select") || 
        target.closest("textarea") || 
        target.closest("[role='button']") || 
        target.closest(".cursor-pointer") ||
        target.closest(".group");
        
      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Smooth Lagging Outer Ring Aura */}
      <motion.div
        id="custom-cursor-aura"
        className="fixed rounded-full border border-[#BAC095]/60 bg-[#BAC095]/5 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
        }}
        animate={{
          borderColor: isHovered ? "rgba(197, 187, 211, 0.95)" : "rgba(197, 187, 211, 0.60)",
          backgroundColor: isHovered ? "rgba(245, 200, 187, 0.25)" : "rgba(245, 200, 187, 0.08)",
        }}
        transition={{ type: "spring", stiffness: 180, damping: 25 }}
      />

      {/* Precise Instant Inner Dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed w-2 h-2 bg-gradient-to-tr from-[#BAC095] to-[#636B2F] rounded-full shadow-md shadow-[#BAC095]/30 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      />
    </div>
  );
}
