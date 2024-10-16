import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs'; // Use bcryptjs instead of bcrypt

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(formData.password, salt);

      const user = {
        username: formData.username,
        password: hashedPassword
      };

      await axios.post('http://localhost:3000/users', user);
      console.log('User registered successfully');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" name="username" onChange={handleChange} value={formData.username} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
