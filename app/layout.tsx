import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/ui/CustomCursor";
import { Syne, DM_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Arpit Yadav — Full-Stack Developer for Businesses & Brands",
  description:
    "Full-stack developer from New Delhi specialising in conversion-focused websites for small businesses and D2C brands. Not just pretty pages — systems that bring in customers.",
  keywords: ["freelance web developer Delhi", "full-stack developer India", "Next.js developer", "D2C website", "business website India"],
  authors: [{ name: "Arpit Yadav" }],
  openGraph: {
    title: "Arpit Yadav — Full-Stack Developer",
    description: "Websites that work as hard as you do.",
    type: "website",
  },
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${syne.variable} ${dmSans.variable}`}>
      <body className="bg-black text-white font-dm antialiased overflow-x-hidden">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}