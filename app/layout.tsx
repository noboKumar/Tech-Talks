import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Talks",
  description:
    "A Community Forum for Developers to Share, Collaborate, and Learn",
  icons: {
    icon: "/tech-talks-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="antialiased">
        <NavBar />
        <div className="w-8/12 mx-auto my-5">{children}</div>
      </body>
    </html>
  );
}
