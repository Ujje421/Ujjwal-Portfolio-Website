"use client"
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-batBlack border border-batAccent text-batAccent rounded-full shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_40px_rgba(102,252,241,0.6)] hover:bg-batAccent hover:text-black transition-all duration-300 group"
          aria-label="Activate Bat-Signal"
        >
          <Shield className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          <div className="absolute -top-12 right-0 bg-batAccent text-black text-[10px] font-mono px-2 py-1 uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Return to HQ
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}