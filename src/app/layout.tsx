import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Memecoin — a chaotic, playful crypto landing",
  description: "BrainRot Memecoin is a bold, meme-ready landing that invites you to explore the token, learn the basics, and join a playful, fast-moving community.",
  keywords: ["brainrot", "memecoin", "crypto", "meme-coin", "token", "buy steps", "roadmap", "tokenomics", "community"],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "BrainRot Memecoin — a chaotic, playful crypto landing",
    description: "BrainRot Memecoin is a bold, meme-ready landing that invites you to explore the token, learn the basics, and join a playful, fast-moving community.",
    type: "website",
    url: "/",
    siteName: "BrainRot Coin",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "BrainRot Memecoin"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Memecoin — a chaotic, playful crypto landing",
    description: "BrainRot Memecoin is a bold, meme-ready landing that invites you to explore the token, learn the basics, and join a playful, fast-moving community.",
    images: [
      "/images/logo.svg"
    ]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
