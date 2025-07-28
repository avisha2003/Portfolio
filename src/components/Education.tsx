
import React, { useEffect, useRef } from "react";
import { Book, Award } from "lucide-react";

const educationItems = [
  {
    degree: "Bachelor of Science (Hons) in Information Technology",
    specialization: "Specializing in Data Science",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 - Present (3rd year)",
    gpa: "3.17",
    icon: Book,
  },
  {
    degree: "G. C. E. Advanced Level",
    specialization: "Maths Stream",
    institution: "Gurukula College",
    period: "2021",
    icon: Award,
  },
  {
    degree: "G. C. E. Ordinary Level",
    period: "2018",
    icon: Award,
  },
];

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0");
            } else {
              entry.target.classList.add("animate-fade-in-up");
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

    itemsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemsRef.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div ref={sectionRef} className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="grid gap-8 relative">
          {educationItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemsRef.current[index] = el;
              }}
              className="opacity-0"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row md:items-center gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full wood-gradient flex items-center justify-center text-white">
                    <item.icon size={24} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <span className="text-sm font-medium text-wood">{item.period}</span>
                  <h3 className="text-xl font-bold mt-1">{item.degree}</h3>
                  {item.specialization && (
                    <p className="text-lg text-foreground/90">{item.specialization}</p>
                  )}
                  <p className="text-muted-foreground mt-1">{item.institution}</p>
                  {item.gpa && (
                    <div className="mt-2 bg-secondary rounded-full px-4 py-1 inline-block">
                      <span className="font-medium">Current GPA: {item.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
