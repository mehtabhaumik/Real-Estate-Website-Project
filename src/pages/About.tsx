import { TEAM } from '../data';
import { Target, Heart, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1920" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="h-1 w-12 bg-blue-500 rounded-full" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Our Story</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight"
          >
            Redefining Real Estate in <span className="text-blue-400">Riverview</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 leading-relaxed"
          >
            Founded on the principles of integrity, expertise, and community service, Riverview Realty has been the region's premier agency since 2008.
          </motion.p>
        </div>
      </section>

      {/* History & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                What started as a small family-run office in the heart of Riverview has grown into a leading force in the Florida real estate market. Our journey began with a simple observation: the community needed an agency that prioritized relationships over transactions.
              </p>
            </div>
            
            <div className="bg-blue-600 p-12 rounded-[40px] text-white shadow-xl">
              <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Our Mission</h2>
              <p className="text-blue-100 leading-relaxed text-lg">
                To empower our clients through expert guidance, transparent communication, and unparalleled market knowledge, ensuring every property journey is seamless, successful, and rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Meet the Team</h2>
            <p className="text-blue-600 font-bold mt-2">The experts behind Riverview Realty</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map((member, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-bold">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
