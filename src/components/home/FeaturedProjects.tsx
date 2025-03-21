
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectProject } from '@/store/slices/projectsSlice';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import FadeIn from '../animation/FadeIn';

const FeaturedProjects = () => {
  const { projects } = useAppSelector(state => state.projects);
  const dispatch = useAppDispatch();
  
  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (id: string) => {
    dispatch(selectProject(id));
  };

  return (
    <section className="section">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
              A selection of my recent work and passion projects that showcase my skills and interests.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2} direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
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

        <FadeIn direction="up" delay={0.6}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProjects;
