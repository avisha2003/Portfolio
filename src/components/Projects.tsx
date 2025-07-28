import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "NexaBiz Business Management System",
    role: "Team Member",
    description:
      "A full-stack web application tailored for B2B manufacturing businesses. The system supports client registration/login, order and return management, inventory tracking, and financial operations.",
    contribution:
      "Implemented the Finance Management module for NexaBiz, enabling seamless payment tracking, clear status updates, multi-method payment support, and automated reminders.",
    technologies: ["MERN Stack", "Tailwind", "VS Code", "Git", "MongoDB Compass", "Postman"],
    image: "/portfolio/lovable-uploads/nexabizL.png",
    links: {
      github: "https://github.com/itp-ProjectGroup/nexxabiz1.1",
      demo: "#",
    },
  },
  {
    id: 2,
    title: "Money Mate - Expense Tracker",
    role: "Individual Project",
    description:
      "The Expense Tracker App is a simple and efficient web application developed using Angular for the frontend and JSON Server as a mock backend. It allows users to track their daily expenses, view transaction history, and maintain control over their financial activities.",
    technologies: ["Angular", "Node.js", "JSON Server", "VS Code", "Git"],
    image: "/portfolio/lovable-uploads/moneymate.jpg",
    links: {
      github: "https://github.com/avisha2003/Expense-Tracker-Angular",
      demo: "#",
    },
  },
  {
    id: 3,
    title: "Quick Assist - Customer Care Management",
    role: "Team Member",
    description:
      "A Java-based web application with dashboards for customers, agents, and admins, enabling customer queries for registered companies.",
    technologies: ["Java", "JSP", "Bootstrap", "Eclipse", "Git"],
    image: "/portfolio/lovable-uploads/quickassist.jpeg",
    links: {
      github: "https://github.com/avishadilshan01/QuickAssist",
      demo: "#",
    },
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0");
            } else {
              setTimeout(() => {
                entry.target.classList.add("animate-fade-in-up");
                entry.target.classList.remove("opacity-0");
              }, Number(entry.target.getAttribute("data-delay")) || 0);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) {
                  projectRefs.current[index] = el;
                  el.setAttribute("data-delay", String(index * 100));
                }
              }}
              className="opacity-0 perspective-1000"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`project-card rounded-lg overflow-hidden shadow-lg h-full bg-card flex flex-col ${
                  hoveredProject === project.id ? "transform-gpu hover:scale-105" : ""
                } transition-all duration-300`}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 transform-gpu hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-wood/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/70 hover:bg-white text-black p-2 rounded-full transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-wood/10 text-wood rounded-full mb-3">
                      {project.role}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-wood hover:bg-wood-dark text-white rounded-full px-8 py-6"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
