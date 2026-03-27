import { Property } from '../types';
import { Bed, Bath, Square, MapPin, ArrowRight, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useFavorites } from '../context/FavoritesContext';
import { cn } from '../lib/utils';

interface PropertyCardProps {
  property: Property;
  isFeatured?: boolean;
  key?: string | number;
}

export default function PropertyCard({ property, isFeatured }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(property.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link to={`/property/${property.id}`} className="block w-full h-full">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </Link>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
        
        <div className="absolute top-4 right-4 flex items-center space-x-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(property.id);
            }}
            className={cn(
              "p-2 rounded-xl backdrop-blur-md transition-all shadow-lg",
              favorite 
                ? "bg-red-500 text-white" 
                : "bg-white/90 text-gray-900 hover:bg-red-50 hover:text-red-500"
            )}
          >
            <Heart className={cn("h-5 w-5", favorite && "fill-current")} />
          </button>
          <div className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-3 py-1 rounded-lg shadow-sm">
            ${property.price.toLocaleString()}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-400 text-xs mb-2">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{property.address}, {property.city}</span>
        </div>
        
        <Link to={`/property/${property.id}`} className="block">
          <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-1">
            {property.title}
          </h3>
        </Link>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-50 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-900 font-bold">
              <Bed className="h-4 w-4 mr-1.5 text-blue-600" />
              <span>{property.bedrooms}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Beds</span>
          </div>
          <div className="flex flex-col items-center border-x border-gray-50">
            <div className="flex items-center text-gray-900 font-bold">
              <Bath className="h-4 w-4 mr-1.5 text-blue-600" />
              <span>{property.bathrooms}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center text-gray-900 font-bold">
              <Square className="h-4 w-4 mr-1.5 text-blue-600" />
              <span>{property.sqft}</span>
            </div>
            <span className="text-[10px] text-gray-400 uppercase font-semibold">Sq Ft</span>
          </div>
        </div>

        <Link 
          to={`/property/${property.id}`}
          className="flex items-center justify-center w-full py-3 bg-gray-50 text-gray-900 text-sm font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all"
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}
