import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import Welcome from "@/components/Welcome";

import React from "react";

const page = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Welcome/>
    </div>
  );
};

export default page;
