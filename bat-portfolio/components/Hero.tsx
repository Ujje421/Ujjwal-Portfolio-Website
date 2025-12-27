"use client"
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-batBlack flex items-center justify-center overflow-hidden border-b border-white/5 text-center">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-batAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Base of Ops - Centered */}
          <div className="flex items-center gap-2 mb-6 text-batAccent font-mono text-xs tracking-[0.4em] uppercase">
            <MapPin size={14} /> 
            <span>Base of Ops: Nashik, India</span>
          </div>

          {/* Name - Centered with Stroke Effect */}
          <h1 className="text-6xl md:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">
            UJJWAL <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>
              JAGTAP
            </span>
          </h1>

          {/* Tagline - Centered */}
          <p className="mt-4 text-gray-400 text-lg md:text-2xl font-light max-w-2xl mx-auto italic">
            Software Developer specializing in <span className="text-white">Conversational AI</span> and 
            <span className="text-white"> Cloud Infrastructure</span>.
          </p>
          
          {/* Social Links - Centered */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <a href="mailto:ujjwaljagtap7@gmail.com" className="group flex flex-col items-center gap-2 transition-transform hover:scale-110">
              <div className="p-3 border border-white/10 group-hover:border-batAccent transition-colors">
                <Mail size={20} className="text-gray-400 group-hover:text-batAccent" />
              </div>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white">Email Agent</span>
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-jagtap" target="_blank" className="group flex flex-col items-center gap-2 transition-transform hover:scale-110">
              <div className="p-3 border border-white/10 group-hover:border-batAccent transition-colors">
                <Linkedin size={20} className="text-gray-400 group-hover:text-batAccent" />
              </div>
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white">Neural Link</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}