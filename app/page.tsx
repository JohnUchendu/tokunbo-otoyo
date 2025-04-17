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
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en-GB': '/en-GB',
    },
  },
  openGraph: {
    images: '/our-attorneys/attahochinke.jpeg',
  },
  title: "Attah Ochinke and Co.",
  description: "Number 1 law firm with Attah Ochinke and Co.",
  generator: '',
  applicationName: 'Attah Ochinke and Co.',
  referrer: 'origin-when-cross-origin',
  keywords: ["Attah Ochinke and Co.", "Gratias Deo Chambers"],
  authors: [{ name: "John"}   ],
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
