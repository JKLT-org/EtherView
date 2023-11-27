import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const SignUp = () => {
    const navigate = useNavigate();
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

  return (
    <div style={signUpBoxStyle}>
      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="text" placeholder="Username" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <input type="password" placeholder="Confirm Password" style={inputStyle} />
      <button style={buttonStyle}>Sign Up</button>
      <a onClick={goToLogin} style={linkStyle}>Already have an account? Sign In</a>
    </div>
  );
};
