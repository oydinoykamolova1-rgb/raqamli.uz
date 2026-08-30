import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/app/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raqamly | Sirdaryo IT Kompaniyasi — Veb-sayt, Bot, CRM, AI",
  description:
    "Sirdaryo va O'zbekiston bo'ylab yuqori sifatli veb-saytlar, AI Telegram botlar, ERP va CRM boshqaruv tizimlarini professional darajada yaratamiz. Blueprint muhandislik yondashuvi va bepul konsultatsiya!",
  keywords:
    "IT kompaniya, veb sayt yaratish, Telegram bot, ERP tizim, CRM, Sirdaryo, Raqamly, Guliston, Sun'iy intellekt, Next.js, blueprint, raqamlashtirish",
  openGraph: {
    title: "Raqamly | Sirdaryo №1 IT Studio — Blueprint & AI",
    description:
      "Biznesingizni zamonaviy muhandislik yechimlari bilan yangi bosqichga olib chiqing. Veb-sayt, Bot, CRM — bitta jamoadan.",
    type: "website",
    locale: "uz_UZ",
    url: "https://raqamly.uz",
    siteName: "Raqamly",
    images: [
      {
        url: "https://raqamly.uz/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raqamly — Sirdaryodagi IT Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raqamly | Sirdaryodagi #1 IT Studio",
    description:
      "Veb-sayt, AI Telegram bot, CRM/ERP — bitta professional jamoadan.",
    images: ["https://raqamly.uz/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://raqamly.uz",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Raqamly",
  description:
    "Sirdaryo viloyatidagi IT kompaniya. Veb-saytlar, Telegram botlar, CRM va ERP tizimlarini ishlab chiqamiz.",
  url: "https://raqamly.uz",
  telephone: "+998901234567",
  email: "info@raqamly.uz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Guliston",
    addressRegion: "Sirdaryo viloyati",
    addressCountry: "UZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.489444",
    longitude: "68.783333",
  },
  openingHours: "Mo-Su 09:00-22:00",
  priceRange: "$$",
  sameAs: [
    "https://t.me/raqamli_uz",
    "https://t.me/raqamli_uzbot",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0F2A4A] text-[#EDF3F5] min-h-screen flex flex-col antialiased selection:bg-[#E85A24] selection:text-white`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
