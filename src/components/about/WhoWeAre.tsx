import React from 'react';
import { Users, Heart, Star, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const WhoWeAre = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.about.whoWeAre.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {translations.about.whoWeAre.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Users size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {translations.about.whoWeAre.team.title}
            </h3>
            <p className="text-gray-600">
              {translations.about.whoWeAre.team.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Heart size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {translations.about.whoWeAre.passion.title}
            </h3>
            <p className="text-gray-600">
              {translations.about.whoWeAre.passion.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Star size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {translations.about.whoWeAre.expertise.title}
            </h3>
            <p className="text-gray-600">
              {translations.about.whoWeAre.expertise.description}
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Globe size={24} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {translations.about.whoWeAre.global.title}
            </h3>
            <p className="text-gray-600">
              {translations.about.whoWeAre.global.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;