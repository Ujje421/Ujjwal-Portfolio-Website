import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import TacticalNav from '@/components/TacticalNav'
import CustomCursor from '@/components/CustomCursor'
import { i } from 'framer-motion/client'
import Terminal from '@/components/Terminal'

export default function Home() {
  return (
    // Adding scroll-smooth here is a native backup for the jump
    <>
      <main className="bg-batBlack min-h-screen scroll-smooth">
        <TacticalNav /> 
        <CustomCursor />
        <Terminal />
        
        {/* Each of these must have the ID inside their own file */}
        <Hero />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <Contact />

      </main>
      <footer className="py-10 border-t border-white/5 text-center relative overflow-hidden">
  <div className="red-alert-only hidden absolute top-0 left-0 w-full bg-red-600 text-black font-black text-[10px] animate-pulse">
    WARNING: UNAUTHORIZED_ACCESS_DETECTED // TRACING_IP...
  </div>
  <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">
    &copy; 2025 Ujjwal Jagtap // Nashik Base
  </p>
</footer>
    </>
  )
}