import { useEffect, useState } from "react";
import './SectionNav.css'
import sections from '../../data/nav-items.json'

function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  },
  {
    threshold: 0.2
  }
);

    sections.forEach((section) => {
      const el = document.getElementById(section.id);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const scrollToSection = (id) => {
  console.log(id);
  console.log(document.getElementById(id));

  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth"
  });
};

console.log("Active Section:", activeSection);

  return (
    <div className="section-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={
            activeSection === section.id
              ? "active"
              : "" 
            }
        >
          
        </button>
      ))}
    </div>
  );
}

export default SectionNav;