
import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/animation/FadeIn';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-4/5 aspect-square rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Sarah Chen</h1>
                <p className="text-lg text-muted-foreground">
                  I'm a full-stack developer with a passion for creating beautiful, functional web applications. With over 5 years of experience in the industry, I've worked on projects ranging from small business websites to large enterprise applications.
                </p>
                <p className="text-lg text-muted-foreground">
                  My approach to development is centered around the user experience, ensuring that every application I build is not only visually appealing but also intuitive and accessible.
                </p>
                <div className="pt-4">
                  <Button asChild>
                    <a href="/resume.pdf" download>
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="mt-24">
            <FadeIn direction="up">
              <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
            </FadeIn>

            <div className="space-y-12">
              <FadeIn direction="up" delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                  </div>
                  <div className="md:col-span-3 space-y-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="text-lg font-medium">B.S. in Computer Science</h4>
                      <p className="text-primary">Stanford University</p>
                      <p className="text-muted-foreground">2014 - 2018</p>
                      <p className="mt-3">
                        Studied core computer science principles with a focus on software engineering and human-computer interaction.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="text-lg font-medium">UI/UX Design Certification</h4>
                      <p className="text-primary">Google</p>
                      <p className="text-muted-foreground">2019</p>
                      <p className="mt-3">
                        Completed an intensive program focused on user-centered design principles and methodologies.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Experience</h3>
                  </div>
                  <div className="md:col-span-3 space-y-6">
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="text-lg font-medium">Senior Frontend Developer</h4>
                      <p className="text-primary">TechCorp Inc.</p>
                      <p className="text-muted-foreground">2021 - Present</p>
                      <p className="mt-3">
                        Lead the frontend development of the company's flagship product, managing a team of developers and implementing modern frontend practices.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="text-lg font-medium">Full-Stack Developer</h4>
                      <p className="text-primary">Startup Hub</p>
                      <p className="text-muted-foreground">2018 - 2021</p>
                      <p className="mt-3">
                        Developed and maintained multiple web applications for various clients, focusing on both frontend and backend technologies.
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                      <h4 className="text-lg font-medium">Freelance Web Developer</h4>
                      <p className="text-primary">Self-Employed</p>
                      <p className="text-muted-foreground">2016 - 2018</p>
                      <p className="mt-3">
                        Created websites and web applications for small businesses and individuals while completing my degree.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
