import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const helveticaNeue = localFont({
  src: "../public/fonts/HelveticaNeueMedium.woff2",
  variable: "--font-helvetica-neue",
  weight: "500",
  style: "normal",
  display: "swap",
});

const ppEditorialNewItalic = localFont({
  src: "../public/fonts/66f7fc2a92d54c5a94804e33_PPEditorialNew-Italic.woff2",
  variable: "--font-pp-editorial-new-italic",
  weight: "400",
  style: "italic",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HM Collection",
  description: "Online iPhone store by Hope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body
        className={`${helveticaNeue.variable} ${ppEditorialNewItalic.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <GoogleAnalytics gaId={gaId} />
        {children}
      </body>
    </html>
  );
}
