import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Ethiopic } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const notoEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-ethiopic",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "HydroFix Plumbing Services | 24/7 Expert Plumbers | ሃይድሮፊክስ የቧንቧ አገልግሎት",
  description: "Fast, reliable plumbing service available 24/7 in English and Amharic (አማርኛ). 24/7 emergency repairs, drain cleaning, leak detection, and pipe installations.",
  keywords: ["plumber", "emergency plumbing", "drain cleaning", "leak detection", "water heater repair", "HydroFix Plumbing", "የቧንቧ አገልግሎት", "የውሃ ቧንቧ ጥገና"],
  openGraph: {
    title: "HydroFix Plumbing Services | 24/7 Expert Plumbers",
    description: "Licensed & insured professional plumbing solutions. Available 24/7 for fast response.",
    type: "website",
    locale: "en_US",
    siteName: "HydroFix Plumbing Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${notoEthiopic.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
