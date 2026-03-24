import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact({ userData }) {
  const email = userData?.email || 'hello@developer.com';

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Mock implementation)");
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <div className="h-1 w-20 bg-white mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-12"
          >
            <div>
              <h3 className="text-4xl font-black mb-6">Let's <span className="underline decoration-aurora-cyan/30 underline-offset-8">Talk</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: <FiMail />, label: 'Email', value: email, href: `mailto:${email}`, color: 'aurora-cyan' },
                { icon: <FiMapPin />, label: 'Location', value: 'Remote / Global', color: 'aurora-violet' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 text-gray-300 group"
                >
                  <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center text-${item.color} group-hover:scale-110 transition-transform shadow-lg border border-white/5`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-bold hover:text-white transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-lg font-bold">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-8 glass-panel p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aurora-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest ml-2">Your Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-aurora-cyan/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-black text-gray-500 uppercase tracking-widest ml-2">Your Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-aurora-cyan/50 focus:bg-white/[0.08] transition-all placeholder:text-white/20" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-xs font-black text-gray-500 uppercase tracking-widest ml-2">Message</label>
                <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-aurora-cyan/50 focus:bg-white/[0.08] transition-all resize-none placeholder:text-white/20" placeholder="How can I help you?"></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full sm:w-min whitespace-nowrap bg-gradient-to-r from-aurora-cyan to-aurora-violet text-black font-black py-4 px-10 rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all uppercase tracking-tighter"
              >
                Send Message <FiSend size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
