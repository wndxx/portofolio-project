// src/components/Skills.jsx
import { technicalSkills, professionalSkills } from "../data/skills";
import SkillItem from "./SkillItem";
import ProfessionalSkillItem from "./ProfessionalSkillItem";

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">
        My <span className="text-primary-500">Skills</span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Technical Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
            <span className="bg-primary-500 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
              </svg>
            </span>
            Technical Skills
          </h3>
          <div className="space-y-3">
            {technicalSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
            <span className="bg-primary-500 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span>
            Professional Skills
          </h3>
          <div className="space-y-4">
            {professionalSkills.map((skill, index) => (
              <ProfessionalSkillItem key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}