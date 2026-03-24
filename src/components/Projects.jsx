import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'IoT-based Food Redistribution System',
    description: 'Developed a smart platform to connect food donors with NGOs to reduce food waste. Integrated IoT sensors for real-time updates on food availability and pickup coordination. Built live tracking dashboard, donation request manager, and donor authentication system.',
    tech: ['React Native', 'MongoDB', 'IoT Modules'],
    github: '#',
    live: '#'
  },
  {
    title: 'Expense Calculator App',
    description: 'Created a personal budgeting tool to monitor expenses and alert users when limits were exceeded. Included daily/monthly tracking, graphical analytics, and user authentication. Used cloud-based storage for real-time multi-device synchronization.',
    tech: ['React Native', 'MongoDB'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-aurora-cyan to-aurora-violet mx-auto rounded-full"
          />
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image / Preview Container */}
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-aurora-cyan/20 to-aurora-violet/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative aspect-video bg-[#0a0a0a] rounded-[1.5rem] border border-white/10 overflow-hidden flex items-center justify-center">
                  {/* Gradient Pattern Background */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_70%)]"></div>
                  <span className="text-white/10 font-black text-4xl tracking-widest uppercase select-none">Project {idx + 1}</span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aurora-indigo/90 to-aurora-violet/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                    <div className="flex gap-4">
                      <a href={project.github} className="p-4 bg-white text-black rounded-2xl hover:scale-110 transition-transform flex items-center gap-2 font-bold shadow-xl">
                        <FiGithub size={20} /> Code
                      </a>
                      <a href={project.live} className="p-4 bg-black text-white rounded-2xl hover:scale-110 transition-transform flex items-center gap-2 font-bold border border-white/20">
                        <FiExternalLink size={20} /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <span className="text-aurora-cyan font-mono text-sm tracking-widest uppercase">Case Study</span>
                  <h3 className="text-3xl md:text-4xl font-black leading-none">{project.title}</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1.5 text-xs font-bold border border-white/10 bg-white/5 text-aurora-cyan rounded-full backdrop-blur-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
