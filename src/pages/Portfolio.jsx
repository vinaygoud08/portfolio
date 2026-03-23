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
      className="bg-black min-h-screen text-white"
    >
      <Navbar userData={userData} />
      
      <main>
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
