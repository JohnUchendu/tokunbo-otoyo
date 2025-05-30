import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Banking and finance law service | K.K. Ubani & Co. ",
  description:
    "Expert banking and finance legal services in Nigeria. Navigate regulations, mergers, acquisitions, and compliance with K.K. Ubani & Co.",
};

const BankingAndFinance = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pt-20 font-bold text-gray-900">
          Banking & Finance Law
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-4">
          Comprehensive Legal Support for Financial Transactions
        </h2>
        <p className="mt-2 text-gray-600">
          K.K. Ubani & Co. provides expert legal services for banking, financial
          transactions, and investment management, ensuring compliance with
          regulatory requirements and industry best practices.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Banking & Finance Law Matters?
        </h2>
        <p className="mt-2 text-gray-600">
          Financial transactions require robust legal frameworks to protect
          institutions, investors, and individuals. Regulatory non-compliance
          can lead to significant legal and financial risks.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Our Expertise
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>
            <strong>Regulatory Compliance</strong>
            Advising financial institutions on compliance with Nigerian banking
            regulations.
          </li>
          <li>
            <strong>Loan & Credit Agreements</strong>
            Structuring and negotiating loan facilities and credit transactions.
          </li>
          <li>
            <strong> Investment Advisory</strong>
            Providing legal support for investments, securities, and asset
            management.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-700 mt-6">
          Why Choose Us?
        </h2>
        <p className="mt-2 text-gray-600">
          Our team ensures financial transactions are legally sound, protecting
          clients from risks and regulatory penalties.
        </p>
      </div>
    </>
  );
};

export default BankingAndFinance;
