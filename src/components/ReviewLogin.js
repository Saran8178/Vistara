import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Nav from './Nav'; // Assuming Nav component is defined in Nav.js

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const logx = (e) => {
    e.preventDefault();
    const a = localStorage.getItem('email');
    const b = localStorage.getItem('pass');
    if (a === data.email && b === data.password) {
      // Check if the user is an admin or regular user (you can use a flag or role for this)
      const isAdmin = data.email === 'admin@example.com'; // Example: Change this condition based on your logic
      if (isAdmin) {
        navigate('/AdDashboard'); // Navigate to the admin dashboard
      } else {
        navigate('/Dashboard'); // Navigate to the regular user dashboard
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <form className="form-control" onSubmit={logx}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" name="Email" onChange={handleChange} /><br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" name="password" onChange={handleChange} /><br />
        <button className="enter" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
  