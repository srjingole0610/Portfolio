
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectProject } from '@/store/slices/projectsSlice';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Github } from 'lucide-react';
import FadeIn from '@/components/animation/FadeIn';

const Projects = () => {
  const { projects } = useAppSelector(state => state.projects);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    dispatch(selectProject(id));
  };

  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

  const filteredProjects = filter 
    ? projects.filter(project => project.technologies.includes(filter))
    : projects;

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                A collection of projects that showcase my skills and experience in web development.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              <Button 
                variant={filter === null ? "default" : "outline"} 
                size="sm"
                onClick={() => setFilter(null)}
              >
                All
              </Button>
              {allTechnologies.map(tech => (
                <Button 
                  key={tech}
                  variant={filter === tech ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setFilter(tech)}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1} direction="up">
                <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map(tech => (
                        <span 
                          key={tech} 
                          className={`px-3 py-1 text-xs rounded-full ${
                            filter === tech 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noreferrer">
                            <ArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      )}
                      <Button size="sm" asChild onClick={() => handleProjectClick(project.id)}>
                        <Link to={`/projects/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
