// function Footer() {
//     return (
//         <div className="text-5xl text-center">Footer</div>
//     )
// }

// export default Footer

// src/components/Footer.jsx
// import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-green-400 text-2xl font-bold">KISAN SEVAK</h2>
          <p className="mt-4 text-center md:text-left">
            There are many variations of passages of lorem ipsum available, but the majority suffered.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="#" aria-label="Twitter">
              <img src="path/to/twitter-icon.png" alt="Twitter" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="path/to/facebook-icon.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Pinterest">
              <img src="path/to/pinterest-icon.png" alt="Pinterest" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="path/to/instagram-icon.png" alt="Instagram" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-green-400 text-xl font-bold">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/projects" className="hover:underline">Our Projects</Link></li>
            <li><Link to="/farmers" className="hover:underline">Meet the Farmers</Link></li>
            <li><Link to="/news" className="hover:underline">Latest News</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-400 text-xl font-bold">News</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/news/1" className="hover:underline">Bringing Food Production Back To Cities</Link>
              <p className="text-sm text-gray-400">Aug 2, 2024</p>
            </li>
            <li>
              <Link to="/news/2" className="hover:underline">The Future of Farming, Smart Irrigation Solutions</Link>
              <p className="text-sm text-gray-400">Aug 2, 2024</p>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-green-400 text-xl font-bold">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <p className="flex items-center">
                <img src="path/to/phone-icon.png" alt="Phone" className="mr-2" /> +91 123456789
              </p>
            </li>
            <li>
              <p className="flex items-center">
                <img src="path/to/email-icon.png" alt="Email" className="mr-2" /> AiTitans@gamie.com
              </p>
            </li>
            <li>
              <p className="flex items-center">
                <img src="path/to/location-icon.png" alt="Location" className="mr-2" /> BITM, Ballari, Karnataka 583101
              </p>
            </li>
          </ul>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="p-2 bg-green-600 text-white rounded-r hover:bg-green-700">→</button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        © All Copyright 2024 by shawonetc Themes
        <br />
        <Link to="/terms" className="hover:underline">Terms of Use</Link> | <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
