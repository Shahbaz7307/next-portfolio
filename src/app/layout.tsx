import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { Inter } from "next/font/google";
import Loader from "@/components/layout/Loader";
import MouseGlow from "@/components/ui/MouseGlow";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahbaz Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#ffffff" height={2} showSpinner={false} />

        <Loader />

        <SmoothScroll />

        <MouseGlow />

        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
