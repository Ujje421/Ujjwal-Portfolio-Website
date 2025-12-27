"use client"
import { motion } from 'framer-motion';
import { Bot, Code, Database, BarChart, Settings, Users } from 'lucide-react';

const services = [
  { title: "Website Development", icon: <Code />, desc: "High-performance, responsive digital platforms." },
  { title: "CRM Solutions", icon: <Users />, desc: "Tailored customer relationship management systems." },
  { title: "Chatbot Development", icon: <Bot />, desc: "Smart bots for web, WhatsApp, and IVR." },
  { title: "Conversation AI", icon: <Settings />, desc: "Deep NLP integration via Dialogflow CX." },
  { title: "Data Analysis", icon: <BarChart />, desc: "Actionable insights and visual dashboards." },
  { title: "AI Agents", icon: <Database />, desc: "Autonomous agents for task automation." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-batBlack relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-white text-4xl font-black uppercase mb-12 italic tracking-tighter">
          Tactical <span className="text-batAccent">Solutions</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 border border-white/5 bg-batGray/20 hover:border-batAccent/50 transition-all overflow-hidden"
            >
              {/* Glitch Overlay Effect */}
              <div className="absolute inset-0 bg-batAccent/5 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-slow pointer-events-none"></div>
              
              <div className="text-batAccent mb-4 flex justify-center">{s.icon}</div>
              <h4 className="text-white font-bold uppercase mb-2 tracking-widest text-sm relative z-10">{s.title}</h4>
              <p className="text-gray-500 text-xs font-light px-4 relative z-10">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}