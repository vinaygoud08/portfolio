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
    <section id="academics" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Academics & Experience</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Education
            </h3>
            <div className="space-y-8 pl-4 border-l border-white/10 relative">
              {academics.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-6"
                >
                  <div className="absolute left-[-29px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-white"></div>
                  
                  <div className="text-sm text-gray-400 mb-1 font-mono tracking-wider">{item.year}</div>
                  <h4 className="text-xl font-bold mb-1">{item.degree}</h4>
                  <div className="text-white/70 font-medium mb-3">{item.institution}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Experience & Strengths
            </h3>
            <div className="grid gap-6">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass-panel rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <span className="text-sm text-white/70 block mt-1">{exp.company}</span>
                    </div>
                    <div className="mt-2 sm:mt-0 font-mono text-xs px-3 py-1 bg-white/10 rounded-full text-white/70 whitespace-nowrap">
                      {exp.date}
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="text-white/50 mr-2">•</span>
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
                className="glass-panel rounded-xl p-6 border border-white/10 hover:border-white/30 transition-colors mt-2"
              >
                <h4 className="font-bold text-lg mb-4">Key Strengths</h4>
                <ul className="space-y-2">
                  <li className="text-gray-400 text-sm flex items-start"><span className="text-white/50 mr-2">•</span> Quick learner with a strong understanding of UI/UX design principles.</li>
                  <li className="text-gray-400 text-sm flex items-start"><span className="text-white/50 mr-2">•</span> Effective communicator and team collaborator in both academic and remote settings.</li>
                  <li className="text-gray-400 text-sm flex items-start"><span className="text-white/50 mr-2">•</span> Self-motivated, organized, and able to manage multiple tasks and deadlines efficiently.</li>
                  <li className="text-gray-400 text-sm flex items-start"><span className="text-white/50 mr-2">•</span> Adaptable to new tools, frameworks, and development environments.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
