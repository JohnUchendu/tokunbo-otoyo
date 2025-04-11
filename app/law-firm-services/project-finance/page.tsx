import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Project Finance law service | K.K. Ubani & Co. ",
  description:
    "Expert  project finance legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
};

const ProjectFinance = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Project Finance Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Legal Advisory for Large-Scale Projects
        </h2>
        <p className="mt-2 text-gray-600">
          We provide legal support for infrastructure projects, public-private
          partnerships (PPP), and private-sector investments in Nigeria.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Project Finance Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Large-scale infrastructure projects require careful legal structuring
          to mitigate risks, ensure compliance, and secure funding.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>PPP Agreements</strong>
            Structuring partnerships between public and private entities.
          </li>
          <li>
            <strong>Risk Assessment & Mitigation </strong>
            Identifying and minimizing legal risks in project financing.
          </li>
          <li>
            <strong>Regulatory Compliance</strong>
            Ensuring projects meet Nigerian and international legal standards.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We provide comprehensive legal solutions to support successful project
          execution and financing.
        </p>
      </div>
    </>
  );
};

export default ProjectFinance;
