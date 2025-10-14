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
    default: "Nycayen | The Art of Hair - Empower Through Beauty",
    template: "%s | Nycayen",
  },
  description: "Empower Through Beauty—Boosting Confidence via Personalized Hair Styling. Transforming lives by enhancing natural beauty and building confidence through the art of hair.",
  keywords: ["hair styling", "beauty", "confidence", "personalized", "salon", "hair transformation"],
  authors: [{ name: "Nycayen" }],
  creator: "Nycayen",
  metadataBase: new URL("https://nycayen.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nycayen.com",
    title: "Nycayen | The Art of Hair - Empower Through Beauty",
    description: "Empower Through Beauty—Boosting Confidence via Personalized Hair Styling",
    siteName: "Nycayen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nycayen | The Art of Hair - Empower Through Beauty",
    description: "Empower Through Beauty—Boosting Confidence via Personalized Hair Styling",
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
        className={`${cormorant.variable} ${inter.variable} min-h-screen bg-neo-dark text-neo-tan font-inter antialiased`}
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
