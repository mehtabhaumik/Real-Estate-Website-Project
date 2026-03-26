import { AGENT } from '../data';
import { Phone, Mail, Award, CheckCircle2, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export default function AgentProfile() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Header */}
      <section className="bg-white border-b border-gray-100 pt-20 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50 -skew-x-12 translate-x-1/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src={AGENT.photo} 
                alt={AGENT.name} 
                className="w-64 h-80 rounded-[40px] object-cover shadow-2xl border-8 border-white"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-xl">
                <Award className="h-8 w-8" />
              </div>
            </motion.div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <div className="h-1 w-12 bg-blue-600 rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Top Producer 2024</span>
              </div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-2 tracking-tight">{AGENT.name}</h1>
              <p className="text-xl text-blue-600 font-bold mb-8">{AGENT.title}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg">
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-700">{AGENT.phone}</span>
                </div>
                <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="font-bold text-gray-700">Email Bhaumik</span>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-4 mt-10">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Twitter className="h-6 w-6" /></a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin className="h-6 w-6" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio & Expertise */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Professional Biography</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                {AGENT.bio}
              </p>
              
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Luxury Waterfront', 'New Construction', 'Investment Properties', 'Relocation Specialist', 'Market Analysis', 'Negotiation Strategy'].map((skill, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span className="font-bold text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Recent Sales Success</h2>
              <div className="space-y-6">
                {AGENT.recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{sale.address}</p>
                      <p className="text-sm text-gray-500">Sold on {new Date(sale.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-extrabold text-blue-600">${sale.price.toLocaleString()}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sale Price</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-8">
            <div className="bg-blue-600 rounded-[40px] p-10 text-white shadow-xl">
              <h3 className="text-2xl font-extrabold mb-6">Ready to find your home?</h3>
              <p className="text-blue-100 mb-10 leading-relaxed">
                Bhaumik is ready to guide you through every step of the process with professional expertise and local knowledge.
              </p>
              <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all shadow-lg">
                Schedule a Consultation
              </button>
              <p className="text-center mt-6 text-xs text-blue-200 font-medium">Free market evaluation included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
