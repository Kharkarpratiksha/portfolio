import { useEffect, useRef } from "react";

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Python",     img: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "SQL",        img: "https://cdn.simpleicons.org/mysql/4479A1" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "React",      img: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Node.js",    img: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express.js", img: "https://cdn.simpleicons.org/express/888888" },
    ],
  },
  {
    label: "Database & Web",
    skills: [
      { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "HTML5",   img: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS3",    img: "https://cdn.simpleicons.org/css3/1572B6" },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git",       img: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Postman",   img: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Figma",     img: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "WordPress", img: "https://cdn.simpleicons.org/wordpress/21759B" },
    ],
  },
];

export default function Skills() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const all = cardRefs.current.filter(Boolean);
    const observers = all.map((el, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), i * 50);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  let globalIdx = 0;

  return (
    <div className="page-wrapper">
      <div className="page-inner">

        <div className="section-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </div>

        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <div className="skill-cat">{cat.label}</div>
            <div className="skills-grid">
              {cat.skills.map((skill) => {
                const idx = globalIdx++;
                return (
                  <div
                    key={skill.name}
                    className="skill-card"
                    ref={(el) => (cardRefs.current[idx] = el)}
                  >
                    <img src={skill.img} alt={skill.name} className="skill-img" />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
