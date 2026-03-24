import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['C', 'Python', 'Java', 'JavaScript'] },
  { category: 'Frontend', items: ['HTML & CSS', 'Bootstrap', 'React / React Native'] },
  { category: 'Database', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools / Other', items: ['Visual Studio', 'GitHub', 'Jupyter', 'IoT Modules'] },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-aurora-cyan to-aurora-violet mx-auto rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-aurora-cyan/50 transition-all group relative overflow-hidden"
            >
              {/* Card Gradient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-aurora-cyan/10 blur-3xl group-hover:bg-aurora-cyan/20 transition-colors"></div>

              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-6 bg-gradient-to-b from-aurora-cyan to-aurora-violet rounded-full"></span>
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-center group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aurora-cyan to-aurora-violet mr-3 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
