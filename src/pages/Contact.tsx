
import Layout from '@/components/layout/Layout';
import ContactSection from '@/components/home/Contact';
import FadeIn from '@/components/animation/FadeIn';

const Contact = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                Have a question or want to work together? Fill out the form below or contact me through social media.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
      <ContactSection />
    </Layout>
  );
};

export default Contact;
