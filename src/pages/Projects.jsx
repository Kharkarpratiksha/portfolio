import { useEffect, useRef } from "react";
// Uncomment and use your actual images:
import project1 from "../images/Project1_mockup.png";
import project2 from "../images/Project2_mockup.png";
import project3 from "../images/Project3_mockup.png";
import project4 from "../images/Project4_mockup.png";

const projects = [
  {
  num: "PROJECT 04",
  title: "UX Analyzer",
  desc: "A UX analysis tool that evaluates UI/UX quality of websites and provides insights to improve usability, accessibility, and design performance.",
  tags: ["React", "Next.js", "UI/UX", "Analysis Tool"],
  github: "https://github.com/Kharkarpratiksha/ux-analyzer.git",
  live: "https://ux-analyzer-mu.vercel.app/",   
  img: project4,
},
  {
    num: "PROJECT 01",
    title: "Flower E-commerce Website",
    desc: "Full-stack e-commerce platform with product listing, cart & order system. Built with React frontend and a complete Node.js/Express backend API with MongoDB for persistence.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Kharkarpratiksha/Flower-Shop.git",
    img: project1,
  },
  {
    num: "PROJECT 02",
    title: "3D Printer Enhancement",
    desc: "Enhanced Ender 3 printer with remote control & wireless file transfer using NodeMCU. Built a Flask backend with TCP/IP protocol for seamless wireless print management.",
    tags: ["NodeMCU", "Flask", "TCP/IP", "Python"],
    github: "https://github.com/Kharkarpratiksha/3D-printer-enhancement.git",
    img: project2,
  },
  {
    num: "PROJECT 03",
    title: "College Recommendation System",
    desc: "Recommends engineering colleges in Maharashtra based on student marks & preferences. Powered by Python & Flask with a recommendation algorithm filtering a curated dataset.",
    tags: ["Python", "Flask", "ML"],
    github: "https://github.com/Kharkarpratiksha/Engineering-college-recommendation-system.git",
    img: project3,
  },
];

// Decorative mock card shown when no real screenshot is provided
function MockCard() {
  return (
    <div className="proj-img-mock">
      <div className="proj-mock-bar" style={{ width: "85%" }} />
      <div className="proj-mock-bar" style={{ width: "50%" }} />
      <div className="proj-mock-rows">
        {[100, 80, 60, 90].map((w, i) => (
          <div key={i} className="proj-mock-row" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((el) => {
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

        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        <div className="proj-grid">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="proj-card"
              ref={(el) => (cardRefs.current[i] = el)}
            >
              {/* Image side */}
              <div className="proj-img-wrap">
                {proj.img
                  ? <img src={proj.img} alt={proj.title} style={{ width: "100%", borderRadius: 10 }} />
                  : <MockCard />
                }
              </div>

              {/* Content side */}
              <div className="proj-content">
                <div className="proj-num">{proj.num}</div>
                <div className="proj-title">{proj.title}</div>
                <p className="proj-desc">{proj.desc}</p>
                <div className="proj-tags">
                  {proj.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">
                    GitHub →
                    </a>

                    {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link">
                    Live →
                    </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
