import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Academics from '../components/Academics';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Portfolio({ userData }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black min-h-screen text-white relative"
    >
      {/* Aurora Background */}
      <div className="aurora-bg">
        <div className="aurora-blob bg-aurora-violet top-[-10%] left-[-10%]" style={{ animationDelay: '0s' }}></div>
        <div className="aurora-blob bg-aurora-indigo top-[20%] right-[-10%]" style={{ animationDelay: '-5s', width: '50vw', height: '50vw' }}></div>
        <div className="aurora-blob bg-aurora-cyan bottom-[-10%] left-[20%]" style={{ animationDelay: '-10s' }}></div>
        <div className="aurora-blob bg-aurora-rose top-[40%] left-[10%]" style={{ animationDelay: '-15s', opacity: 0.1, width: '40vw', height: '40vw' }}></div>
      </div>

      <Navbar userData={userData} />
      
      <main className="relative z-10">
        <Hero userData={userData} />
        <Skills />
        <Projects />
        <Academics />
        <Contact userData={userData} />
      </main>

      <Footer userData={userData} />
    </motion.div>
  );
}
