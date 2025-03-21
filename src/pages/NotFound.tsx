
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/animation/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-16 md:py-24 flex items-center justify-center min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn direction="up">
            <h1 className="text-7xl md:text-9xl font-bold mb-6">404</h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">Page Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft className="mr-2 h-5 w-5" /> Return to Home
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
