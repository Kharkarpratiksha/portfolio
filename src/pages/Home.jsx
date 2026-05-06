import { Link } from "react-router-dom";
import profile from "../images/Myprofile.jpeg";

export default function Home() {
  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="home-hero">

        <p className="hero-name-tag">Pratiksha Kharkar</p>

        {/* Big overlapping PORTFOLIO title — like in the reference image */}
        <div className="big-title-wrap">
          <span className="year-badge">'25</span>
          <span className="big-title">PORT</span>
          <span className="big-title-outline">FOLIO</span>
        </div>

        <p className="hero-desc">
          Full Stack Web Developer. Building responsive web applications using
          React and WordPress — with a focus on clean UI, fast performance, and
          solving real-world problems.
        </p>

        <div className="hero-cta">
          <Link to="/projects" className="btn-primary">View Projects →</Link>
          <Link to="/contact"  className="btn-outline">Get In Touch</Link>
        </div>

        {/* Right side avatar — swap placeholder with your photo */}
        <div className="hero-avatar">
          <div className="hero-avatar-inner">
            {/* OPTION A — placeholder
            <div className="avatar-initials">PK</div>
            <div className="avatar-hint">Your photo here</div>
*/}
            <img src={profile} alt="Pratiksha" style={{ width:"100%",height:"100%",objectFit:"cover",borderRadius:12 }} />
        
          </div>
        </div>

      </div>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">3+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">2+</div>
          <div className="stat-label">Internships</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">13+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">7.78</div>
          <div className="stat-label">CGPA</div>
        </div>
      </div>

    </div>
  );
}