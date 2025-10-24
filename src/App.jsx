import { useState } from 'react';
import './App.css';

function App() {
  const [userType, setUserType] = useState(null);

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiology', location: 'New York', rating: 4.9 },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Dermatology', location: 'Los Angeles', rating: 4.8 },
    { id: 3, name: 'Dr. Amina Patel', specialty: 'Pediatrics', location: 'Chicago', rating: 4.95 },
  ];

  if (userType === 'patient') {
    return (
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h1>MediConnect</h1>
          </div>
          <button onClick={() => setUserType(null)} className="back-btn">
            ← Back to Home
          </button>
        </header>

        <main>
          <h2>Find Trusted Medical Professionals</h2>
          <div className="doctors-grid">
            {doctors.map(doc => (
              <div key={doc.id} className="doctor-card">
                <div className="doctor-header">
                  <h3>{doc.name}</h3>
                  <div className="rating">
                    ★ {doc.rating}
                  </div>
                </div>
                <p className="specialty">{doc.specialty}</p>
                <p className="location">📍 {doc.location}</p>
                <button className="book-btn">Book Appointment</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }

  if (userType === 'doctor') {
    return (
      <div className="app-container">
        <header className="header">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zM4 20h16a1 1 0 001-1V9a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1z" />
            </svg>
            <h1>Doctor Dashboard</h1>
          </div>
          <button onClick={() => setUserType(null)} className="back-btn">
            ← Back to Home
          </button>
        </header>

        <main>
          <h2>Today’s Appointments</h2>
          <div className="appointments-list">
            <div className="appointment-item">
              <div className="patient-info">
                <h3>James Wilson</h3>
                <p>10:00 AM • Online Consultation</p>
              </div>
              <div className="actions">
                <button className="accept-btn">Accept</button>
                <button className="reject-btn">Decline</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <h1>MediConnect</h1>
        </div>
      </header>

      <main className="landing">
        <div className="hero">
          <h2>Trusted Care. Anytime, Anywhere.</h2>
          <p>Connect with licensed healthcare professionals for consultations, prescriptions, and ongoing care — all in one secure platform.</p>
        </div>

        <div className="role-buttons">
          <button onClick={() => setUserType('patient')} className="btn patient-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            I'm a Patient
          </button>
          <button onClick={() => setUserType('doctor')} className="btn doctor-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2z" />
            </svg>
            I'm a Doctor
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;