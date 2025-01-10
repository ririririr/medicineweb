import React from 'react';
import { AboutDropdownItem } from './AboutDropdownItem';

interface AboutDropdownMenuProps {
  onClose: () => void;
  onItemClick: (page: string) => void;
  translations: {
    whatWeDo: string;
    ourMission: string;
    whoWeAre: string;
  };
}

export const AboutDropdownMenu: React.FC<AboutDropdownMenuProps> = ({
  onClose,
  onItemClick,
  translations
}) => (
  <div 
    className="absolute top-full left-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg py-2 z-50"
    onMouseLeave={onClose}
  >
    <AboutDropdownItem
      onClick={() => onItemClick('what-we-do')}
      label={translations.whatWeDo}
    />
    <AboutDropdownItem
      onClick={() => onItemClick('our-mission')}
      label={translations.ourMission}
    />
    <AboutDropdownItem
      onClick={() => onItemClick('who-we-are')}
      label={translations.whoWeAre}
    />
  </div>
);