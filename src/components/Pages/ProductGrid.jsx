import  { useState } from 'react';
import ProductCard from './Product_card.jsx';

const products = [
  { name: 'Apples', price: 50, image: '/path-to-apples.jpg' },
  { name: 'Bananas', price: 20, image: '/path-to-bananas.jpg' },
  { name: 'Carrot', price: 50, image: '/path-to-carrot.jpg' },
  { name: 'Garlic', price: 20, image: '/path-to-garlic.jpg' },
  { name: 'Grapes', price: 100, image: '/path-to-grapes.jpg' },
  { name: 'Lettuce', price: 30, image: '/path-to-lettuce.jpg' },
  { name: 'Onions', price: 20, image: '/path-to-onions.jpg' },
  { name: 'Potatoes', price: 30, image: '/path-to-potatoes.jpg' },
  { name: 'Red Grapes', price: 100, image: '/path-to-red-grapes.jpg' },
];

const ProductGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="flex flex-wrap">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} name={product.name} price={product.price} image={product.image} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => handlePageChange(1)} className="px-2 py-1 mx-1 bg-gray-300 rounded">1</button>
        <button onClick={() => handlePageChange(2)} className="px-2 py-1 mx-1 bg-gray-300 rounded">2</button>
      </div>
    </div>
  );
};

export default ProductGrid;
