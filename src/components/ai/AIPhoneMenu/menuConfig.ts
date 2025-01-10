import { Brain, Heart, Pill, Database, User } from 'lucide-react';
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { 
    icon: Brain, 
    label: 'AI Dietary and Lifestyle',
    description: 'Get personalized dietary recommendations and lifestyle advice based on your health profile and medical history.',
    features: [
      'Personalized meal planning and nutrition advice',
      'Activity and exercise recommendations',
      'Lifestyle modifications for better health',
      'Progress tracking and adjustments'
    ]
  },
  { 
    icon: Heart, 
    label: 'AI Health Description',
    description: 'Receive detailed analysis of your health status and potential areas for improvement.',
    features: [
      'Comprehensive health assessment',
      'Risk factor identification',
      'Preventive health recommendations',
      'Health goal setting and tracking'
    ]
  },
  { 
    icon: Pill, 
    label: 'AI Medicine Information',
    description: 'Access detailed information about medications, including potential interactions and side effects.',
    features: [
      'Medication information and usage guidelines',
      'Drug interaction checker',
      'Side effect information',
      'Reminder settings for medications'
    ]
  },
  { 
    icon: Database, 
    label: 'AI Medical Database',
    description: 'Search and analyze medical information from trusted healthcare databases.',
    features: [
      'Evidence-based medical information',
      'Latest research and studies',
      'Treatment options comparison',
      'Medical terminology explanations'
    ]
  },
  { 
    icon: User, 
    label: 'About Me AI',
    description: 'View and manage your personal health profile and AI preferences.',
    features: [
      'Health profile management',
      'AI interaction history',
      'Preference settings',
      'Data privacy controls'
    ]
  }
];