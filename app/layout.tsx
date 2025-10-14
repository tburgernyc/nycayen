import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Chatbot } from "@/components/Chatbot";

// Cormorant Garamond - Headings & Titles
// Sharp editorial serifs, angular, sophisticated
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Inter - Body & UI
// Geometric precision, clean, modern
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nycayen Moore | Expert Hair Styling Services for Men and Women",
    template: "%s | Nycayen Moore",
  },
  description: "Get the perfect look with our expert hair styling services anywhere in the US. Nycayen Moore specializes in men's grooming, bridal hair styling, and personalized hair styling for any occasion.",
  keywords: ["hair styling", "expert hair stylist", "men's grooming", "bridal hair", "wedding hair", "personalized styling", "NY hair salon", "professional hairstylist"],
  authors: [{ name: "Nycayen Moore" }],
  creator: "Nycayen Moore",
  metadataBase: new URL("https://nycayen.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nycayen.com",
    title: "Nycayen Moore | Expert Hair Styling Services for Men and Women",
    description: "Get the perfect look with our expert hair styling services anywhere in the US",
    siteName: "Nycayen Moore",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nycayen Moore | Expert Hair Styling Services for Men and Women",
    description: "Get the perfect look with our expert hair styling services anywhere in the US",
    creator: "@nycayenmoore",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${inter.variable} min-h-screen bg-neo-black text-neo-almond font-inter antialiased`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Chatbot />
      </body>
    </html>
  );
}
