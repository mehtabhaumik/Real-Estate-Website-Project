import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon, MapPin, Home as HomeIcon, DollarSign, Filter, X } from 'lucide-react';
import { PROPERTIES } from '../data';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'motion/react';

export default function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  const [searchCity, setSearchCity] = useState(queryParams.get('city') || '');
  const [propertyType, setPropertyType] = useState(queryParams.get('type') || 'All');
  const [priceRange, setPriceRange] = useState(queryParams.get('price') || 'All');
  const [beds, setBeds] = useState('All');

  useEffect(() => {
    const city = queryParams.get('city');
    const type = queryParams.get('type');
    const price = queryParams.get('price');
    if (city) setSearchCity(city);
    if (type) setPropertyType(type);
    if (price) setPriceRange(price);
  }, [location.search]);

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(p => {
      const cityMatch = searchCity === '' || p.city.toLowerCase().includes(searchCity.toLowerCase()) || p.address.toLowerCase().includes(searchCity.toLowerCase());
      const typeMatch = propertyType === 'All' || p.type === propertyType;
      const bedsMatch = beds === 'All' || p.bedrooms >= parseInt(beds);
      
      let priceMatch = true;
      if (priceRange !== 'All') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
          priceMatch = p.price >= min && p.price <= max;
        } else {
          priceMatch = p.price >= min;
        }
      }
      
      return cityMatch && typeMatch && priceMatch && bedsMatch;
    });
  }, [searchCity, propertyType, priceRange, beds]);

  const clearFilters = () => {
    setSearchCity('');
    setPropertyType('All');
    setPriceRange('All');
    setBeds('All');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header & Search Bar */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Search Properties</h1>
            <p className="text-gray-500">Find your perfect home in Riverview, Brandon, and Tampa.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center px-4 py-3 bg-white rounded-2xl border border-gray-200 transition-all">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="City, Address, or Zip..." 
                  className="bg-transparent border-none w-full text-sm focus:ring-0 outline-none text-gray-900"
                  value={searchCity}
                  onChange={(e) => setSearchCity(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.target as HTMLInputElement).blur()}
                />
                {searchCity && (
                  <button onClick={() => setSearchCity('')} className="text-gray-400 hover:text-gray-600">
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="w-full md:w-48 flex items-center px-4 py-3 bg-white rounded-2xl border border-gray-200">
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

              <div className="w-full md:w-48 flex items-center px-4 py-3 bg-white rounded-2xl border border-gray-200">
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

              <div className="w-full md:w-40 flex items-center px-4 py-3 bg-white rounded-2xl border border-gray-200">
                <Filter className="h-5 w-5 text-gray-400 mr-3" />
                <select 
                  className="bg-transparent border-none w-full text-sm focus:ring-0 text-gray-900"
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                >
                  <option value="All">Beds (Any)</option>
                  <option value="1">1+ Beds</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="4">4+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            {filteredProperties.length} Properties Found
          </h2>
          {(searchCity || propertyType !== 'All' || priceRange !== 'All' || beds !== 'All') && (
            <button 
              onClick={clearFilters}
              className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center"
            >
              <X className="h-4 w-4 mr-1" />
              Clear Filters
            </button>
          )}
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProperties.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200 shadow-sm">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="h-10 w-10 text-gray-300" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No matches found</h3>
            <p className="text-gray-500 max-w-xs mx-auto">We couldn't find any properties matching your current filters. Try broadening your search.</p>
            <button 
              onClick={clearFilters}
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
