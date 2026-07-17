import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your backend, form service, or email API.
    console.log("Contact form submitted:", formData);
    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__ambient" aria-hidden="true">
        <span className="contact__orb contact__orb--one" />
        <span className="contact__orb contact__orb--two" />
      </div>

      <div className="contact__container">
        <div className="contact__glass">
          <span className="contact__eyebrow">Get in Touch</span>
          <h2 className="contact__title">Let's build something together</h2>
          <p className="contact__subtitle">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <label className="contact__label" htmlFor="name">
                  Name
                </label>
                <input
                  className="contact__input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="contact__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="message">
                Message
              </label>
              <textarea
                className="contact__input contact__textarea"
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact__btn" type="submit">
              {status === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          <div className="contact__links">
            <a className="contact__link" href="mailto:you@example.com">
              Email
            </a>
            <a
              className="contact__link"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="contact__link"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
