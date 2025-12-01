import Layout from '@/components/layout/Layout';
import FadeIn from '@/components/animation/FadeIn';
import AboutHero from '@/components/about/AboutHero';
import ExperienceTabs from '@/components/about/ExperienceTabs';
import SEO from '@/components/SEO';

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About" 
        description="Learn more about Suraj Ingole, a full-stack developer with expertise in React, Node.js, and more."
        url="https://surajingoleportfolio.netlify.app/about"
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <AboutHero />

          <div className="mt-24">
            <FadeIn direction="up">
              <ExperienceTabs />
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
