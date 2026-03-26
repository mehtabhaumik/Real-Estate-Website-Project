import { useParams, Link } from 'react-router-dom';
import { PROPERTIES, AGENT } from '../data';
import { Bed, Bath, Square, MapPin, CheckCircle2, Phone, Mail, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import MortgageCalculator from '../components/MortgageCalculator';
import ContactForm from '../components/ContactForm';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Property not found</h2>
        <Link to="/" className="text-blue-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  const nextImage = () => setActiveImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-6 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link to="/" className="flex items-center text-sm text-gray-500 hover:text-blue-600 mb-2 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to listings
            </Link>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">{property.title}</h1>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-4 w-4 mr-1 text-blue-600" />
              <span>{property.address}, {property.city}, {property.state} {property.zip}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Listing Price</p>
            <p className="text-3xl font-extrabold text-blue-600">${property.price.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Carousel */}
            <div className="relative aspect-[16/9] bg-gray-200 rounded-3xl overflow-hidden shadow-lg group">
              <img 
                src={property.images[activeImage]} 
                alt={property.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-600 hover:text-white"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {property.images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-2 rounded-full transition-all ${activeImage === i ? 'w-8 bg-blue-600' : 'w-2 bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-2xl mb-3">
                  <Bed className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900">{property.bedrooms}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bedrooms</p>
              </div>
              <div className="flex flex-col items-center border-x border-gray-100">
                <div className="bg-blue-50 p-4 rounded-2xl mb-3">
                  <Bath className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900">{property.bathrooms}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Bathrooms</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-50 p-4 rounded-2xl mb-3">
                  <Square className="h-8 w-8 text-blue-600" />
                </div>
                <p className="text-2xl font-extrabold text-gray-900">{property.sqft.toLocaleString()}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Square Ft</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Property Description</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-8">Key Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Agent Widget */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Listing Agent</h3>
              <div className="flex items-center space-x-4 mb-8">
                <img 
                  src={AGENT.photo} 
                  alt={AGENT.name} 
                  className="w-20 h-20 rounded-2xl object-cover shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-lg font-extrabold text-gray-900">{AGENT.name}</h4>
                  <p className="text-sm text-blue-600 font-bold">{AGENT.title}</p>
                </div>
              </div>
              <div className="space-y-3">
                <a href={`tel:${AGENT.phone}`} className="flex items-center justify-center w-full py-3 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Agent
                </a>
                <a href={`mailto:${AGENT.email}`} className="flex items-center justify-center w-full py-3 bg-gray-50 text-gray-900 rounded-xl font-bold hover:bg-gray-900 hover:text-white transition-all">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Agent
                </a>
              </div>
              <Link to="/agent" className="block text-center mt-6 text-xs font-bold text-gray-400 hover:text-blue-600 transition-colors uppercase tracking-widest">
                View Agent Profile
              </Link>
            </div>

            {/* Mortgage Calculator */}
            <MortgageCalculator />

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
