import React, { useState, useEffect } from "react";

function Contact() {
  const colors = ["#FFEDFA", "#FFB8E0", "#EC7FA9", "#BE5985", "#FFB8E0"];
  const [bgColor, setBgColor] = useState("#fbf6f8ff");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!formData.name) newErrors.name = "Please enter your name!";
    if (!formData.email) {
      newErrors.email = "Please enter your email!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email!";
    }
    if (!formData.message) newErrors.message = "Please enter your message!";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section
      className="contact-section"
      id="contact"
      onClick={changeColor}
      style={{ backgroundColor: bgColor }}
    >
      <h2>Contact</h2>

      {submitted && (
        <div
          style={{
            padding: "10px",
            backgroundColor: "rgba(157, 68, 74, 1)",
            color: "#000",
            borderRadius: "5px",
            marginBottom: "15px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Thank you!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "invalid" : ""}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "invalid" : ""}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? "invalid" : ""}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
