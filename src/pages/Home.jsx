import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-[#1e1e1e] p-4 sm:p-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=400"
            alt="Profile"
            className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8 border-4 border-yellow-400"
          />
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-white">Het Kalriya</h1>
          <p className="text-xl sm:text-2xl text-[#569cd6] mb-8">Full Stack Developer</p>
        </div>

        <div className="text-base sm:text-lg text-[#d4d4d4] mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
          I am a dynamic full-stack developer with a diverse skill set that spans across
          the realms of MERN Stack, Java, and JavaScript. My journey in the world of
          software development is a relentless quest for knowledge and innovation.
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4 sm:px-0">
          <button
            onClick={() => navigate('/projects')}
            className="px-8 py-3 bg-[#007acc] text-white rounded-md hover:bg-[#005c99] transition-colors w-full sm:w-auto"
          >
            View Work
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 border-2 border-[#007acc] text-[#007acc] rounded-md hover:bg-[#007acc] hover:text-white transition-colors w-full sm:w-auto"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
