import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        PK<span>.</span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/"           end className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Home</NavLink>
        <NavLink to="/experience"     className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Experience</NavLink>
        <NavLink to="/projects"       className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Projects</NavLink>
        <NavLink to="/skills"         className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Skills</NavLink>
        <NavLink to="/contact"        className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>Contact</NavLink>
      </div>

      <NavLink to="/contact" className="hire-btn">Hire Me ✦</NavLink>
    </nav>
  );
}