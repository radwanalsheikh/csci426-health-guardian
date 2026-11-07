import React, { useState } from 'react';

const MedsReminder = () => {
  const [meds, setMeds] = useState([
    { id: 1, name: 'Vitamin C', time: '09:00 AM', dose: '1 Tablet', taken: true },
    { id: 2, name: 'Panadol Extra', time: '02:00 PM', dose: '1 Tablet as needed', taken: false }
  ]);
  const [newMed, setNewMed] = useState('');
  const [newTime, setNewTime] = useState('');

  const addMed = (e) => {
    e.preventDefault();
    if (!newMed || !newTime) return;
    setMeds([...meds, { id: Date.now(), name: newMed, time: newTime, dose: '1 Tablet', taken: false }]);
    setNewMed('');
    setNewTime('');
  };

  const toggleTaken = (id) => {
    setMeds(meds.map(m => m.id === id ? { ...m, taken: !m.taken } : m));
  };

  return (
    <div className="page">
      <h2>Medication Tracker</h2>

      <form onSubmit={addMed} className="inline-form">
        <input type="text" placeholder="Medication Name" value={newMed} onChange={(e) => setNewMed(e.target.value)} />
        <input type="text" placeholder="Schedule (e.g. 08:00 PM)" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
        <button type="submit" className="btn">Add Medication</button>
      </form>

      <div className="meds-list">
        {meds.map(m => (
          <div key={m.id} className={`med-item ${m.taken ? 'done' : ''}`}>
            <div>
              <h3>{m.name}</h3>
              <p>Schedule: {m.time} | Dose: {m.dose}</p>
            </div>
            <button onClick={() => toggleTaken(m.id)} className="btn-small">
              {m.taken ? 'Taken ✓' : 'Mark as Taken'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedsReminder;