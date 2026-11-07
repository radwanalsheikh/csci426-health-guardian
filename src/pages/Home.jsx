import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [sleep, setSleep] = useState(7);
  const [water, setWater] = useState(2);

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  let bmiStatus = '';
  if (bmi < 18.5) bmiStatus = 'Underweight';
  else if (bmi < 25) bmiStatus = 'Normal weight';
  else if (bmi < 30) bmiStatus = 'Overweight';
  else bmiStatus = 'Obesity';

  return (
    <div className="page home">
      <div className="hero">
        <h1>Smart Health Dashboard</h1>
        <p>Monitor your daily wellness metrics and preventive insights in real-time.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>BMI Calculator</h3>
          <div className="inputs-inline">
            <label>Weight (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
            <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
          </div>
          <div className="stat-result">
            <p>BMI Score: <strong>{bmi}</strong></p>
            <p>Category: <span>{bmiStatus}</span></p>
          </div>
        </div>

        <div className="dash-card">
          <h3>Daily Intake & Sleep</h3>
          <label>Sleep Duration: <strong>{sleep} hours</strong></label>
          <input type="range" min="3" max="12" value={sleep} onChange={(e) => setSleep(e.target.value)} />
          
          <label>Water Consumption: <strong>{water} Liters</strong></label>
          <input type="range" min="0.5" max="5" step="0.5" value={water} onChange={(e) => setWater(e.target.value)} />
        </div>
      </div>

      <div className="cta-banner">
        <h3>Feeling unwell today?</h3>
        <Link to="/symptoms" className="btn">Run Smart Symptom Checker</Link>
      </div>
    </div>
  );
};

export default Home;