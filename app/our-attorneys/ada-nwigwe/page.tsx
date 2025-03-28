"use client";

import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AdaBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/our-attorneys/ada.PNG"
            alt="Ada A. Nwigwe"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
        Ada A. Nwigwe
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">Associate</p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Ada is a highly motivated lawyer with a strong interest in
            commercial and energy law. She graduated from Nnamdi Azikiwe
            University with a degree in Law in 2020 and has since pursued her
            passion for the legal profession with great dedication. Ada's
            expertise in commercial and energy law is evident in her exceptional
            knowledge and understanding of complex legal issues in these areas.<br/><br/>
            With a keen eye for detail and a deep understanding of the legal
            system, Ada is always able to provide her clients with the best
            possible representation. Her ability to analyze situations from
            multiple perspectives and identify creative solutions is a testament
            to her skill and dedication as a lawyer.<br/><br/> Ada's passion for
            commercial and energy law is driven by her desire to help companies
            navigate the complex legal landscape surrounding these industries.
            Her ability to provide practical legal advice and help her clients
            understand the legal implications of their actions is highly valued
            by the companies she represents. <br/><br/>Overall, Ada is a highly talented
            and driven lawyer with a deep passion for the law. Her expertise in
            commercial and energy law, combined with her exceptional legal
            skills, make her an invaluable asset to any organization or
            individual seeking legal representation.<br/><br/> She was called to the
            Nigerian Bar in 2022, and is also a member of the Nigerian Bar
            Association.
          </p>
        </div>
      </div>
      <Testimonials />
      <div className="text-center mt-8 p-3">
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    </div>
  );
};

export default AdaBio;
