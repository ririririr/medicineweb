import React from 'react';
import { Users, ChevronDown } from 'lucide-react';

interface AboutDropdownButtonProps {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  label: string;
}

export const AboutDropdownButton: React.FC<AboutDropdownButtonProps> = ({
  isOpen,
  onClick,
  onMouseEnter,
  label
}) => (
  <button
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
  >
    <Users size={20} />
    <span>{label}</span>
    <ChevronDown 
      size={16} 
      className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
    />
  </button>
);