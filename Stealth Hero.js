import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden font-sans">
      
      {/* Background "Bat-Signal" Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Responsive Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Tactical Badge */}
        <div className="mb-6 px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
          <span className="text-cyan-400 text-xs tracking-[0.3em] uppercase font-bold">System Status: Online</span>
        </div>

        {/* Main Heading - Fluid Typography */}
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 italic uppercase">
          Building in the <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">Shadows.</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
          Full-Stack Developer specializing in high-performance architecture and 
          <span className="text-white"> tactical user experiences.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition-all duration-300 transform hover:-translate-y-1">
            View Projects
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
            Download Dossier
          </button>
        </div>
      </div>

      {/* Decorative Corner Elements (Tactical HUD) */}
      <div className="absolute bottom-10 left-10 hidden lg:block border-l-2 border-b-2 border-cyan-500/30 w-20 h-20 opacity-50"></div>
      <div className="absolute top-10 right-10 hidden lg:block border-r-2 border-t-2 border-cyan-500/30 w-20 h-20 opacity-50"></div>
    </div>
  );
};

export default Hero;