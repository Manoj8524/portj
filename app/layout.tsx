import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import FloatingContactButton from "@/components/main/FloatingContactButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#1a0033] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
