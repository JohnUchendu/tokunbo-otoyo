"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
  "/logos/logo6.png",
];

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden bg-gray-100 py-6">
        <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
      <div className="w-full flex justify-center">
        <motion.div
          className="flex space-x-10"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 15, // Adjust speed
            repeat: Infinity,
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt="Client Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
