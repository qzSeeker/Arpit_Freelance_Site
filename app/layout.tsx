import type { Metadata } from "next";
import { Funnel_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const funnel_display = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arpit Yadav - SDE",
  description: "SDE ► Building AI-powered web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${manrope.variable} ${funnel_display.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
