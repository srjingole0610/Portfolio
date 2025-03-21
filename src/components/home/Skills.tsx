
import { CodeIcon, LayoutIcon, PaintbrushIcon, ServerIcon } from 'lucide-react';
import FadeIn from '../animation/FadeIn';

const skills = [
  {
    title: "Frontend Development",
    description: "Creating responsive, intuitive user interfaces with modern frameworks and libraries.",
    icon: <LayoutIcon className="h-10 w-10" />,
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications and APIs to power web applications.",
    icon: <ServerIcon className="h-10 w-10" />,
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    title: "UI/UX Design",
    description: "Designing beautiful, user-centered interfaces that enhance the user experience.",
    icon: <PaintbrushIcon className="h-10 w-10" />,
    technologies: ["Figma", "Adobe XD", "Design Systems", "Prototyping"]
  },
  {
    title: "Best Practices",
    description: "Following industry best practices to ensure high-quality, maintainable code.",
    icon: <CodeIcon className="h-10 w-10" />,
    technologies: ["Testing", "CI/CD", "Git", "Agile Methodologies"]
  }
];

const Skills = () => {
  return (
    <section className="section bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="mb-4">Skills & Expertise</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A comprehensive set of skills that enable me to build complete, polished applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <FadeIn key={skill.title} delay={index * 0.2} direction="up">
              <div className="bg-background rounded-xl p-6 h-full border border-border transition-all duration-300 hover:shadow-md">
                <div className="text-primary mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
