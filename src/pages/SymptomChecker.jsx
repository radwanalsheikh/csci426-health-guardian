import React, { useState } from 'react';

const SymptomChecker = () => {
  const [symptom, setSymptom] = useState('');
  const [duration, setDuration] = useState('1');
  const [severity, setSeverity] = useState('mild');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    let possibilities = [];
    let advice = '';
    let urgent = false;

    if (symptom === 'headache') {
      if (severity === 'severe') {
        possibilities = ['Acute Migraine', 'High Blood Pressure', 'Severe Eye Strain'];
        advice = 'If sudden and severe, seek immediate medical attention or visit urgent care.';
        urgent = true;
      } else {
        possibilities = ['Tension Headache', 'Dehydration', 'Lack of Sleep'];
        advice = 'Drink 2 glasses of water, rest in a quiet room, and limit screen time.';
      }
    } else if (symptom === 'fever') {
      possibilities = ['Viral Infection (Flu)', 'Mild Inflammation'];
      advice = 'Stay hydrated and rest. Consult a doctor if fever exceeds 38.5°C for more than 48 hours.';
    } else if (symptom === 'fatigue') {
      possibilities = ['Vitamin Deficiency (D/B12)', 'Mild Anemia', 'Chronic Stress'];
      advice = 'Optimize sleep hygiene and consider blood tests for essential vitamins.';
    }

    setResult({ possibilities, advice, urgent });
  };

  return (
    <div className="page">
      <h2>Smart Symptom Checker</h2>
      <p>Select your symptom to receive general non-diagnostic insights and guidance.</p>

      <form onSubmit={handleCheck} className="health-form">
        <label>Primary Symptom:</label>
        <select value={symptom} onChange={(e) => setSymptom(e.target.value)} required>
          <option value="">-- Select Symptom --</option>
          <option value="headache">Headache</option>
          <option value="fever">Fever</option>
          <option value="fatigue">General Fatigue</option>
        </select>

        <label>Severity Level:</label>
        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="mild">Mild / Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <label>Duration (Days):</label>
        <input type="number" min="1" value={duration} onChange={(e) => setDuration(e.target.value)} />

        <button type="submit" className="btn">Analyze Symptoms</button>
      </form>

      {result && (
        <div className={`result-card ${result.urgent ? 'urgent' : ''}`}>
          <h3>Potential Non-Diagnostic Indicators:</h3>
          <ul>
            {result.possibilities.map((pos, idx) => <li key={idx}>{pos}</li>)}
          </ul>
          <h4>Recommendation:</h4>
          <p>{result.advice}</p>
          <small>* Disclaimer: This application provides general suggestions and does not replace medical advice.</small>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;