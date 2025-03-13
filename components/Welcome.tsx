"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-gray-100">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Kk Ubani & Co Logo"
        width={100}
        height={100}
      />

      {/* Header */}
      <h1 className="text-3xl text-gray-700 font-bold mt-4">
        Welcome to K.K. Ubani & Co
      </h1>

      {/* Gratias Deo Chambers */}
      <p className="text-lg text-gray-600 mt-2">Gratias Deo Chambers</p>

      {/* Dash Design */}
      <div className="w-16 h-1 bg-black my-2"></div>

      {/* Description */}
      <p className="text-gray-700 text-2xl mt-4">
        K. K. Ubani & Co. is a full service commercial and dispute resolution
        law firm with the requisite expertise to meet our individual client’s
        legal needs. In addition, our deep knowledge of Nigeria’s unique
        business environment enhances clients’ attainment of their set business
        goals. We merge legal expertise, industrial and wide political
        connections in pursuit of our clients’ best business interest while
        keeping with international best practices.
      </p>

      {/* Call to Action */}
      <div className="mt-6">
        <p className="text-lg text-gray-700 font-semibold">
          Get Your Consultation
        </p>
        <p className="text-2xl font-bold backdrop-blur-2xl text-yellow-500">
          +234 901 234 5678
        </p>
        <p className="text-sm text-gray-500">Available 365 Days</p>
      </div>
    </div>
  );
}
