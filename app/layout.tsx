import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://personalize-se.ilhasoftware.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Personalize-se | Produtos Personalizados",
    template: "%s | Personalize-se",
  },
  description: "Produtos personalizados em São Luís do Maranhão com qualidade impecável. Canecas, camisas e acessórios únicos feitos com criatividade e tecnologia.",
  keywords: [
    "produtos personalizados",
    "canecas personalizadas",
    "camisas personalizadas",
    "personalização",
    "presentes personalizados",
    "canecas corporativas",
    "produtos personalizados são luis",
    "produtos personalizados slz",
    "personalizados são luis",
    "personalizados slz",
    "canecas personalizadas são luis",
    "canecas personalizadas slz",
    "personalização são luis",
    "personalização slz",
    "Maranhão",
    "São Luís",
    "SLZ",
    "São Luís do Maranhão",
  ],
  authors: [{ name: "Personalize-se" }],
  creator: "Personalize-se",
  publisher: "Personalize-se",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Personalize-se",
    title: "Personalize-se | Produtos Personalizados em São Luís",
    description: "Produtos personalizados em São Luís do Maranhão com qualidade impecável. Canecas, camisas e acessórios únicos feitos com criatividade e tecnologia.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Personalize-se Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personalize-se | Produtos Personalizados em São Luís",
    description: "Produtos personalizados em São Luís do Maranhão com qualidade impecável. Canecas, camisas e acessórios únicos feitos com criatividade e tecnologia.",
    images: ["/android-chrome-512x512.png"],
    creator: "@personalize_se",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
