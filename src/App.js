import React from "react";
import profile from "./images/Myprofile.png";
import project1 from "./images/Project1_mockup.png";
import project2 from "./images/Project2_mockup.png";
import project3 from "./images/Project3_mockup.png";
import "./App.css";

export default function App() {

const linkStyle = {
  color: "white",
  textDecoration: "none",
  cursor: "pointer"
};
  const projects = [
  {
    title: "Flower E-commerce Website",
    desc: "Full-stack e-commerce platform with product listing, cart & order system using React, Node.js, Express & MongoDB.",
    img: project1,
    github: "https://github.com/Kharkarpratiksha/Flower-Shop.git"
  },
  {
    title: "3D Printer Enhancement",
    desc: "Enhanced Ender 3 printer with remote control & file transfer using NodeMCU, Flask & TCP/IP.",
    img: project3,
    github: "https://github.com/Kharkarpratiksha/Engineering-college-recommendation-system.git"
  },
  {
    title: "College Recommendation System",
    desc: "Recommends colleges in Maharashtra based on marks & preferences using Python & Flask.",
    img: project2,
    github: "https://github.com/Kharkarpratiksha/3D-printer-enhancement.git"
  }
];

  const skills = [

  // Languages
  { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", img: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "SQL", img: "https://cdn.simpleicons.org/mysql/4479A1" },

  // Frameworks & Libraries
  { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", img: "https://cdn.simpleicons.org/node.js/339933" },
  { name: "Express.js", img: "https://cdn.simpleicons.org/express/ffffff" },

  // Databases
  { name: "MongoDB", img: "https://cdn.simpleicons.org/mongodb/47A248" },

  // Web
  { name: "HTML", img: "https://cdn.simpleicons.org/html5/E34F26" },
 { name: "CSS", img: "https://www.svgrepo.com/show/452185/css-3.svg" },
  // Tools
  { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Postman", img: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Figma", img: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "WordPress", img: "https://cdn.simpleicons.org/wordpress/21759B" }

];

  return (
    <div style={{
      background: "#0a0f2c",
      color: "white",
      fontFamily: "Poppins, sans-serif"
    }}>

      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 120px",
        alignItems: "center"
      }}>
        <h2>P_Kharkar</h2>

        <div style={{ display: "flex", gap: "30px" }}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#experience" style={linkStyle}>Experience</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        <button
  onClick={() => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }}
  style={{
    background: "#6c4cff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer"
  }}
>
  Hire Me
</button>
      </div>

      {/* HERO SECTION */}
      <div id="home" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 120px"
      }}>

        {/* LEFT TEXT */}
        <div>
          <p style={{ color: "#8b7cff" }}>Hello, I'm</p>

          <h1 style={{ fontSize: "55px" }}>
            PRATIKSHA <br /> KHARKAR
          </h1>

          <h3 style={{ color: "#8b7cff" }}>
            Full Stack Web Developer
          </h3>

          <p style={{
            maxWidth: "500px",
            color: "#ccc",
            lineHeight: "1.6"
          }}>
            Web Developer with hands-on experience through internships and freelancing
            in developing responsive web applications using React and WordPress.
            Skilled in frontend-backend integration, REST API handling, and performance optimization.
            Passionate about clean UI, performance, and solving real-world problems.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ position: "relative" }}>
          <img
            src={profile}
            alt="profile"
            style={{
              width: "280px",
              borderRadius: "10px",
              position: "relative",
              zIndex: 2,
              marginRight: "90px",
            }}
          />

          <div style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "280px",
            height: "100%",
            border: "3px solid #00e0ff",
            borderRadius: "10px",
            zIndex: 1
          }}></div>
        </div>

      </div>

      {/* EXPERIENCE */}
      <div id="experience" style={{ padding: "60px 120px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Work Experience
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>

          <div style={card}>
            <h4>Freelance Web Developer</h4>
            <p style={text}>
              Developed responsive websites using HTML, CSS, JavaScript, React, and WordPress.
              Integrated REST APIs and optimized performance.
            </p>
            <p>Nov 2025 – Present</p>
          </div>

          <div style={card}>
            <h4>JBB Technology Pvt. Ltd.</h4>
            <p style={text}>
              Built MERN stack apps, developed responsive UI, and customized WordPress themes.
            </p>
            <p>May 2025 – Oct 2025</p>
          </div>

          <div style={card}>
            <h4>Gray Corporates</h4>
            <p style={text}>
              Assisted in development, debugging, and building reusable UI components.
            </p>
            <p>Jan 2025 – Apr 2025</p>
          </div>

        </div>
      </div>

     
        {/* EDUCATION */}
<div style={{ padding: "80px 120px", textAlign: "center" }}>
  <h2 style={{ marginBottom: "40px" }}>Education</h2>

  <div style={{
    maxWidth: "600px",
    margin: "auto",
    padding: "30px",
    borderRadius: "15px",
    background: "rgba(255, 255, 255, 0.03)",
    border: "1px solid #2a2f5a",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 25px rgba(108, 76, 255, 0.2)",
    transition: "0.3s"
  }}
  
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.0)";
    e.currentTarget.style.boxShadow = "0 0 25px rgba(108, 76, 255, 0.5)";
  }}
  
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 0 15px rgba(108, 76, 255, 0.2)";
  }}
  >

    <h3 style={{ color: "#8b7cff", marginBottom: "10px" }}>
      Maharashtra Institute of Technology
    </h3>

    <p style={{ color: "#ccc", marginBottom: "10px" }}>
      Chh. Sambhajinagar
    </p>

    <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
      Electronics & Computer Engineering
    </p>

    <p style={{
      display: "inline-block",
      padding: "8px 15px",
      background: "#6c4cff",
      borderRadius: "20px",
      fontSize: "14px"
    }}>
      CGPA: 7.78 / 10
    </p>

  </div>
