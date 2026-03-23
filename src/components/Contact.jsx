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

        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <FiMail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                    {email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <FiMapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div>Remote / Global</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-black p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea required rows="4" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="How can I help you?"></textarea>
              </div>
              
              <button type="submit" className="bg-white text-black font-semibold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-gray-200 transition-colors">
                Send Message <FiSend />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
