import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
  iconSize?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  className = '',
  iconSize = 24
}) => {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center space-y-2 rounded-2xl transition-colors ${className}`}
    >
      <Icon size={iconSize} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

export default ActionButton;