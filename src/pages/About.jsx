import React from 'react';

const About = () => {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-mono mb-6 text-[#569cd6]">const aboutMe = {`{`}</h1>
        <div className="pl-4 sm:pl-8 space-y-6 text-base sm:text-lg">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=400"
              alt="Profile"
              className="rounded-full w-32 h-32 sm:w-48 sm:h-48 mb-8 border-4 border-yellow-400"
            />
            <p className="text-[#ce9178] leading-relaxed">
              I am a dynamic full-stack developer with a diverse skill set that spans across
              the realms of MERN Stack, Python, and JavaScript. My journey in the world of
              software development is a relentless quest for knowledge and innovation. I'm on
              a mission to utilize technology for the betterment of society, crafting
              ingenious applications and software to tackle real-world challenges.
            </p>
          </div>

          <div>
            <h2 className="text-[#9cdcfe] mb-2">skills: [</h2>
            <div className="pl-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express',
                'MongoDB', 'PostgreSQL', 'Python', 'cloudinary', 'Docker',
                'Github', 'Git', 'REST APIs', 'GraphQL', 'Tailwind CSS'
              ].map((skill) => (
                <div key={skill} className="text-[#ce9178]">"{skill}",</div>
              ))}
            </div>
            <div className="text-[#9cdcfe]">],</div>
          </div>

          <div>
            <h2 className="text-[#9cdcfe] mb-2">experience: [</h2>
            <div className="pl-4 space-y-4">
              <div className="text-[#ce9178]">
                "Full Stack Developer @ Intro Intern - Present",
              </div>
              <div className="text-[#ce9178]">
                "Founder & Treasurer @ Codewaves organization - 2024-present",
              </div>
              <div className="text-[#ce9178]">
                "Software Engineer Intern @ Innovation Labs - 2024",
              </div>
            </div>
            <div className="text-[#9cdcfe]">],</div>
          </div>
        </div>
        <p className="text-[#569cd6]">{`}`};</p>
      </div>
    </div>
  );
};

export default About;