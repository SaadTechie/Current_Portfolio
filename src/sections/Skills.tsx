import { SectionTitle } from '../components/SectionTitle';
import { SkillCard } from '../components/SkillCard';
import { skills } from '../data/portfolio';

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="My Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <SkillCard key={skillGroup.category} {...skillGroup} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};