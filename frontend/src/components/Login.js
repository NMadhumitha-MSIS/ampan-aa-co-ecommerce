import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5500/api/auth/login', credentials);
      setMessage(response.data.message);
      setIsSuccess(true);
      localStorage.setItem('token', response.data.token); // Save token
    } catch (error) {
      setMessage(error.response?.data?.error || 'Login failed.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
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
            placeholder="Enter your password"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-auth">
          Login
        </button>
      </form>
      {message && <p className={isSuccess ? 'text-success' : 'text-danger'}>{message}</p>}
    </div>
  );
}

export default Login;
