import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Navbar({ userData }) {
  const navItems = [
    { name: 'Overview', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Academics & Exp', to: 'academics' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass-panel border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer">
            <span className="font-bold text-xl tracking-tighter">
              {userData?.name ? userData.name.split(' ')[0].toUpperCase() : 'PORTFOLIO'}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
