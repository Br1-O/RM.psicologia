import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rm-psicologa.com"),

  title: {
    default: "Rocío Marchelli · Psicóloga Clínica",
    template: "%s | RM Psicología Clínica",
  },

  description:
    "Psicóloga clínica. Terapia psicológica online y presencial. Acompañamiento profesional en procesos emocionales, ansiedad, autoestima y bienestar.",

  keywords: [
    "psicóloga",
    "psicología clínica",
    "terapia online",
    "terapia presencial",
    "salud mental",
    "ansiedad",
    "autoestima",
    "psicóloga en Argentina",
  ],

  authors: [{ name: "Rocío Marchelli" }],
  creator: "Bring Online Stds.",
  publisher: "Bring Online Stds.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://rm-psicologa.com",
    languages: {
      "es-AR": "https://rm-psicologa.com",
    },
  },

  openGraph: {
    title: "Rocío Marchelli · Psicóloga Clínica",
    description:
      "Atención psicológica profesional. Terapia online y presencial en español.",
    url: "https://rm-psicologa.com",
    siteName: "RM Psicología Clínica",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rocío Marchelli · Psicóloga Clínica",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rocío Marchelli · Psicóloga Clínica",
    description:
      "Psicóloga clínica. Terapia online y presencial en español.",
    images: ["/og-image.jpg"],
  },

  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className=''
      >

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Psychologist",
              "@id": "https://rm-psicologa.com/#psychologist",
              name: "Rocío Marchelli",
              url: "https://rm-psicologa.com",
              image: "https://rm-psicologa.com/og-image.jpg",
              description:
                "Psicóloga clínica. Atención psicológica online y presencial en Argentina. Acompañamiento terapéutico en ansiedad, autoestima y bienestar emocional.",
              telephone: "+54XXXXXXXXXX", // opcional
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
              },
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              availableLanguage: {
                "@type": "Language",
                name: "Spanish",
              },
              medicalSpecialty: [
                "ClinicalPsychology",
                "MentalHealth",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios psicológicos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Terapia psicológica online",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Terapia psicológica presencial",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.linkedin.com/in/tuusuario",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
