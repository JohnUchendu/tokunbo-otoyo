'use client'


import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";

export default function ServiceAreaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      {children}
    
      <Hero />
      <div className="text-center mt-8 p-3">
        <Button onClick={() => window.history.back()}>Go Back</Button>
      </div>
    </body>
  );
}
