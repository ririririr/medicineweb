import React from 'react';
import ProductComparison from './ProductComparison';
import ContactInfo from './ContactInfo';
import AIPlusOverview from './AIPlusOverview';
import { useLanguage } from '../../context/LanguageContext';

const ShopPage = () => {
  const { translations } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24 snap-section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Medicine AI+</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unlock premium features and experience healthcare reimagined
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-8">
            <AIPlusOverview />
            <ProductComparison />
          </div>
          
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;