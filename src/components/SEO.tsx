/* eslint-disable react-refresh/only-export-components */
import { Helmet } from 'react-helmet-async';



const SEO = ({ 
  title, 
  description, 
  image = '/og-image.png', 
  url = 'https://surajingoleportfolio.netlify.app/', 
  type = 'website' 
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
}) => {
  const siteTitle = 'Suraj Ingole | Full Stack Developer';
  const fullTitle = title === siteTitle ? title : `${title} | Suraj Ingole`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
