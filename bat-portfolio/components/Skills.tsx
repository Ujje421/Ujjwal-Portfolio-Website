"use client"
import { motion } from 'framer-motion';
import { Terminal, Database, Cloud, BrainCircuit, BarChart3, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Intelligence & AI",
    icon: <BrainCircuit className="w-6 h-6" />,
    skills: ["Dialogflow CX", "Node.js", "Generative AI", "NLP","Python"], // [cite: 13, 14, 48]
    status: "ACTIVE"
  },
  {
    title: "Core Programming",
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "Python", "C++", "HTML5/CSS"], // [cite: 47]
    status: "OPTIMIZED"
  },
  {
    title: "Data Analytics",
    icon: <BarChart3 className="w-6 h-6" />,
    skills: ["Power BI", "Pandas/NumPy", "Matplotlib", "SQL"], // [cite: 21, 22, 47, 48]
    status: "SECURE"
  },
  {
    title: "Cloud Infrastructure",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS (EC2, S3, VPC)", "Firebase", "IAM"], // [cite: 28, 59]
    status: "STABLE"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-batBlack relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-batAccent font-mono tracking-[0.3em] text-sm mb-12 uppercase">
          // Tactical_Capabilities_Log
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, borderColor: '#66FCF1' }}
              className="p-6 bg-batGray/20 border border-white/10 backdrop-blur-md"
            >
              <div className="text-batAccent mb-4">{cat.icon}</div>
              <h4 className="text-white font-bold mb-3 uppercase tracking-tighter">{cat.title}</h4>
              <ul className="space-y-1">
                {cat.skills.map((s, i) => (
                  <li key={i} className="text-gray-500 text-xs font-mono flex items-center">
                    <span className="w-1 h-1 bg-batAccent mr-2"></span>{s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}