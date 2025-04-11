"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonial";
import Hero from "@/components/Hero";

const attorneys = [
  {
    name: "Kenneth K. Ubani",
    office: "Principal Partner",
    image: "/our-attorneys/kennethkelechiubani.PNG",
    bioUrl: "/our-attorneys/kenneth-kelechi-ubani",
    intro:
      "Kenneth K. Ubani is a seasoned corporate lawyer with 15+ years of experience in litigation, business law, and regulatory compliance.",
  },
  {
    name: "Deborah N. Ikechukwu",
    office: "Associate",
    image: "/our-attorneys/deborah.PNG",
    bioUrl: "/our-attorneys/deborah-ikechukwu",
    intro:
      "One of Deborah’s greatest strength is her ability to manage client relationship with ease.",
  },
  {
    name: "Stephen I. Nwoko",
    office: "Associate",
    image: "/our-attorneys/stephen.PNG",
    bioUrl: "/our-attorneys/stephen-nwoko",
    intro:
      "Stephen is a graduate of University of Calabar a member of the Nigerian Bar Association and the Young Lawyers Forum Port Harcourt.",
  },
  {
    name: "Ada A. Nwigwe",
    office: "Associate",
    image: "/our-attorneys/ada.PNG",
    bioUrl: "/our-attorneys/ada-nwigwe",
    intro:
      "Ada's passion for commercial and energy law is driven by her desire to help companies navigate the complex legal landscape surrounding these industries",
  },
  {
    name: "Victor Ubochi",
    office: "Associate",
    image: "/our-attorneys/victor.PNG",
    bioUrl: "/our-attorneys/victor-ubochi",
    intro:
      "Throughout his career, he has been extensively involved in settling high-ranking and sensitive legal claims for multinational corporations"
    },
  {
    name: "Emeka M. Peters",
    office: "Associate",
    image: "/our-attorneys/emeka.PNG",
    bioUrl: "/our-attorneys/emeka-peters",
    intro:
      "Emeka is a Member of the Firm’s Property Law and Real estate Practice.",
  },
  {
    name: "James E.Uro",
    office: "Associate",
    image: "/our-attorneys/james.PNG",
    bioUrl: "/our-attorneys/james-uro",
    intro:
      "James E. Uro is known for his dedication to his clients' interests, meticulous attention to detail, and ability to unravel complex legal challenges"
  },
];

const OurAttorneys = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 pt-6">
          Our Attorneys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                <Image
                  src={attorney.image}
                  alt={attorney.name}
                  width={300}
                  height={300}
                  className="rounded-lg w-full h-60 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{attorney.name}</h3>
                <p className="text-gray-500">{attorney.office}</p>
                <p className="text-gray-700 text-sm mt-2">{attorney.intro}</p>
                <Link href={attorney.bioUrl} rel="noopener noreferrer">
                  <Button className="mt-4 w-full bg-blue-900">
                    Read Full Bio
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Testimonials />
      <Hero/>
    </div>
  );
};

export default OurAttorneys;
