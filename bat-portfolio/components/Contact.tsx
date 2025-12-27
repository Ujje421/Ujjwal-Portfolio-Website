"use client"
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-batBlack border-t border-batAccent/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-batAccent font-mono text-xs tracking-[0.5em] mb-4 uppercase italic">Establish Communication</h2>
        <h3 className="text-5xl font-black text-white uppercase mb-12 tracking-tighter">Contact HQ</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <a href="tel:+919370430337" className="group flex flex-col items-center gap-3">
            <Phone className="text-gray-500 group-hover:text-batAccent transition-colors" size={32} />
            <span className="text-[10px] text-gray-400 font-mono">+91 9370430337 </span>
          </a>
          <a href="mailto:ujjwaljagtap7@gmail.com" className="group flex flex-col items-center gap-3">
            <Mail className="text-gray-500 group-hover:text-batAccent transition-colors" size={32} />
            <span className="text-[10px] text-gray-400 font-mono italic">ujjwaljagtap7@gmail.com </span>
          </a>
          <a href="https://www.instagram.com/ujjwaljagtap_07" target="_blank" className="group flex flex-col items-center gap-3">
            <Instagram className="text-gray-500 group-hover:text-batAccent transition-colors" size={32} />
            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">@ujjwaljagtap_07</span>
          </a>
          <a href="https://www.linkedin.com/in/ujjwal-jagtap" target="_blank" className="group flex flex-col items-center gap-3">
            <Linkedin className="text-gray-500 group-hover:text-batAccent transition-colors" size={32} />
            <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Neural Link </span>
          </a>
        </div>
      </div>
    </section>
  );
}