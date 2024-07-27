import bg2 from '../../assets/bg2.jpg'
import AboutFramer from '../../assets/AboutFramer.jpg'
// import React from 'react';
function About() {
  return (
    <div className="font-sans">
        <img src={bg2} alt="Agricultural Field" className="w-full h-96 object-cover" />
        <section className="p-8 flex">
        <div className="grid w-auto lg:grid-cols-4 gap-8 mt-8">
        <div className="p-6 bg-green-100 rounded-lg shadow-md">
          <img src={AboutFramer} alt="Agricultural Activities" className="w-1/3 h-50 mr-8" />
          <div>
            </div>
          </div>
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <h2 className="text-xl font-semibold mb-4">The Best Agriculture Solutions</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            <ul className="list-disc list-inside">
              <li>High-quality seeds</li>
              <li>Advanced farming techniques</li>
              <li>Sustainable practices</li>
            </ul>
          </div>
        </section>
        </div>
        
  );
}

export default About;
