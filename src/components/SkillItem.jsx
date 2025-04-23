// src/components/SkillItem.jsx
import { Check } from 'lucide-react';

import { skillLevels } from '../data/skills';

export default function SkillItem({ skill }) {
  const { class: levelClass, icon, bgClass } = skillLevels[skill.level];
  
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg transition-all ${bgClass} hover:shadow-sm`}>
      <div className={`flex-1 flex items-center gap-2 ${levelClass}`}>
        <Check size={16} className="flex-shrink-0" />
        <span className="font-medium dark:text-white">{skill.name}</span>
      </div>
      <div className="flex items-center gap-1 text-sm">
        <span className={`font-mono ${levelClass}`}>{icon}</span>
        <span className="text-gray-500 dark:text-gray-400">{skill.level}</span>
      </div>
    </div>
  );
}