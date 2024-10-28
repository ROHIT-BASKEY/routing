// src/pages/SignIn.js
import React, { useState } from 'react';
import { useRole } from '../../context/RoleContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const { login } = useRole(); // Role context to store the user's role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Handle sign-in logic
  const handleSignIn = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      login(user.role); // Save the role in context

      // Navigate to role-specific page
      switch (user.role) {
        case 'director':
          navigate('/director');
          break;
        case 'coach':
          navigate('/coach');
          break;
        case 'athlete':
          navigate('/athlete');
          break;
        case 'fan':
          navigate('/fan');
          break;
        default:
          navigate('/unauthorized'); // Fallback in case of an unexpected role
      }
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default SignIn;
