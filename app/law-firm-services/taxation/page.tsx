import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Taxation law service | K.K. Ubani & Co. ",
  description:
    "Expert taxation legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
};

const TaxationLaw = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">Taxation Law</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Tax Compliance and Advisory Services
        </h2>
        <p className="mt-2 text-gray-600">
          K.K. Ubani & Co. provides expert legal support in taxation, ensuring
          businesses comply with Nigerian tax laws while optimizing tax
          efficiency. We assist in tax structuring, compliance, audits, and
          dispute resolution.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Taxation Law Matters
        </h2>
        <p className="mt-2 text-gray-600">
          Tax laws in Nigeria are constantly evolving, and non-compliance can
          lead to significant penalties. Businesses must navigate corporate
          taxes, VAT, and personal tax obligations while maximizing deductions
          and exemptions.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Tax Compliance & Advisory</strong>
            Helping businesses stay compliant with Nigerian tax regulations.
          </li>
          <li>
            <strong>Tax Dispute Resolution </strong>
            Representing clients in tax audits, appeals, and litigation.
          </li>
          <li>
            <strong>Corporate Tax Structuring</strong>
            Advising businesses on tax-efficient structures for growth and
            sustainability.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          We help businesses reduce tax liabilities while ensuring full
          compliance with Nigeria’s taxation laws
        </p>
      </div>
    </>
  );
};

export default TaxationLaw;
