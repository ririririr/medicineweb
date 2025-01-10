import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  action?: () => void;
  description?: string;
  features?: string[];
}