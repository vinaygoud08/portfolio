import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['C', 'Python', 'Java', 'JavaScript'] },
  { category: 'Frontend', items: ['HTML & CSS', 'Bootstrap', 'React / React Native'] },
  { category: 'Database', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools / Other', items: ['Visual Studio', 'GitHub', 'Jupyter', 'IoT Modules'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="glass-panel p-6 rounded-xl border border-white/10 hover:border-white/30 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-4">{skillGroup.category}</h3>
              <ul className="space-y-3 pl-2">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-center before:content-[''] before:w-1.5 before:h-1.5 before:bg-white/50 before:rounded-full before:mr-3">
                    {item}
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
