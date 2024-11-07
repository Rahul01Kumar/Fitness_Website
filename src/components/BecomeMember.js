// BecomeMember.js
import React, { useState } from 'react';
import './BecomeMember.css';

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
    <div id="member-section" className="member-section">
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
