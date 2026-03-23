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
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col md:flex-row gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2 aspect-video bg-white/5 rounded-xl border border-white/10 relative group overflow-hidden flex items-center justify-center">
                 <span className="text-white/20 font-mono text-sm tracking-widest uppercase">Project Preview</span>
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FiGithub size={20}/></a>
                    <a href={project.live} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FiExternalLink size={20}/></a>
                 </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-mono border border-white/20 text-gray-300 rounded-full">
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
