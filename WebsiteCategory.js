import React from 'react';

const WebsiteCategory = ({ category, services }) => {
  return (
    <div className="website-category mt-12">
      <h2 className="text-3xl font-bold text-center mb-6">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div className="bg-white p-6 shadow-md rounded-lg text-center" key={index}>
            <i className={`fa ${service.icon} text-6xl text-blue-600`}></i>
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
            <div className="mt-4">
              <p className="font-semibold text-lg">{service.price} / Ksh {service.kshPrice}</p>
            </div>
            <ul className="list-disc list-inside text-left mt-4">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="flex space-x-4 justify-center mt-6">
              <a href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">Get Website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteCategory;
