import React, { useState } from 'react';

import './App.css'; 

function Contact() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending data to a server or displaying a success message.
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
<div>
  <h2 className="contact-heading">Contact Us</h2>
  <form onSubmit={handleFormSubmit} className="contact-form">
    <div className="form-group">
      <label htmlFor="name" className="form-label">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
      />
    </div>
    <div className="form-group">
      <label htmlFor="message" className="form-label">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="form-textarea"
      />
    </div>
    <button type="submit" className="submit-button">Submit</button>
  </form>
</div>
  )}

export default Contact;