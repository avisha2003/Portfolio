
import React, { useEffect, useRef } from "react";
import { Code, Database, Globe, Server, Terminal, Box } from "lucide-react";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaFigma, FaAngular, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiKotlin, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiPhp } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

const skillSections = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava size={48} color="#f89820" /> },
      { name: "JavaScript", icon: <FaJs size={48} color="#f7df1e" /> },
      { name: "TypeScript", icon: <SiTypescript size={48} color="#3178c6" /> },
      { name: "PHP", icon: <SiPhp size={48} color="#777bb4" /> },
      { name: "HTML", icon: <FaHtml5 size={48} color="#e34c26" /> },
      { name: "CSS", icon: <FaCss3Alt size={48} color="#1572b6" /> },
      { name: "Kotlin", icon: <SiKotlin size={48} color="#7F52FF" /> },
    ],
  },
  {
    title: "Full Stack Development",
    skills: [
      { name: "MERN Stack", icon: <FaNodeJs size={48} color="#3c873a" /> },
    ],
  },
  {
    title: "Frontend and UI Frameworks",
    skills: [
      { name: "Angular", icon: <FaAngular size={48} color="#dd0031" /> },
      { name: "React", icon: <FaReact size={48} color="#61dafb" /> },
      { name: "Bootstrap", icon: <FaBootstrap size={48} color="#7952b3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#38bdf8" /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: <SiMysql size={48} color="#00758f" /> },
      { name: "MongoDB", icon: <SiMongodb size={48} color="#47A248" /> },
    ],
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt size={48} color="#f34f29" /> },
      { name: "GitHub", icon: <FaGithub size={48} /> },
      { name: "Figma", icon: <FaFigma size={48} color="#a259ff" /> },
    ],
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
        <div className="space-y-12 mt-10">
          {skillSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-semibold mb-6 text-neon-blue">{section.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="mt-2 text-lg font-medium text-white text-center">
                      {skill.name}
                    </span>
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
