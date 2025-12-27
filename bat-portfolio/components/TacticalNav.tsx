"use client"
import { motion } from 'framer-motion';

const navPoints = [
  { id: 'hero', label: 'IDENTITY' },
  { id: 'experience', label: 'HISTORY' },
  { id: 'services', label: 'SOLUTIONS' },
  { id: 'projects', label: 'MISSIONS' },
  { id: 'skills', label: 'UTILITY' },
  { id: 'contact', label: 'CONTACT' },
];

export default function TacticalNav() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      console.log(`Target Acquired: ${id}`); // This helps us debug in F12 console
      const offset = 80; // Space for the header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.error(`Target Lost: Section with ID "${id}" not found in DOM.`);
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[9999] hidden xl:flex flex-col items-end gap-6">
      {navPoints.map((point) => (
        <button
          key={point.id}
          onClick={() => scrollToSection(point.id)}
          className="group flex items-center gap-4 cursor-pointer p-2"
        >
          <span className="text-[10px] font-mono text-batAccent opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-[0.3em] uppercase italic">
            {point.label}
          </span>
          
          <div className="relative h-3 w-3 border border-batAccent/40 rotate-45 group-hover:bg-batAccent group-hover:shadow-[0_0_10px_#66FCF1] transition-all duration-300">
          </div>
        </button>
      ))}
    </div>
  );
}