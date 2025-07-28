
import React, { useEffect, useRef } from "react";

const experiences = [
  {
    title: "IT Coordinator",
    company: "Nature Arts & Crafts Company",
    location: "Kadawata, Sri Lanka",
    period: "Oct 2022 - Jan 2024",
    description:
      "Streamlined stock management, improved data accuracy, analyzed processes for efficiency and cost savings, and provided technical support to minimize IT downtime.",
  },
  {
    title: "E-Commerce Data Coordinator",
    company: "Mere Mart General Trading FZC LLC",
    location: "SPC Free Zone, Sharjah",
    period: "Sep 2024 - Feb 2025",
    description:
      "Managed e-commerce platform operations, ensuring accurate product listings and seamless stock updates.",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const expRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0");
            } else {
              entry.target.classList.add("animate-fade-in-right");
              entry.target.classList.remove("opacity-0");
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    expRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      expRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">Work Experience</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] top-0 h-full w-1 bg-wood/30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) expRefs.current[index] = el;
                }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:ml-auto" : ""
                } px-6 md:px-12 opacity-0`}
              >
                <div className="absolute top-0 left-[-12px] md:left-auto md:right-auto md:translate-x-0 bg-wood rounded-full w-6 h-6 transform md:translate-y-1/2 flex items-center justify-center shadow-md">
                  <div className="bg-white rounded-full w-2 h-2"></div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-sm font-medium text-wood">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                  <div className="flex items-center space-x-1 mt-1 text-muted-foreground">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
