import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gamini Super City | Trusted Supermarket in Kalawana",
  description: "Visit Gamini Super City in Kalawana for fresh groceries, vegetables, household essentials, and daily needs at affordable prices.",
  keywords: "Supermarket in Kalawana, Grocery store Kalawana, Fresh vegetables Kalawana, Best supermarket in Kalawana",
  openGraph: {
    title: "Gamini Super City | Trusted Supermarket in Kalawana",
    description: "Your neighborhood supermarket providing fresh produce, groceries, and daily necessities.",
    url: "https://gaminisupercity.com",
    siteName: "Gamini Super City",
    locale: "en_LK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              "name": "Gamini Super City",
              "image": "",
              "@id": "",
              "url": "",
              "telephone": "0452 255 521",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No.34 Manana",
                "addressLocality": "Kalawana",
                "postalCode": "70450",
                "addressCountry": "LK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 6.417382,
                "longitude": 80.407267
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:30",
                "closes": "21:00"
              }
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
