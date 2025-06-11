import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import './Contact.css';

function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      "service_2y3c5ct",      // Service ID
      "template_rimjmxt",     // Template ID
      form.current,
      "Sji4Odd0qQm40IxvC"     // Public Key
    )
      .then(
        () => {
          setMessageSent(true);
          setSending(false);
          form.current.reset();
        },
        () => {
          alert("Failed to send message, try again.");
          setSending(false);
        }
      );
  };

  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => setMessageSent(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-title">Let's connect!</div>
          <div className="contact-line">
            <i className="fa-solid fa-user"></i>
            <span>Tomer Hadas</span>
          </div>
          <div className="contact-line">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:thadas112@gmail.com">thadas112@gmail.com</a>
          </div>
          <div className="contact-line">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:0547294858">054-7294858</a>
          </div>
          <div className="contact-line">
            <i className="fa-brands fa-linkedin"></i>
            <a
              className="linkedin-link"
              href="https://linkedin.com/in/tomer-hadas"
              target="_blank"
              rel="noopener noreferrer"
            >LinkedIn</a>
          </div>
          <div className="contact-line">
            <i className="fa-brands fa-github"></i>
            <a
              className="github-link"
              href="https://github.com/tomerhadas"
              target="_blank"
              rel="noopener noreferrer"
            >GitHub</a>
          </div>
        </div>
        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          />
          <button type="submit" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
          {messageSent && (
            <div className="success-message">
             Tnx! your message has arrived! 😊✉️  
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
