import type { Metadata } from "next";
import type React from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const mainFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
});
const subFont = localFont({
  src: "../assets/fonts/Jaoren.woff",
  variable: "--font-jaoren",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Braciate",
  description: "Official braciate website",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${subFont.variable} ${mainFont.className} overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
