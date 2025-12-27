"use client"
import { motion } from 'framer-motion';

const missions = [
  {
    title: "HIX Agent",
    tag: "AI_COMMUNICATIONS",
    desc: "Advanced conversational AI for high-intent exchange protocols."
  },
  {
    title: "Clinical Nurse AI",
    tag: "HEALTH_TECH",
    desc: "Automated healthcare agent for patient triage and clinical workflows."
  },
  {
    title: "Flight Booking AI",
    tag: "NLU_AUTOMATION",
    desc: "Intelligent agent using Dialogflow CX and Node.js for dynamic travel booking." 
  },
  {
    title: "Advanced Geofencing",
    tag: "RESEARCH_PUBLICATION",
    desc: "Published location-based discount engine using Flutter and Firebase." 
  },{
    title: "Banking Fraud Detection",
    tag: "ML_SECURITY",
    desc: "Predictive model for Policy Bazaar to identify fraudulent banking patterns using Python."
  },
  {
    title: "US Accidents EDA",
    tag: "DATA_SCIENCE",
    desc: "Exploratory analysis on Kaggle datasets to uncover road accident patterns."
  },
  {
    title: "IMDb Analytics",
    tag: "VISUAL_INTEL",
    desc: "Trend analysis and movie rating insights using Power BI and Matplotlib."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-batBlack px-6">
      <div className="container mx-auto">
        <div className="border-l-4 border-batAccent pl-6 mb-16">
          <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">
            Active <span className="text-batAccent">Missions</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm mt-2">ACCESSING_ENCRYPTED_FILES... SUCCESS</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {missions.map((mission, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ backgroundColor: "rgba(102, 252, 241, 0.05)" }}
              className="group border border-white/5 p-8 flex flex-col md:flex-row justify-between items-start md:items-center transition-all"
            >
              <div>
                <span className="text-batAccent font-mono text-xs tracking-widest">{mission.tag}</span>
                <h3 className="text-3xl font-bold text-white mt-1 group-hover:translate-x-2 transition-transform uppercase">
                  {mission.title}
                </h3>
              </div>
              <p className="text-gray-400 max-w-md mt-4 md:mt-0 italic font-light">
                {mission.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}