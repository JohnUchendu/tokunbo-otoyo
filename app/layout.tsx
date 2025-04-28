import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google"; // Replace with your desired font
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import CallWidget from "@/components/CallWidget";



const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Tokunbo Otoyo & Co.",
  description: "The Number 1 law firm in Akwa Ibom ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={garamond.variable}
      >
        <CallWidget/>
        <Topbar/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
