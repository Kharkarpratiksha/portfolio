import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_vyfnuzp",   
        "template_4bttjcl", 
        e.target,
        "3Rmf_CuFClxziaxWM"    
      )
      .then(() => {
        setStatus("sent");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("idle");
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="page-wrapper">
      <div className="page-inner" style={{ minHeight: "calc(100vh - 74px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <div className="contact-grid">
          
          {/* LEFT */}
          <div>
            <h2 className="contact-big">
              Let's build<br />something <span>great</span><br />together.
            </h2>

            <p className="contact-sub">
              I'm open to freelance, internships, or full-time roles.
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-info">
                  <label>EMAIL</label>
                  <span>yourmail@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-info">
                  <label>LOCATION</label>
                  <span>Pune, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="contact-form-side" onSubmit={handleSubmit}>
            
            <div className="form-group">
              <label>YOUR NAME</label>
              <input name="user_name" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input name="user_email" type="email" className="form-input" required />
            </div>

            <div className="form-group">
              <label>SUBJECT</label>
              <input name="subject" type="text" className="form-input" required />
            </div>

            <div className="form-group">
              <label>MESSAGE</label>
              <textarea name="message" className="form-input" required />
            </div>

            <button
              type="submit"
              className={`form-submit${status === "sent" ? " sent" : ""}`}
              disabled={status === "sending"}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent! ✓"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}