import React, { useState } from "react";
import "../styles/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Submitting Login Data:", formData);
  };

  return (
    <div className="auth-wrapper">
      <div className="login-card">
        <h2>LOGIN</h2>
        <p>Enter your credentials to access your account.</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <p className="footer-text">
          Don't have an account?
          <span>Create one</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
