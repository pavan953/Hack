// import React from 'react';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 transform transition duration-500 hover:scale-105">
      <img src={image} alt={name} className="w-full" />
      <div className="px-6 py-4">
        <p className="font-bold text-xl mb-2">{name}</p>
        <p className="text-gray-700">Rs.{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
