import React from 'react';
import { services } from '@/components/data';

const ServicesPage = () => {
  return (
    <main className="relative bg-blue-500 flex flex-col items-center overflow-hidden mx-auto py-16 sm:px-10 px-5">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-white mb-10">Our Services</h1>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;
