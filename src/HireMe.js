import React from "react";

export default function HireMe() {
  return (
    <div style={{
      background: "#0a0f2c",
      minHeight: "100vh",
      color: "white",
      padding: "60px"
    }}>

      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Hire Me
      </h1>

      {/* FORM */}
      <form
        action="https://formspree.io/f/your_form_id"  // 👈 CHANGE THIS
        method="POST"
        style={{
          maxWidth: "500px",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "30px",
          borderRadius: "10px",
          border: "1px solid #2a2f5a"
        }}
      >

        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={inputStyle}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={inputStyle}
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          style={inputStyle}
        />

        {/* BUTTON */}
        <button
          type="submit"
          style={btnStyle}
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

/* INPUT STYLE */
const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #2a2f5a",
  background: "transparent",
  color: "white",
  outline: "none"
};

/* BUTTON STYLE */
const btnStyle = {
  background: "#6c4cff",
  border: "none",
  padding: "12px",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer",
  fontSize: "16px"
};