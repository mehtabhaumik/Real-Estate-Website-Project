import { PROPERTIES } from '../data';
import { useFavorites } from '../context/FavoritesContext';
import PropertyCard from '../components/PropertyCard';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteProperties = PROPERTIES.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Saved Listings</h1>
            <p className="text-gray-500 mt-2 text-sm md:text-base">Your personal collection of dream homes.</p>
          </div>
          <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-3">
            <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-500 fill-red-500" />
            <span className="font-bold text-gray-900 text-sm md:text-base">{favoriteProperties.length} Properties</span>
          </div>
        </div>

        {favoriteProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[40px] p-20 text-center shadow-sm border border-gray-100">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-10 w-10 text-gray-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No saved listings yet</h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto">
              Start exploring our properties and click the heart icon to save the ones you love!
            </p>
            <Link 
              to="/search" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Browse Properties
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
