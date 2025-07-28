
import React, { useEffect, useRef } from "react";
import { Code, Database, Globe, Server, Terminal, Box } from "lucide-react";

const skillCategories = [
  {
    name: "Languages",
    icon: <Terminal className="text-neon-blue" size={24} />,
    skills: ["Java", "Kotlin", "JavaScript", "HTML/CSS"],
  },
  {
    name: "Full-Stack Development",
    icon: <Code className="text-neon-blue" size={24} />,
    skills: ["MERN Stack"],
  },
  {
    name: "Frontend Technologies",
    icon: <Globe className="text-neon-blue" size={24} />,
    skills: ["Bootstrap", "Tailwind CSS", "React.js"],
  },
  {
    name: "Databases",
    icon: <Database className="text-neon-blue" size={24} />,
    skills: ["MySQL", "MongoDB"],
  },
  {
    name: "Tools & Platforms",
    icon: <Server className="text-neon-blue" size={24} />,
    skills: ["Git", "GitHub", "Figma"],
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement[]>([]);

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
    <section id="skills" className="py-20 bg-secondary/20">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              ref={(el) => {
                if (el) skillsRef.current[categoryIndex] = el;
              }}
              className="neon-card p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-neon-blue">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="bg-secondary/50 p-3 rounded-lg border border-neon-blue/10 hover:border-neon-blue/30 transition-all duration-300"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 neon-card p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6 text-neon-blue flex items-center">
            <Box className="mr-2" size={20} />
            Professional Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Project Leadership", "Critical Thinking", "Team Collaboration", "Technical Innovation", "Agile & Time Management", "Full-Stack Development", "Ownership & Accountability"].map((skill) => (
              <div key={skill} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-neon-blue/20 transition-colors duration-300 border border-neon-blue/20">
                  <div className="w-16 h-16 rounded-full bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-full bg-neon-blue flex items-center justify-center text-white font-bold">
                      {skill.charAt(0)}
                    </div>
                  </div>
                </div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
