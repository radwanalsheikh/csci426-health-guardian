import React from 'react';

const Services = () => {
  return (
    <div className="page">
      <h2>Platform Features & Services</h2>
      <div className="grid">
        <div className="card-box">
          <h3>Symptom & Health Checking</h3>
          <p>Instant evaluation of common symptoms with preventive suggestions.</p>
        </div>
        <div className="card-box">
          <h3>Daily Metric Tracking</h3>
          <p>Track your BMI, water consumption, and sleep cycles effortlessly.</p>
        </div>
        <div className="card-box">
          <h3>Medication Management</h3>
          <p>Organize doses and manage daily medication logs easily.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;