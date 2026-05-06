import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    // Wire up your real email service (EmailJS, Formspree, etc.) here.
    // For now we simulate a 1.2 s delay:
    setTimeout(() => setStatus("sent"), 1200);
  }

  return (
    <div className="page-wrapper">
      <div className="page-inner" style={{ minHeight: "calc(100vh - 74px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>

        <div className="contact-grid">
          {/* LEFT — info */}
          <div>
            <h2 className="contact-big">
              Let's build<br />something <span>great</span><br />together.
            </h2>
            <p className="contact-sub">
              I'm currently open to new opportunities — freelance projects,
              internships, or full-time roles. Feel free to reach out!
            </p>

            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-info">
                  <label>EMAIL</label>
                  <span>kharkarpratikshaamol@gmail.com</span>
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

          {/* RIGHT — form */}
          <form className="contact-form-side" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>YOUR NAME</label>
              <input type="text" className="form-input" placeholder="Rahul Sharma" required />
            </div>
            <div className="form-group">
              <label>EMAIL ADDRESS</label>
              <input type="email" className="form-input" placeholder="rahul@example.com" required />
            </div>
            <div className="form-group">
              <label>SUBJECT</label>
              <input type="text" className="form-input" placeholder="Project collaboration" required />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea className="form-input" placeholder="Tell me about your project..." required />
            </div>

            <button
              type="submit"
              className={`form-submit${status === "sent" ? " sent" : ""}`}
              disabled={status !== "idle"}
            >
              {status === "idle"    && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "sent"    && "Message Sent! ✓"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
