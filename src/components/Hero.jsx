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
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            {name}
          </motion.h1>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 font-light mb-8"
          >
            {role}
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            {bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            {userData?.github && (
              <a href={`https://github.com/${userData.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FiGithub size={24} />
              </a>
            )}
            {userData?.linkedin && (
              <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FiLinkedin size={24} />
              </a>
            )}
            {userData?.email && (
              <a href={`mailto:${userData.email}`} className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FiMail size={24} />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
