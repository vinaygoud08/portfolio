import { motion } from 'framer-motion';

const academics = [
  {
    degree: 'Bachelor of Technology (CS)',
    institution: 'Institute of Aeronautical Engineering, Hyderabad',
    year: '2023 - 2026',
    description: 'Pursuing core engineering principles and modern software development.',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Vijay Rural Engineering College, Nizamabad',
    year: '2019 - 2022',
    description: 'Graduated with a CGPA of 4.96.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Gnana Vaagdevi Vidyalayam, Nizamabad',
    year: '2019',
    description: 'Graduated with a GPA of 9.0.',
  }
];

const experience = [
  { 
    role: 'Front-end Development Intern', 
    company: 'Cognifys (Remote)', 
    date: 'Jun - Jul 2025',
    bullets: [
      'Designed responsive user interfaces using HTML, CSS, and Bootstrap based on client requirements.',
      'Collaborated with team via remote tools and contributed code via GitHub for real-time deployment.',
      'Optimized front-end performance and resolved UI bugs based on user testing and feedback.',
      'Successfully completed and submitted all tasks within the deadline.'
    ]
  }
];

export default function Academics() {
  return (
    <section id="academics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Journey & <span className="text-gradient">Growth</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-aurora-cyan to-aurora-violet mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-aurora-cyan/10 flex items-center justify-center text-aurora-cyan">
                <div className="w-2 h-2 rounded-full bg-aurora-cyan animate-pulse"></div>
              </span>
              Education
            </h3>
            <div className="space-y-12 pl-4 relative">
              {/* Timeline Line */}
              <div className="absolute left-[3px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-aurora-cyan via-aurora-violet to-transparent opacity-30"></div>
              
              {academics.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className="relative pl-10 group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-16.5px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-aurora-cyan group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                  
                  <div className="text-xs font-black text-aurora-cyan mb-2 font-mono tracking-widest uppercase py-1 px-3 bg-aurora-cyan/10 rounded-full w-fit">
                    {item.year}
                  </div>
                  <h4 className="text-2xl font-black mb-1 group-hover:text-aurora-cyan transition-colors">{item.degree}</h4>
                  <div className="text-white/60 font-bold mb-4">{item.institution}</div>
                  <p className="text-gray-400 leading-relaxed max-w-md">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-aurora-rose/10 flex items-center justify-center text-aurora-rose">
                <div className="w-2 h-2 rounded-full bg-aurora-rose animate-pulse"></div>
              </span>
              Experience
            </h3>
            <div className="grid gap-8">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-aurora-rose/50 transition-all group overflow-hidden relative"
                >
                  <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-aurora-rose/5 blur-3xl group-hover:bg-aurora-rose/10 transition-colors"></div>
                  
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                    <div>
                      <h4 className="font-black text-2xl group-hover:text-aurora-rose transition-colors">{exp.role}</h4>
                      <span className="text-lg text-white/60 font-bold block mt-1">{exp.company}</span>
                    </div>
                    <div className="font-mono text-[10px] font-black px-4 py-1.5 bg-aurora-rose/10 border border-aurora-rose/20 rounded-full text-aurora-rose tracking-tighter uppercase">
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 flex items-start group-hover:text-white/80 transition-colors">
                        <span className="text-aurora-rose mr-3 text-lg leading-none">›</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-aurora-indigo/50 transition-all group overflow-hidden relative"
              >
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-aurora-indigo/5 blur-3xl group-hover:bg-aurora-indigo/10 transition-colors"></div>
                
                <h4 className="font-black text-2xl mb-6 group-hover:text-aurora-indigo transition-colors underline decoration-aurora-indigo/30 underline-offset-8">Key Strengths</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Quick Learner & UI/UX Focused",
                    "Strong Communicator",
                    "Organized & Deadline Driven",
                    "Adaptable to New Tech"
                  ].map((strength, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-white transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-aurora-indigo shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                      <span className="text-sm font-bold">{strength}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
