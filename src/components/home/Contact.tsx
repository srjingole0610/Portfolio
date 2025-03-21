
import { useState } from 'react';
import { Mail, Send, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '../animation/FadeIn';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="space-y-6">
              <div className="inline-block p-3 bg-primary/10 text-primary rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <h2>Get In Touch</h2>
              <p className="text-muted-foreground text-lg">
                I'm always interested in new opportunities, collaborations, or just a friendly chat about technology and development.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <div className="h-px flex-1 bg-border"></div>
                  <span className="text-muted-foreground text-sm font-medium">Contact Details</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:suraj.ingole0610@gmail.com" className="hover:text-primary">suraj.ingole0610@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    <a href="tel:+917385300245" className="hover:text-primary">+91 7385300245</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="h-px flex-1 bg-border"></div>
                  <span className="text-muted-foreground text-sm font-medium">Profiles</span>
                  <div className="h-px flex-1 bg-border"></div>
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />GitHub
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://hackerrank.com" target="_blank" rel="noreferrer">HackerRank</a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.3}>
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    placeholder="Your message"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending... <span className="ml-2 animate-spin">⏳</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
