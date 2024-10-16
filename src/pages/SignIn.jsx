import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Use bcryptjs instead of bcrypt
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Fetch the user data using a GET request
      const response = await axios.get(`http://localhost:3000/users?username=${formData.username}`);

      // Check if a user with the given username exists
      if (response.data.length > 0) {
        const user = response.data[0]; // Assuming usernames are unique

        // Validate password using bcrypt
        const validPassword = await bcrypt.compare(formData.password, user.password);

        if (validPassword) {
          // Generate JWT token
          const token = jwt.sign({ username: user.username }, 'amaresh', { expiresIn: '1h' });
          localStorage.setItem('token', token);

          navigate('/');
        } else {
          alert('Invalid password');
        }
      } else {
        alert('User not found');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default SignIn;
