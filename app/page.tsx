import type { Metadata } from "next";
import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";
// import Solution from "@/components/Solution";

import React from "react";
import Testimonials from "../components/Testimonial";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    images: "/our-attorneys/tokunbootoyo.jpeg",
  },
  title: "TOKUNBO OTOYO and Co.",
  description: "Number One law firm with Tokunbo Otoyo & Co.",
  generator: "",
  applicationName: "TOKUNBO OTOYO and Co.",
  referrer: "origin-when-cross-origin",
  keywords: ["TOKUNBO OTOYO and Co.", "Gratias Deo Chambers"],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <OurServices />
      <Testimonials />
      {/* <Solution /> */}
      <ClientLogos />
    </div>
  );
};

export default page;
