import React, { useState, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirm, setConfirm] = useState('');
  const [mismatch, setMismatch] = useState(false);

  const signUpBoxStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    padding: '40px',
    margin: '10% auto',
    border: '1px solid #eaeaea',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
  };

  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const buttonStyle: CSSProperties = {
    width: '100%',
    padding: '15px',
    margin: '20px 0',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(to top, #09203f 0%, #537895 100%)',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const linkStyle: CSSProperties = {
    color: '#09203f',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '14px',
  };

  const goToLogin = () => {
    navigate('/');
  };


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  }
  const handleSignup = async (event) => {
    event.preventDefault();
    if (password === confirm) {
    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        username,
        email,
        password,
      });
      console.log(response.data);
      navigate('/dashboard');
    } catch (error) {
      //Handle error, can we send back what caused the error? like if email address already in use etc, so we can show message? 
      console.error(error);
    }
  } else {
    setMismatch(true);
  }
  };

  return (
    <div style={signUpBoxStyle}>
      {mismatch && <p  style={{ color: 'red' }}> Passwords do not match. Please try again. </p>}
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={handleConfirmChange}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
      <a onClick={goToLogin} style={linkStyle}>Already have an account? Sign In</a>
    </div>
  );
};
