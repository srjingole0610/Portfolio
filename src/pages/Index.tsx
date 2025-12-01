
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Skills from '@/components/home/Skills';
import ContactSection from '@/components/home/Contact';
import Layout from '@/components/layout/Layout';

import SEO from '@/components/SEO';

const Index = () => {
  return (
    <Layout>
      <SEO 
        title="Suraj Ingole | Full Stack Developer" 
        description="Portfolio of Suraj Ingole, a full-stack developer specializing in React, Node.js, and modern web technologies."
        url="https://surajingoleportfolio.netlify.app/"
      />
      <Hero />
      <FeaturedProjects />
      <Skills />
      <ContactSection />
    </Layout>
  );
};

export default Index;
