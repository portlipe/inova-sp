import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inova SP",
  description: " Inovação, Tecnologia e Gestão Estratégica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700;800&family=Red+Hat+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

        <title>Inova SP - Inovação, Tecnologia e Gestão Estratégica</title>
        <meta
          name="description"
          content="Inova SP: Transformamos instituições públicas e privadas por meio da inovação, tecnologia e gestão estratégica. Saiba mais!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Inova SP - Inovação, Tecnologia e Gestão Estratégica" />
        <meta
          property="og:description"
          content="Inova SP: Transformamos instituições públicas e privadas por meio da inovação, tecnologia e gestão estratégica. Saiba mais!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content="" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inova SP - Inovação, Tecnologia e Gestão Estratégica" />
        <meta
          name="twitter:description"
          content="Inova SP: Transformamos instituições públicas e privadas por meio da inovação, tecnologia e gestão estratégica. Saiba mais!"
        />
        <meta name="twitter:image" content="" />

        {/* Keywords */}
        <meta
          name="keywords"
          content="inovação, inovadoras, soluções, tecnologia, gestão estratégica, Inova SP, pesquisa, transformação organizacional, Instituto"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
