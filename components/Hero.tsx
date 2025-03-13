"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Expert Legal Counsel",
    description: "Providing strategic legal solutions tailored to your needs.",
    buttonText: "Schedule a Consultation",
  },
  {
    image: "/images/slide2.jpg",
    title: "Advocating for Justice",
    description:
      "Committed to protecting your rights with diligence and integrity.",
    buttonText: "Learn More About Our Services",
  },
  {
    image: "/images/slide3.jpg",
    title: "Your Trusted Legal Partner",
    description:
      "Guiding you through complex legal matters with confidence and expertise.",
    buttonText: "Contact Us Today",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className={`relative w-full h-[500px] ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center px-10 text-white">
              <div className="max-w-lg">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg mb-6">{slide.description}</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
