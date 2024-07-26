// src/pages/Home.jsx
// import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/bg1.jpg'

const Home = () => {
  return (
    <div>
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">WELCOME TO AGRIOS FARMING</h1>
          <p className="mt-4 text-3xl">Agriculture & Eco Farming</p>
          <p className="mt-4 max-w-2xl">
          Farmer is the most healthful, most useful and most noble employment of man
          </p>
          <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
           <Link to='/About'> Discover More</Link>
          </button>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 01</h2>
              <p className="mt-2 text-lg">We are using a new technology</p>
              <img src="/path/to/your/image1.jpg" alt="Feature 01" className="mt-4 mx-auto" />
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 02</h2>
              <p className="mt-2 text-lg">Good in smart organic services</p>
              <img src="/path/to/your/image2.jpg" alt="Feature 02" className="mt-4 mx-auto" />
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-bold">Feature 03</h2>
              <p className="mt-2 text-lg">Reforming in the systems</p>
              <img src="/path/to/your/image3.jpg" alt="Feature 03" className="mt-4 mx-auto" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="/path/to/your/main-image.jpg"
                alt="Agriculture"
                className="rounded-full w-full h-full object-cover"
              />
              <img
                src="/path/to/your/small-image.jpg"
                alt="Organic"
                className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-green-700">Our Introductions</h2>
            <h1 className="text-5xl font-bold mt-4">Agriculture & Organic Product Farm</h1>
            <p className="text-lg text-gray-700 mt-4">Agrios is the largest global organic farm.</p>
            <p className="text-lg text-gray-700 mt-4">
              There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.
            </p>
            <ul className="mt-4">
              <li className="flex items-center text-gray-700">
                <span className="mr-2">✔</span> Growing fruits vegetables
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Tips for ripening your fruits
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Lorem ipsum is not simply random text
              </li>
              <li className="flex items-center text-gray-700 mt-2">
                <span className="mr-2">✔</span> Making this the first true generator on the internet
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700">Our Services</h2>
          <h1 className="text-5xl font-bold mt-4">What We Offer</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/path/to/your/agriculture-products.jpg" alt="Agriculture Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Agriculture Products</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/path/to/your/organic-products.jpg" alt="Organic Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Organic Products</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/path/to/your/fresh-vegetables.jpg" alt="Fresh Vegetables" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Fresh Vegetables</h3>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src="/path/to/your/dairy-products.jpg" alt="Dairy Products" className="h-40 w-full object-cover rounded-t-lg" />
              <h3 className="mt-4 text-xl font-bold">Dairy Products</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Explore Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-cover bg-center p-4 text-white" style={{ backgroundImage: 'url(path/to/image1.jpg)' }}>
          <h3>Easy Harvesting</h3>
        </div>
        <div className="bg-cover bg-center p-4 text-white" style={{ backgroundImage: 'url(path/to/image2.jpg)' }}>
          <h3>Agriculture Farming</h3>
        </div>
        <div className="bg-cover bg-center p-4 text-white" style={{ backgroundImage: 'url(path/to/image3.jpg)' }}>
          <h3>Ecological Farming</h3>
        </div>
        <div className="bg-cover bg-center p-4 text-white" style={{ backgroundImage: 'url(path/to/image4.jpg)' }}>
          <h3>Organic Solutions</h3>
        </div>
      </div>
    </section>
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">What Theyre Talking About Agrios</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 shadow rounded">
            <p>There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which dont look even.</p>
            <p className="font-bold mt-2">Bonnie Tolbert</p>
            <p>★★★★★</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p>There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which dont look even.</p>
            <p className="font-bold mt-2">James Albert</p>
            <p>★★★★★</p>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img src="path/to/image.jpg" alt="Agriculture Professional Leader" className="w-full md:w-1/3" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Why Choose Agrios Market</h2>
          <ul className="list-disc ml-4">
            <li>Quality Organic Food</li>
            <li>Professional Farmers</li>
            <li>Quality Products</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">From the Blog</h2>
      <h3 className="text-xl mb-6">News & Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <img src="path/to/image1.jpg" alt="Article 1" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">1 Comment</span>
            </div>
          </div>
          <h4 className="font-bold">Bringing Food Production Back To Cities</h4>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <img src="path/to/image2.jpg" alt="Article 2" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">The Future of Farming, Smart Irrigation Solutions</h4>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <img src="path/to/image3.jpg" alt="Article 3" className="w-full h-48 object-cover rounded mb-4" />
          <div className="flex items-center justify-between mb-2">
            <span className="bg-green-600 text-white px-2 py-1 rounded">05 July 2022</span>
            <div>
              <span className="text-gray-500 mr-2">Kevin Martin</span>
              <span className="text-gray-500">0 Comments</span>
            </div>
          </div>
          <h4 className="font-bold">Agronomy and relation to Other Sciences</h4>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Home;