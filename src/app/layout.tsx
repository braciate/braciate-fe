import { Metadata } from "next";
import type React from "react";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { AuthProvider } from "@/app/context/Providers";
import PageTransition from "@/components/loading/PageTransition";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jaoren = localFont({
  src: "../../public/fonts/Jaoren.woff",
  variable: "--font-jaoren",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Braciate",
  description: "Website Braciate",
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${jaoren.variable} font-poppins overflow-x-hidden`}
      >
        <AuthProvider>
          <PageTransition>{children}</PageTransition>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
