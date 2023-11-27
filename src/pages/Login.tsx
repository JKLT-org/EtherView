import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';


export const Login = () => {
    const navigate = useNavigate();
  const loginBoxStyle: CSSProperties = {
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

  const secondaryButtonStyle: CSSProperties = {
    marginTop: '15px',
    backgroundColor: 'transparent',
    color: '#09203f',
    border: '1px solid #09203f',
    padding: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const signUpClick = () => {
    navigate('/signup')
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const user = {
        username: username,
        password: password,
        email: email
    };

    axios
        .post('http://localhost:')
  }


  return (
    <div style={loginBoxStyle}>
      <input type="text" placeholder="Username" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle}>Sign In</button>
      <a href="#forgot-password" style={linkStyle}>Forgot Password?</a>
      <button style={secondaryButtonStyle} onClick={signUpClick}>Don't have an account yet? Create one now</button>
    </div>
  );
}

