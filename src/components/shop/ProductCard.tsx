import React from 'react';
import { LucideIcon } from 'lucide-react';
import CreateImageButton from './CreateImageButton';
import { useLanguage } from '../../context/LanguageContext';

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  price: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon: Icon, name, price, description }) => {
  const { translations } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <Icon size={24} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            {translations.shop.addToCart}
          </button>
        </div>
        <CreateImageButton />
      </div>
    </div>
  );
};

export default ProductCard;