"use client";

import Testimonials from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const DeborahBio = () => {
  return (
    <div>
      <div className="container mx-auto py-12 px-6 pt-30 max-w-3xl ">
        <div className="flex justify-center items-center">
          <Image
            src="/attorneys/deborah.PNG"
            alt=" Deborah N. Ikechukwu"
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center mb-4">
          Deborah N. Ikechukwu
        </h2>
        <p className="text-gray-500 text-center text-lg mb-6">Practice manager/ Senior Associate</p>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg  text-gray-700 leading-relaxed">
            Deborah is a member of the Nigerian Bar Association. She completed
            here undergraduate studies at the prestigious Rivers State
            University and, was called to the Nigerian Bar in 2018.
            <br />
            <br /> She has a good measure of experience in business / corporate
            law, and has worked with Business consultancy firm - NRoute
            Consulting, and the international collaborative law firm - Aedis De
            Lex, before joining our firm in 2022. <br />
            <br />
            Deborah is a highly skilled and accomplished lawyer with a passion
            for communication law, family law and media law. Her dedication to
            these areas is evident in her exceptional knowledge and expertise,
            which she brings to bear in all our cases. With a keen eye for
            detail and a deep understanding of the legal system, Deborah is
            always able to provide our clients with the best possible
            representation.
            <br />
            <br /> In addition to her expertise in communication law, family law
            and media law, Deborah has a bias towards medical law. Her extensive
            knowledge inspired her to obtain a professional diploma in Mental
            Health Studies and her extensive knowledge of this complex area of
            law enable her to provide our clients with the specialized counsel
            they need to navigate the often complicated landscape surrounding
            medical issues.
            <br />
            <br /> One of Deborah’s greatest strength is her ability to manage
            client relationship with ease. She understands that legal matters
            can be stressful and confusing, and she works tirelessly to ensure
            that our clients are fully informed and comfortable with the legal
            process. Her compassionate and empathetic approach allows her to
            establish strong and lasting relationships with our clients, who
            often turn to us for guidance long after their legal matters are
            resolved.
            <br />
            <br />
            Her exceptional administrative skills are also a great asset to the
            firm. She is an avid reader who enjoys exploring new ideas and
            perspectives.
          </p>
        </div>

        <div className="text-center mt-8">
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
        <Testimonials />
    </div>
  );
};

export default DeborahBio;
