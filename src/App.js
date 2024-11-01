import React, { useState } from 'react';
import './App.css'; // Ensure this CSS file exists and is linked

function App() {
  // State to store form input values and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;

    // Basic validation
    if (!name || !email) {
      setError('Both fields are required');
    } else {
      setError('');
      alert(`Form submitted! \nName: ${name} \nEmail: ${email}`);
      // Here, you can add more actions, like sending data to a server
    }
  };

  return (
    <div className="App">
      <h1>Simple React Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

