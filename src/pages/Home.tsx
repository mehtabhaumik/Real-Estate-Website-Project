import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Home as HomeIcon, DollarSign, Filter } from 'lucide-react';
import { PROPERTIES } from '../data';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'motion/react';

export default function Home() {
  const navigate = useNavigate();
  const [searchCity, setSearchCity] = useState('');
  const [propertyType, setPropertyType] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchCity) params.set('city', searchCity);
    if (propertyType !== 'All') params.set('type', propertyType);
    if (priceRange !== 'All') params.set('price', priceRange);
    navigate(`/search?${params.toString()}`);
  };

  const featuredProperties = useMemo(() => PROPERTIES.filter(p => p.isFeatured), []);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const cityMatch = searchCity === '' || p.city.toLowerCase().includes(searchCity.toLowerCase());
      const typeMatch = propertyType === 'All' || p.type === propertyType;
      
      let priceMatch = true;
      if (priceRange !== 'All') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          priceMatch = p.price >= min && p.price <= max;
        } else {
          priceMatch = p.price >= min;
        }
      }
      
      return cityMatch && typeMatch && priceMatch;
    });
  }, [searchCity, propertyType, priceRange]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            Find Your Dream Home in <span className="text-blue-400">Riverview</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto"
          >
            Discover premium properties and expert real estate services tailored to your lifestyle in Florida's most vibrant communities.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 w-full flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100 transition-all">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <input 
                type="text" 
                placeholder="Search by city (e.g. Riverview, Tampa)..." 
                className="bg-transparent border-none w-full text-sm focus:ring-0 outline-none text-gray-900"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>

            <div className="w-full md:w-48 flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
              <HomeIcon className="h-5 w-5 text-gray-400 mr-3" />
              <select 
                className="bg-transparent border-none w-full text-sm focus:ring-0 text-gray-900"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="House">House</option>
                <option value="Condo">Condo</option>
                <option value="Townhouse">Townhouse</option>
              </select>
            </div>

            <div className="w-full md:w-48 flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
              <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
              <select 
                className="bg-transparent border-none w-full text-sm focus:ring-0 text-gray-900"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="All">Any Price</option>
                <option value="0-500000">$0 - $500k</option>
                <option value="500000-1000000">$500k - $1M</option>
                <option value="1000000-10000000">$1M+</option>
              </select>
            </div>

            <button 
              onClick={handleSearch}
              className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </motion.div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-1 w-12 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Premium Selection</span>
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Featured Listings</h2>
          </div>
          <p className="text-gray-500 max-w-md text-sm leading-relaxed">
            Hand-picked properties that represent the pinnacle of luxury and value in the Riverview area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} isFeatured />
          ))}
        </div>
      </section>

      {/* Search Results */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              {filteredProperties.length} Properties Found
            </h2>
            <div className="flex items-center text-sm text-gray-500 font-medium">
              <Filter className="h-4 w-4 mr-2" />
              Sort by: <span className="text-gray-900 ml-1 cursor-pointer hover:text-blue-600">Newest First</span>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Search className="h-8 w-8 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No properties match your search</h3>
              <p className="text-gray-500 text-sm">Try adjusting your filters or searching in a different area.</p>
              <button 
                onClick={() => { setSearchCity(''); setPropertyType('All'); setPriceRange('All'); }}
                className="mt-8 text-blue-600 font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
