import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raqamly | Fantastik IT & Raqamlashtirish Kompaniyasi",
  description: "Sirdaryo va O'zbekiston bo'ylab eng innovatsion veb-saytlar, Telegram botlar, ERP va CRM tizimlarni yaratish.",
  keywords: "IT kompaniya, veb sayt yaratish, Telegram bot, ERP tizim, CRM, Sirdaryo, Raqamly, Guliston, Sun'iy intellekt",
  openGraph: {
    title: "Raqamly | Fantastik IT Yechimlar",
    description: "Biznesingizni zamonaviy texnologiyalar bilan yangi bosqichga olib chiqing.",
    type: "website",
    locale: "uz_UZ",
    url: "https://raqamly.uz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-sans bg-[#030712] text-white min-h-screen flex flex-col antialiased selection:bg-violet-500/30 selection:text-white`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
