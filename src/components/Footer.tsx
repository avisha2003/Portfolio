import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-card py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("home");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-2xl font-display font-bold"
            >
              <span className="text-neon-blue">Avisha</span> Dilshan
            </a>
            <p className="text-muted-foreground mt-2 text-balance">
              Data Science & Full-Stack Developer
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-16">
            <div>
              <h3 className="font-semibold mb-3">Quick Links</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("home");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  Home
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("about");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("skills");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("education");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  Education
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("projects");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-muted-foreground hover:text-neon-blue transition-colors"
                >
                  Projects
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="mailto:avishadilshan01@gmail.com" 
                  className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
                <a 
                  href="https://github.com/avisha2003" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/avisha-dilshan/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neon-blue/10 flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Avisha Dilshan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
