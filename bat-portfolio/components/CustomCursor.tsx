"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="hidden lg:block">
      {/* The Main Crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-batAccent rounded-full pointer-events-none z-[9999] flex items-center justify-center"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2 : 1,
          rotate: isHovering ? 90 : 0
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      >
        {/* Inner Dot */}
        <div className="w-1 h-1 bg-batAccent rounded-full" />
        
        {/* Crosshair Lines */}
        <div className="absolute w-full h-[1px] bg-batAccent/20" />
        <div className="absolute h-full w-[1px] bg-batAccent/20" />
      </motion.div>

      {/* Live Coordinate Display */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] ml-6 mt-6 font-mono text-[8px] text-batAccent uppercase"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'tween', duration: 0 }}
      >
        <br/>
        
      </motion.div>
    </div>
  );
}