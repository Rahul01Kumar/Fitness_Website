// BecomeMember.js
import React, { useState } from 'react';
import './BecomeMember.css';
import bg from '../assets/img_1.jpg';  // Import the background image

const BecomeMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goals: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`Thank you for joining, ${formData.name}!`);
    setFormData({ name: '', email: '', goals: '' });
  };

  return (
    <div
      id="member-section"
      className="member-section"
      style={{
        backgroundImage: `url(${bg})`,  // Set the background image
        backgroundSize: 'cover',        // Ensure the background covers the full div
        backgroundPosition: 'center',   // Center the background image
        padding: '40px',                // Add some padding for better content visibility
        color: 'white'                  // Ensure the text is readable on the background
      }}
    >
      <h2>Become a Member</h2>
      <p>Join us and start your journey to a healthier you!</p>
      <form onSubmit={handleSubmit} className="member-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Fitness Goals:
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="Tell us about your fitness goals"
          />
        </label>
        <button type="submit" className="submit-btn">Join Now</button>
      </form>
    </div>
  );
};

export default BecomeMember;
