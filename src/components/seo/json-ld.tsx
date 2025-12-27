import { SITE_CONFIG } from "@/lib/constants";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jerjen Res Pangalay",
    alternateName: "Yapei",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.links.email,
    telephone: SITE_CONFIG.links.phone,
    jobTitle: "Information Technology Student",
    description: SITE_CONFIG.description,
    sameAs: [
      SITE_CONFIG.links.github,
      SITE_CONFIG.links.linkedin,
    ],
    knowsAbout: [
      "Cloud Computing",
      "Full Stack Development",
      "Machine Learning",
      "Blockchain",
      "AWS",
      "Azure",
      "React",
      "Node.js",
      "Python",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
