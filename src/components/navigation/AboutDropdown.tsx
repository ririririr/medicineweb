import React, { useState, useRef, useEffect } from 'react';
import { Users, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface AboutDropdownProps {
  setCurrentPage: (page: string) => void;
}

const AboutDropdown: React.FC<AboutDropdownProps> = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
      >
        <Users size={20} />
        <span>{translations.nav.about}</span>
        <ChevronDown size={16} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg py-2 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <button
            onClick={() => {
              setCurrentPage('what-we-do');
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-blue-400/20 transition-colors"
          >
            {translations.nav.whatWeDo}
          </button>
          <button
            onClick={() => {
              setCurrentPage('our-mission');
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-blue-400/20 transition-colors"
          >
            {translations.nav.ourMission}
          </button>
          <button
            onClick={() => {
              setCurrentPage('who-we-are');
              setIsOpen(false);
            }}
            className="w-full text-left px-4 py-2 hover:bg-blue-400/20 transition-colors"
          >
            {translations.nav.whoWeAre}
          </button>
        </div>
      )}
    </div>
  );
};