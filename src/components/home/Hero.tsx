
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FadeIn from '../animation/FadeIn';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeIn delay={0.1} direction="up">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                Full-Stack Developer
              </span>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <h1 className="font-bold">
                Suraj Ingole
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.5} direction="up">
              <p className="text-xl text-muted-foreground">
                I design and build applications that are intuitive, efficient, and deliver exceptional user experiences with expertise in React, Angular, Node.js and .NET Core.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.7} direction="up">
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} direction="left" className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 aspect-square rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
