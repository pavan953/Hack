

// import React from 'react';

const services = [
  { title: "Agriculture Products", image: "/path/to/image1.jpg" },
  { title: "Organic Products", image: "/path/to/image2.jpg" },
  { title: "Fresh Vegetables", image: "/path/to/image3.jpg" },
  { title: "Dairy Products", image: "/path/to/image4.jpg" },
];

const Services = () => {
  return (
    <section className="py-8">
      <h2 className="text-center text-3xl font-bold mb-8">Services</h2>
      <div className="flex justify-center space-x-4">
        {services.map((service, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src={service.image} alt={service.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{service.title}</div>
              <p className="text-gray-700 text-base">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

