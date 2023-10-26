import './CSS/LoginSignup.css';
import React, { useState } from 'react';

const LoginSignup = () => {


  const userRegistration = [
    { username: 'Neeraj', password: 'pass123' },
    { username: 'Alok', password: 'pass1234' },
    // Add more users as needed
  ];

  const auth = (username, password) => {
    const user = userRegistration.find(user => user.username === username && user.password === password);

    if (user) {
      // Successful login
      return { success: true, message: 'Login successful' };
    } else {
      // Failed login
      return { success: false, message: 'Invalid username or password' };
    }
  };

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const result = auth(username, password);

    if (result.success) {
      // Successful login, you can redirect or perform other actions here
      setErrorMessage('Login Successfully');
    } else {
      // Failed login, display error message
      setErrorMessage(result.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit"><span>Login</span></button>
        <div className="form-group">
          <span className="error-message">{errorMessage}</span>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
