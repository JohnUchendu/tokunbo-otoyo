import AboutUs from "@/components/AboutUs";
import ClientLogos from "@/components/clients";
import Hero from "@/components/Hero";
import OurServices from "@/components/Services";

import Welcome from "@/components/Welcome";
import Solution from "@/components/Solution";

import React from "react";
import Testimonials from "../components/Testimonial";

const page = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <OurServices />
      <Testimonials/>
      {/* <Solution /> */}
      <ClientLogos />
    </div>
  );
};

export default page;
