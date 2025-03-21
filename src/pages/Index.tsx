
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Skills from '@/components/home/Skills';
import ContactSection from '@/components/home/Contact';
import Layout from '@/components/layout/Layout';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <ContactSection />
    </Layout>
  );
};

export default Index;
