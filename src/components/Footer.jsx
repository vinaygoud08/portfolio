import { motion } from 'framer-motion';

export default function Footer({ userData }) {
  const name = userData?.name || 'Developer';
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="text-xl font-black tracking-tighter text-white">
              {name.split(' ')[0].toUpperCase()} <span className="text-aurora-cyan">.</span>
            </div>
            <div className="text-gray-500 text-sm font-medium">
              &copy; {year} Built with passion and code.
            </div>
          </div>
          
          <div className="flex gap-8">
            {[
              { label: 'GitHub', href: userData?.github ? `https://github.com/${userData.github}` : '#' },
              { label: 'LinkedIn', href: userData?.linkedin || '#' },
              { label: 'Email', href: `mailto:${userData?.email}` }
            ].map((link, i) => (
              <motion.a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, color: '#fff' }}
                className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest px-2 py-1"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
