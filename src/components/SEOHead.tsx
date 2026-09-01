import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  keywords?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

const SITE_URL = "https://solarisnutri-com.lovable.app";
const DEFAULT_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/cfa0961b-099d-4762-ace1-e2ae3846cf0f/id-preview-67e43c67--40abf203-18fb-48fc-8cc0-e5b115ec36fa.lovable.app-1773000272087.png";

/** Keep descriptions inside the 50–160 character range search engines display. */
const clampDescription = (text: string) => {
  const clean = text.trim().replace(/\s+/g, " ");
  if (clean.length <= 160) return clean;
  const cut = clean.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\-—]$/, "")}...`;
};

const SEOHead = ({ title, description, path, type = "website", image, keywords, jsonLd, noindex }: SEOHeadProps) => {
  const fullUrl = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | Solaris Nutri`;
  // Bundled asset imports resolve to relative paths; crawlers need absolute URLs.
  const resolved = image || DEFAULT_IMAGE;
  const ogImage = resolved.startsWith("http") ? resolved : `${SITE_URL}${resolved.startsWith("/") ? "" : "/"}${resolved}`;
  const metaDescription = clampDescription(description);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Solaris Nutri" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
