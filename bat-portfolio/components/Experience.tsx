"use client"
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Sarvajna Media",
    role: "Conversational AI Developer",
    period: "01/2025-PRESENT",
    details: [
      "Designed and deployed conversational AI agents using Dialogflow CX.",
      "Integrated backend services via Node.js and webhooks.",
      "Optimized performance for WhatsApp and IVR platforms."
    ]
  },
  {
    company: "Exlearn",
    role: "Associate Cloud Developer",
    period: "09/2024 - 12/2024",
    details: [
      "Implemented scalable AWS infrastructures using EC2, S3, and VPC.",
      "Optimized resource usage to reduce operational costs."
    ]
  },
  {
    company: "Freelance",
    role: "Data Scientist",
    period: "DATA ANALYTICS OPS",
    details: [
      "Built predictive models using Python (Pandas, Numpy).",
      "Developed interactive dashboards using Power BI."
    ]
  },
  {
    company: "Trainty",
    role: "Data Analyst Intern",
    period: "11/2022 - 01/2023",
    details: [
      "Identified key business trends through large dataset analysis.",
      "Created stakeholder dashboards via Power BI and Excel."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-batBlack border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-batAccent font-mono tracking-[0.4em] text-sm mb-16 uppercase italic">
          // Service_History.log
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="mb-16 ml-8 relative"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-batBlack border-2 border-batAccent rounded-full shadow-[0_0_10px_#66FCF1]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                <span className="text-batAccent font-mono text-xs">{exp.period}</span>
              </div>
              
              <h4 className="text-gray-400 font-bold text-lg mb-4 uppercase italic tracking-widest">{exp.company}</h4>
              
              <ul className="space-y-3">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-gray-500 font-light border-l border-batAccent/30 pl-4 hover:border-batAccent transition-colors">
                    {detail}
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