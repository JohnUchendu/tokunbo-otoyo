import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Labour and Employment law service | K.K. Ubani & Co. ",
  description:
    "Expert labour and employment services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
};

const LabourAndEmployment = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Labour & Employment Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Protecting Employers and Employees
        </h2>
        <p className="mt-2 text-gray-600">
          K.K. Ubani & Co. provides expert legal guidance on employment rights,
          workplace policies, and labor disputes, ensuring compliance with
          Nigerian labor laws.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Labour Law Matters?
        </h2>
        <p className="mt-2 text-gray-600">
          A well-structured employment framework is essential for maintaining a
          productive work environment. Employers must adhere to labor laws
          regarding hiring, termination, employee rights, and workplace
          disputes.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Employment Contracts & Policies</strong>
            Drafting and reviewing contracts, employee handbooks, and workplace
            policies.
          </li>
          <li>
            <strong>Workplace Dispute Resolution</strong>
            Handling wrongful termination, discrimination claims, and labor
            disputes.
          </li>
          <li>
            <strong>Regulatory Compliance</strong>
            Ensuring businesses comply with Nigerian labor laws and
            international labor standards.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We provide strategic legal advice to businesses and employees,
          ensuring fair labor practices and workplace stability.
        </p>
      </div>
    </>
  );
};

export default LabourAndEmployment;
