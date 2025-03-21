
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Suraj Ingole</h3>
            <p className="text-muted-foreground">
              A showcase of my work and skills in web development and design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <a 
                href="https://app.netlify.com/teams/srjingole0610/overview" 
                target="_blank" 
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Netlify Projects
              </a>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/srjingole0610" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="http://linkedin.com/in/suraj-ingole-6b10a5123/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:suraj.ingole0610@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Suraj Ingole. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
