import FadeIn from '@/components/animation/FadeIn';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const AboutHero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Suraj_Ingole_CV.pdf';
    link.setAttribute('download', 'Suraj_Ingole_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <FadeIn direction="right">
        <div className="relative flex items-center justify-center">
          <Avatar className="w-64 h-64 border-4 border-primary/10 rounded-full overflow-hidden">
            <AvatarImage 
              src="/images/ProfileImage.png"
              alt="Suraj Ingole" 
              className="object-cover w-full h-full"
            />
            <AvatarFallback>SI</AvatarFallback>
          </Avatar>
        </div>
      </FadeIn>

      <FadeIn direction="left" delay={0.3}>
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Suraj Ingole</h1>
          <p className="text-lg text-muted-foreground">
            I'm a full-stack developer with expertise in JavaScript, React, Angular, Node.js, and Express. With over 6.5+ years of professional experience, I've worked on projects ranging from small business websites to large enterprise applications.
          </p>
          <p className="text-lg text-muted-foreground">
            My approach to development is centered around creating high-performance, user-friendly applications that deliver exceptional experiences. I'm passionate about optimizing performance and ensuring applications are scalable, secure, and maintainable.
          </p>
          <div className="pt-4">
            <Button onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default AboutHero;
