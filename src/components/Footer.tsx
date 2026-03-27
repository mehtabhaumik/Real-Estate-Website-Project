import { Home, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">RIVERVIEW<span className="text-blue-400">REALTY</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner in finding the perfect home in Riverview, Florida. We combine local expertise with premium service to deliver exceptional results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/agent" className="hover:text-blue-400 transition-colors">Agent Profile</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Search Properties</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>123 Realty Way, Riverview, FL 33569</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(813) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@riverviewrealty.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-gray-800 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {currentYear} Riverview Realty. All rights reserved.</p>
          <div className="flex flex-col items-center md:items-end space-y-1 mt-4 md:mt-0">
            <p className="text-gray-400 font-medium">
              Developed by <span className="text-blue-500 font-bold">Bhaumik Mehta</span>
            </p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest">
              Powered by <span className="text-gray-500 font-bold">Google AI Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
