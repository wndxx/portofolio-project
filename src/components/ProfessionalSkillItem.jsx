// src/components/ProfessionalSkillItem.jsx
export default function ProfessionalSkillItem({ skill }) {
    return (
      <div className="flex gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border border-gray-200 dark:border-gray-700">
        <div className="text-2xl flex-shrink-0">{skill.icon}</div>
        <div>
          <h4 className="font-bold text-lg mb-1 dark:text-white">{skill.title}</h4>
          <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
        </div>
      </div>
    );
  }