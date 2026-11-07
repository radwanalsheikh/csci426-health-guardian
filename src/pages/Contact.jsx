import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="page">
      <h2>Contact Support</h2>
      {submitted ? (
        <div className="alert">Thank you! Your message has been sent successfully.</div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message..." rows="4" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;