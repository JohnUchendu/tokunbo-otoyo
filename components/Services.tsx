'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  { title: 'Corporate', image: '/images/corporate.jpg', description: 'Expert legal guidance for corporate governance and compliance.' },
  { title: 'Commercial', image: '/images/commercial.jpg', description: 'Legal solutions for commercial transactions and trade agreements.' },
  { title: 'Energy and Natural Resources', image: '/images/energy.jpg', description: 'Advising on energy regulations and natural resource management.' },
  { title: 'Telecommunication', image: '/images/telecom.jpg', description: 'Legal counsel for telecom operators and regulatory compliance.' },
  { title: 'Aviation', image: '/images/aviation.jpg', description: 'Expertise in aviation law, compliance, and regulatory matters.' },
  { title: 'Taxation', image: '/images/taxation.jpg', description: 'Comprehensive tax advisory and compliance services.' },
  { title: 'Commercial Litigation', image: '/images/litigation.jpg', description: 'Handling complex commercial disputes effectively.' },
  { title: 'Alternative Dispute Resolution', image: '/images/adr.jpg', description: 'Expert mediation and arbitration services for dispute resolution.' },
  { title: 'Project Finance', image: '/images/finance.jpg', description: 'Structuring and financing large-scale projects efficiently.' },
  { title: 'Shipping and Maritime', image: '/images/shipping.jpg', description: 'Legal services for maritime businesses and shipping operations.' },
  { title: 'Foreign Investment', image: '/images/investment.jpg', description: 'Guiding foreign investors through legal frameworks and compliance.' },
  { title: 'Banking and Finance', image: '/images/banking.jpg', description: 'Advisory services for banking regulations and financial transactions.' },
  { title: 'Real Estate', image: '/images/realestate.jpg', description: 'Legal expertise in property transactions and real estate development.' },
  { title: 'Labour / Employment', image: '/images/labour.jpg', description: 'Providing legal support for employment laws and workplace policies.' },
  { title: 'Intellectual Property', image: '/images/ip.jpg', description: 'Protecting trademarks, patents, and copyrights effectively.' },
  { title: 'Entertainment', image: '/images/entertainment.jpg', description: 'Legal counsel for media, entertainment, and creative industries.' },
];

export default function OurServices() {
  return (
    <div className="bg-gray-100 py-16 px-8">
      <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="flex bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-1/3">
              <Image src={service.image} alt={service.title} width={150} height={150} className="object-cover h-full w-full" />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
