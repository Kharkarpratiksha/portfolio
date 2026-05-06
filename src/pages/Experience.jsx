import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Freelance Web Developer",
    period: "Nov 2025 – Present",
    desc: "Developing responsive websites using HTML, CSS, JavaScript, React, and WordPress. Integrated REST APIs and optimized performance across client projects.",
  },
  {
    role: "JBB Technology Pvt. Ltd.",
    period: "May 2025 – Oct 2025",
    desc: "Built MERN stack applications with full frontend-backend integration. Developed responsive UI components and customized WordPress themes for production.",
  },
  {
    role: "Gray Corporates",
    period: "Jan 2025 – Apr 2025",
    desc: "Assisted in development and debugging of web applications. Built reusable UI components and improved code quality across the team's projects.",
  },
  {
    role: "Open Source Contributor",
    period: "2024 – Present",
    desc: "Contributing to frontend open-source projects, fixing UI bugs and improving documentation for developer communities.",
  },
];

export default function Experience() {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((el) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-inner">

        {/* Work Experience */}
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line" />
        </div>

        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="exp-item"
              ref={(el) => (itemRefs.current[i] = el)}
            >
              <div className="exp-card">
                <div className="exp-role">{exp.role}</div>
                <span className="exp-period">{exp.period}</span>
                <p className="exp-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="section-header" style={{ marginTop: 70 }}>
          <span className="section-num">02</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line" />
        </div>

        <div className="edu-card">
          <div className="edu-big">MIT</div>
          <div>
            <div className="edu-name">Maharashtra Institute of Technology</div>
            <div className="edu-sub">Chh. Sambhajinagar</div>
            <div className="edu-sub">Electronics &amp; Computer Engineering</div>
            <span className="cgpa">CGPA 7.78 / 10</span>
          </div>
        </div>

      </div>
    </div>
  );
}