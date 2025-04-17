"use client";

import { PhoneCall } from "lucide-react";
import Link from "next/link";

const CallWidget = () => {
  return (
    <Link
      href="tel:+2348036674036" // Replace with your actual number
      className="fixed bottom-24 right-4 z-50 bg-green-600 text-white rounded-full p-4 shadow-lg animate-ping"
      aria-label="Call us"
    >
      <PhoneCall className="w-6 h-6" />
    </Link>
  );
};

export default CallWidget;
