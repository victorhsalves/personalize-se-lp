import { BRAND, CONTACT, LOCATION, BUSINESS_HOURS, FOOTER } from "@/lib/constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "LocalBusiness" | "Product";
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: BRAND.name,
          url: siteUrl,
          logo: `${siteUrl}/android-chrome-512x512.png`,
          description: `${BRAND.mission} Localizada em ${LOCATION.city}, ${LOCATION.state}.`,
          address: {
            "@type": "PostalAddress",
            addressCountry: LOCATION.countryCode,
            addressRegion: LOCATION.stateCode,
            addressLocality: LOCATION.city,
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: CONTACT.phone,
            contactType: "customer service",
            email: CONTACT.email,
            areaServed: {
              "@type": "City",
              name: LOCATION.city,
            },
            availableLanguage: "pt-BR",
          },
          sameAs: [
            CONTACT.whatsapp,
            "https://instagram.com/personalize_se.slz",
            // "https://facebook.com/personalize-se",
          ],
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: BRAND.name,
          url: siteUrl,
          description: BRAND.mission,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${siteUrl}/products?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        };

      case "LocalBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": siteUrl,
          name: BRAND.name,
          image: `${siteUrl}/android-chrome-512x512.png`,
          description: `${BRAND.mission} Localizada em ${LOCATION.city}, ${LOCATION.state}.`,
          url: siteUrl,
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: {
            "@type": "PostalAddress",
            addressCountry: LOCATION.countryCode,
            addressRegion: LOCATION.stateCode,
            addressLocality: LOCATION.city,
            addressArea: LOCATION.state,
          },
          areaServed: {
            "@type": "City",
            name: LOCATION.city,
            containedIn: {
              "@type": "State",
              name: LOCATION.state,
            },
          },
          priceRange: "$$",
          geo: {
            "@type": "GeoCoordinates",
            latitude: LOCATION.coordinates.latitude,
            longitude: LOCATION.coordinates.longitude,
            addressLocality: LOCATION.city,
            addressRegion: LOCATION.stateCode,
            addressCountry: LOCATION.countryCode,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: BUSINESS_HOURS.weekdays.days,
              opens: BUSINESS_HOURS.weekdays.opens,
              closes: BUSINESS_HOURS.weekdays.closes,
            },
          ],
          sameAs: [
            CONTACT.whatsapp,
            FOOTER.links.instagram,
            // FOOTER.links.facebook,
          ],
        };

      case "Product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          ...data,
        };

      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

