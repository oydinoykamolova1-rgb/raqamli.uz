import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raqamly | Sirdaryo IT Raqamlashtirish Kompaniyasi",
  description: "Sirdaryo viloyatidagi eng ishonchli biznes raqamlashtirish, veb-saytlar va Telegram botlar yaratish xizmatlari.",
  keywords: "IT kompaniya, veb-sayt, Telegram bot, CRM, ERP, Sirdaryo, Guliston, raqamlashtirish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans min-h-full flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
