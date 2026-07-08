import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ojasintl.com"),
  title: {
    default: "Ojas International Pvt. Ltd. | Security Surveillance & Networking",
    template: "%s | Ojas International Pvt. Ltd."
  },
  description:
    "Premium CCTV, security surveillance, networking, fiber optic, access control and IT infrastructure solutions for homes, businesses and institutions.",
  keywords: [
    "CCTV installation",
    "networking solutions",
    "fiber optic",
    "access control",
    "biometric attendance",
    "server installation",
    "Ojas International"
  ],
  openGraph: {
    title: "Ojas International Pvt. Ltd.",
    description: "Advanced security surveillance and reliable networking infrastructure.",
    url: "https://ojasintl.com",
    siteName: "Ojas International Pvt. Ltd.",
    images: [{ url: "/images/og-cover.svg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ojas International Pvt. Ltd.",
    description: "Security surveillance, networking and smart technology solutions.",
    images: ["/images/og-cover.svg"]
  },
  alternates: {
    canonical: "https://ojasintl.com"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${space.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
