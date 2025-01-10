import React from 'react';

interface AboutDropdownItemProps {
  onClick: () => void;
  label: string;
}

export const AboutDropdownItem: React.FC<AboutDropdownItemProps> = ({ onClick, label }) => (
  <button
    onClick={onClick}
    className="w-full text-left px-4 py-2 hover:bg-blue-400/20 transition-colors"
  >
    {label}
  </button>
);