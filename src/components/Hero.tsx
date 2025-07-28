import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Code, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-neon-blue/10 animate-spin-slow blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-blue/5 animate-spin-slow blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #0EA5E9 1px, transparent 1px), linear-gradient(to bottom, #0EA5E9 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10">
        <div ref={containerRef} className="flex flex-col items-center text-center space-y-8">
          {/* Glowing Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 animate-fade-in-up animate-delay-100 animate-fill-both animate-once">
            <Sparkles size={16} className="text-neon-blue mr-2" />
            <span className="text-sm text-neon-blue">Full-Stack Developer & Data Science</span>
          </div>
          
          {/* Main Title */}
          <div ref={textRef} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold glow-text animate-fade-in-up animate-delay-200 animate-fill-both animate-once">
              Avisha <span className="text-neon-blue">Dilshan</span>
            </h1>
            
            <p className="text-xl text-balance max-w-2xl mx-auto text-muted-foreground animate-fade-in-up animate-delay-300 animate-fill-both animate-once">
              Motivated IT undergraduate with expertise in data science, full-stack development, 
              and IT coordination. Passionate about creating innovative solutions.
            </p>
          </div>
          
          {/* Tech Stack Icons */}
          <div className="flex flex-wrap justify-center gap-3 py-6 animate-fade-in-up animate-delay-400 animate-fill-both animate-once">
            {["MERN Stack", "Kotlin", "Java"].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-secondary rounded-full flex items-center space-x-2 border border-neon-blue/20">
                <Code size={16} className="text-neon-blue" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4 pt-2 animate-fade-in-up animate-delay-500 animate-fill-both animate-once">
            <a href="mailto:avishadilshan01@gmail.com" aria-label="Email">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-white duration-300"
              >
                <Mail size={20} />
              </Button>
            </a>
            <a href="https://github.com/avisha2003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-white duration-300"
              >
                <Github size={20} />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/avisha-dilshan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-white duration-300"
              >
                <Linkedin size={20} />
              </Button>
            </a>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="pt-6 animate-fade-in-up animate-delay-500 animate-fill-both animate-once">
            <Button
              className="bg-neon-blue hover:bg-neon-dark text-white rounded-full px-8 py-6 mr-4 shadow-lg shadow-neon-blue/20"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 shadow-lg"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              My Projects
            </Button>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
