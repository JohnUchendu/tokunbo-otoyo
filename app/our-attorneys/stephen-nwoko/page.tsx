"use client";

import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const StephenBio = () => {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/attorneys/stephen.PNG"
            alt="Stephen I. Nwoko"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
          Stephen I. Nwoko
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">
         Associate
        </p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Stephen is is a graduate of University of Calabar, a member of the
            Nigerian Bar Association and the Young Lawyers Forum, Port Harcourt.
            His veracity in the Nigerian Legal System dates back to his
            undergraduate days.<br/><br/> He was called to the Nigerian Bar in 2022 with
            an outstanding 2.1 grade. He has shown exceptional skills in key
            areas such as commercial litigation, entertainment and sports law
            respectively. His desire to grow is like no other.<br/><br/> He is an avid
            reader and a keen researcher who loves to venture into new and
            emerging areas of the legal practice, which makes him an valuable
            asset to the firm and anyone seeking legal . He is a highly
            motivated individual who is passionate about using his legal
            expertise to help clients navigate legal issues.<br/><br/> Despite his many
            accomplishments, he remains grounded and committed to serving his
            clients with the highest level of professionalism and integrity. He
            is a team player who believes in collaborating with his colleagues
            to achieve the best possible outcomes for his clients.
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

export default StephenBio;
