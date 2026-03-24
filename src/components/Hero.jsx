import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Hero({ userData }) {
  const name = userData?.name || 'Developer';
  const role = userData?.role || 'Software Engineer';
  const bio = userData?.bio || 'Building clean, professional, and elegant web experiences.';
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-4">Hello, I am</h2>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-tight"
          >
            I'm <span className="text-gradient drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">{name}</span>
          </motion.h1>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl text-white/80 font-medium mb-10"
          >
            {role}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-8"
          >
            {userData?.github && (
              <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all transform hover:scale-110">
                <FiGithub size={24} />
              </a>
            )}
            {userData?.linkedin && (
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all transform hover:scale-110">
                <FiLinkedin size={24} />
              </a>
            )}
            {userData?.email && (
              <a href={`mailto:${userData.email}`} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all transform hover:scale-110">
                <FiMail size={24} />
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Scroll</span>
      </motion.div>
    </section>
  );
}
