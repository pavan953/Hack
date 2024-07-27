
// import React from 'react';

const projects = [
  {
    title: 'Easy Harvesting',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
  {
    title: 'Agriculture Farming',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
  {
    title: 'Ecological Farming',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
  {
    title: 'Organic Solutions',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
  {
    title: 'Fresh Products',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
  {
    title: 'Healthy Food',
    image: 'https://via.placeholder.com/400x400', // Replace with actual image URL
  },
];

const Projects = () => {
  return (
    <div className="font-sans">
      <header className="bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url('https://via.placeholder.com/1920x300')` }}>
        <h1 className="text-4xl text-white">Projects</h1>
      </header>
      <main className="max-w-6xl mx-auto my-8 px-4">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex items-center space-x-4">
            <span>Home</span>
            <span>Projects</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img src={project.image} alt={project.title} className="w-full mb-2" />
              <h4 className="text-lg font-semibold">{project.title}</h4>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