</div>
      {/* SKILLS */}
          <div id="skills" style={{ padding: "60px 120px", textAlign: "center" }}>
          <h2>Skills</h2>

          <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "30px",
              marginTop: "30px"
            }}>
        {skills.map((skill, i) => (
            <div key={i} style={{
            padding: "15px",
            border: "1px solid #2a2f5a",
            borderRadius: "10px"
        }}>
          <img
              src={skill.img}
              alt={skill.name}
              style={{
              width: "40px",
              marginBottom: "10px",
              filter: "drop-shadow(0 0 6px #6c4cff)"
            }}
          />
              <p style={{ fontSize: "14px" }}>{skill.name}</p>
          </div>
        ))}
      </div>
      </div>


      {/* PROJECTS */}
<div id="projects" style={{ padding: "60px 80px" }}>
  
  <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
    Projects
  </h2>

  {projects.map((proj, i) => (
    <div key={i} style={{
      display: "flex",
      alignItems: "center",
      gap: "40px",
      marginBottom: "60px",
      flexDirection: i % 2 === 0 ? "row" : "row-reverse"
    }}>

      {/* IMAGE */}
      <img 
        src={proj.img} 
        alt={proj.title} 
        style={{ 
          width: "300px",
          borderRadius: "10px"
        }} 
      />

      {/* TEXT */}
      <div>
        <h3>{proj.title}</h3>

        <p style={{ color: "#ccc", maxWidth: "400px" }}>
          {proj.desc}
        </p>

        <a 
          href={proj.github} 
          target="_blank" 
          rel="noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "8px 15px",
            background: "#6c4cff",
            color: "white",
            textDecoration: "none",
            borderRadius: "6px",
            fontSize: "14px"
          }}
        >
          GitHub
        </a>
      </div>

    </div>
  ))}

</div>


      {/* CONTACT */}
      <div id="contact" style={{
        padding: "50px",
        background: "#6c4cff",
        textAlign: "center"
      }}>
        <h3>Contact</h3>
        <p>Email: kharkarpratikshaamol@gmail.com</p>
        <p>Phone: +91 9322751539</p>
        <p>Pune, Maharashtra</p>
      </div>

    </div>
  );
}

const card = {
  flex: 1,
  padding: "20px",
  border: "1px solid #2a2f5a",
  borderRadius: "10px",
  textAlign: "center"
};

const text = {
  color: "#ccc",
  fontSize: "13px"
};