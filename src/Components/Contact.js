import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Components/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // State to manage form submission
  const [error, setError] = useState(null); // State to manage errors

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(
      'service_0x8l0kd', // Replace with your EmailJS service ID
      'template_orm5w38', // Replace with your EmailJS template ID
      templateParams,
      '80r-Rni3jRdAWy-wl' // Replace with your EmailJS user ID
    )
    .then(response => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
    })
    .catch(err => {
      console.log('FAILED...', err);
      setError('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="Contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>

      {submitted && (
        <div className="success-message">
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

    </div>
  );
}

export default Contact;
