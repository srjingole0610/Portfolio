
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { selectProject, clearSelectedProject } from '@/store/slices/projectsSlice';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import FadeIn from '@/components/animation/FadeIn';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selectedProject, projects } = useAppSelector(state => state.projects);

  useEffect(() => {
    if (id) {
      dispatch(selectProject(id));
    }

    return () => {
      dispatch(clearSelectedProject());
    };
  }, [dispatch, id]);

  if (!selectedProject) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate('/projects')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedProject.title}</h1>
                  <p className="text-xl text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubUrl && (
                    <Button asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                        <Github className="mr-2 h-5 w-5" /> View Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRight className="mr-2 h-5 w-5" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.3}>
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Additional project images would go here */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="aspect-video rounded-lg bg-secondary animate-pulse"></div>
                <div className="aspect-video rounded-lg bg-secondary animate-pulse"></div>
                <div className="aspect-video rounded-lg bg-secondary animate-pulse"></div>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-24">
            <FadeIn direction="up">
              <h2 className="text-3xl font-semibold mb-8">More Projects</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(project => project.id !== selectedProject.id)
                .slice(0, 3)
                .map((project, index) => (
                  <FadeIn key={project.id} delay={index * 0.2} direction="up">
                    <div className="group overflow-hidden rounded-xl border border-border bg-card hover:shadow-md transition-all duration-300">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium mb-2">{project.title}</h3>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            dispatch(selectProject(project.id));
                            navigate(`/projects/${project.id}`);
                          }}
                        >
                          View Project
                        </Button>
                      </div>
                    </div>
                  </FadeIn>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
