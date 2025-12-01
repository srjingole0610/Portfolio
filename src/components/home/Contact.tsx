
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Send, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeIn from '../animation/FadeIn';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <a href="http://linkedin.com/in/suraj-ingole-6b10a5123/" target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="https://github.com/srjingole0610" target="_blank" rel="noreferrer">
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.name ? 'border-destructive' : 'border-input'}`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.email ? 'border-destructive' : 'border-input'}`}
                    placeholder="Your email"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    className={`w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.message ? 'border-destructive' : 'border-input'}`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive">{errors.message.message}</p>
                  )}
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

