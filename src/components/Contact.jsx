import "./Contact.css";

export default function Contact() {
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
            Have a project in mind or just want to say hi? Reach out through any
            of these.
          </p>

          <div className="contact__links">
            <a
              className="contact__link-card"
              href="mailto:gupta.laveesh@gmail.com"
            >
              <span className="contact__link-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3.5 6.5L12 13L20.5 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="contact__link-text">
                <span className="contact__link-label">Email</span>
                <span className="contact__link-value">
                  gupta.laveesh@gmail.com
                </span>
              </span>
            </a>

            <a
              className="contact__link-card"
              href="https://github.com/laveesh-gupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <span className="contact__link-text">
                <span className="contact__link-label">GitHub</span>
                <span className="contact__link-value">@laveesh-gupta</span>
              </span>
            </a>

            <a
              className="contact__link-card"
              href="https://linkedin.com/in/laveesh-gupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact__link-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                </svg>
              </span>
              <span className="contact__link-text">
                <span className="contact__link-label">LinkedIn</span>
                <span className="contact__link-value">/in/laveesh-gupta</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
