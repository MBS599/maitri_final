import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  schemaData?: object | object[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  schemaData
}) => {
  const siteName = 'Maitri Welfare Foundation';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | NGO in Katraj, Pune`;
  const siteUrl = 'https://maitriwelfarefoundation.org';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      {ogImage && (
        <>
          <meta property="og:image" content={`${siteUrl}${ogImage}`} />
          <meta property="og:image:width" content={ogImageWidth || "1200"} />
          <meta property="og:image:height" content={ogImageHeight || "630"} />
        </>
      )}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}

      {/* Structured Data */}
      {schemaData && (
        Array.isArray(schemaData) ? (
          schemaData.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        )
      )}
    </>
  );
};

export default SEO;
