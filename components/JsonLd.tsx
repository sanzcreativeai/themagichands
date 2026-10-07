import { SALON, SITE_URL, SERVICES } from "@/lib/data";

export default function JsonLd() {
  const a = SALON.address;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HairSalon", "HealthAndBeautyBusiness"],
        "@id": `${SITE_URL}#salon`,
        name: SALON.name,
        slogan: SALON.tagline,
        description:
          "Unisex salon and training academy in Mylapore, Chennai offering cutting, colour, smoothening, braiding, grooming and bridal styling.",
        url: SITE_URL,
        telephone: "+91-63851-99005",
        image: `${SITE_URL}/img/room-mirrors.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${a.line1}, ${a.line3}`,
          addressLocality: "Mylapore",
          addressRegion: a.region,
          postalCode: a.postcode,
          addressCountry: a.country,
        },
        areaServed: ["Mylapore", "Chennai"],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: SALON.hours.opens,
            closes: SALON.hours.closes,
          },
        ],
        sameAs: [SALON.instagram],
        award: SALON.award,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Salon services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.name, description: s.blurb },
          })),
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${SITE_URL}#academy`,
        name: "The Magic Hands Academy",
        url: `${SITE_URL}/academy`,
        description:
          "Professional hairdressing training in cutting, colour, styling and supervised salon floor practice, taught inside a working salon in Mylapore, Chennai.",
        telephone: "+91-63851-99005",
        parentOrganization: { "@id": `${SITE_URL}#salon` },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${a.line1}, ${a.line3}`,
          addressLocality: "Mylapore",
          addressRegion: a.region,
          postalCode: a.postcode,
          addressCountry: a.country,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
