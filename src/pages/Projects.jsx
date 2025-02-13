import React from 'react';

const projects = [
  {
    title: 'Ease Tax',
    description: 'Ease Tax : is a comprehensive Rental Management System designed to streamline the management of selling of car and add your own car for selling .',
    image: "src/assets/CarSelling.png",
    technologies: ['React', 'JavaScript', 'Tailwind CSS'],
    
  },
  {
    title: 'Apple I Phone 15 clone',
    description: 'The Online Vegetable and Fruit Marketplace(VegFru) is a web-based platform that provides an easy and convenient way for customers to order fresh fruits.',
    image: 'src/assets/Apple.png',
    technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Health-Path Finder',
    description: 'Jampod: Where Music Jams and Podcasts Collide! Experience the fusion of live jams and insightful podcasts in one dynamic platform.',
    image: 'src/assets/Health-Path.png',
    technologies: ['React', 'JavaScript', 'Node.js', 'WebRTC', 'MongoDB', 'Socket.io'],
  },
  {
    title: 'E-commerce',
    description: 'ChitChat is a Complete one to one and group Real-Time chatting application. Uses Socket.io for real time communication.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400',
    technologies: ['Node.js', 'React', 'Express', 'MongoDB', 'Socket.io', 'Redux'],
  },
];

const Projects = () => {
  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-mono mb-8 text-[#569cd6]">MAJOR PROJECT'S 🤖</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-[#252526] rounded-lg overflow-hidden border border-[#3c3c3c]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#9cdcfe]">{project.title}</h3>
              <p className="text-sm mb-4 text-[#ce9178]">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full border border-[#3c3c3c] bg-[#1e1e1e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#3c3c3c] flex flex-wrap gap-4">
                <a
                  href="#"
                  className="text-[#007acc] hover:text-[#005c99] transition-colors"
                >
                  Source Code
                </a>
                <a
                  href="#"
                  className="text-[#007acc] hover:text-[#005c99] transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;