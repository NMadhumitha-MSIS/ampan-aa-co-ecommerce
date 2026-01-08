import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/auth/register', formData);
      setMessage(response.data.message);
      setIsSuccess(true);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Registration failed.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            placeholder="Enter your full name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter a password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            name="dateOfBirth"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            placeholder="123-456-7890"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-auth">
          Create Account
        </button>
      </form>
      {message && <p className={isSuccess ? 'text-success' : 'text-danger'}>{message}</p>}
    </div>
  );
}

export default Register;
