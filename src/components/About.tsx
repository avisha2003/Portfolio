
import React, { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 w-full h-full bg-stone-600 rounded-lg -rotate-3 transform-gpu"></div>
              <img
                src="/portfolio/lovable-uploads/portfoliopic.jpg"
                alt="Avisha Dilshan"
                className="relative z-10 rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="md:col-span-7 space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a motivated and results-driven IT undergraduate specializing in Data Science at SLIIT, with hands-on
              experience in full-stack development, mobile app development, and IT coordination.
            </p>
            
            <p className="text-lg leading-relaxed">
              I'm skilled in leading teams and delivering real-world projects with a strong focus on innovation, efficiency,
              and user needs. My goal is to leverage my technical expertise and leadership skills to create impactful
              solutions that solve complex problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Personal Info</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-medium min-w-32">Name:</span>
                    <span>Avisha Dilshan</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-32">Location:</span>
                    <span>Sri Lanka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-32">Email:</span>
                    <span className="break-all">avishadilshan01@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium min-w-32">Phone:</span>
                    <span>+94 770443623</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">My Interests</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-background p-3 rounded flex items-center space-x-2">
                    <div className="w-2 h-2 bg-wood rounded-full"></div>
                    <span>Data Science</span>
                  </div>
                  <div className="bg-background p-3 rounded flex items-center space-x-2">
                    <div className="w-2 h-2 bg-wood rounded-full"></div>
                    <span>Full Stack Developments</span>
                  </div>
                  <div className="bg-background p-3 rounded flex items-center space-x-2">
                    <div className="w-2 h-2 bg-wood rounded-full"></div>
                    <span>Mobile Apps</span>
                  </div>
                  <div className="bg-background p-3 rounded flex items-center space-x-2">
                    <div className="w-2 h-2 bg-wood rounded-full"></div>
                    <span>Web Applicatons</span>
                  </div>
                  <div className="bg-background p-3 rounded flex items-center space-x-2">
                    <div className="w-2 h-2 bg-wood rounded-full"></div>
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
