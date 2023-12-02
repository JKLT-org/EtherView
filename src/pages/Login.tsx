import React, { CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Props = {
  setUsernameApp: Function
};


 const Login = (props:Props) => {
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState(false); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const loginBoxStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '350px',
    padding: '15px',
    margin: '10% auto',
    border: '1px solid #eaeaea',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f7f7f7',
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

  const inputIcon: CSSProperties = {
    position: 'relative',
    display: 'flex',
    width: '100%', 
    marginBottom: '15px',
    marginTop: '20px'
  };
  
  const iconStyle: CSSProperties = {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: '#6c757d', 
  };
  
  const inputStyle: CSSProperties = {
    width: '100%',
    padding: '15px 40px 15px 30px', 
    margin: '0',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none', 
  };
  
  const eyeIconStyle: CSSProperties = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#6c757d',
    fontSize: '16px'
  };
  

  const signUpClick = () => {
    navigate('/signup')
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  axios.defaults.withCredentials = true;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('login attempted');
    const user = {
        username: username,
        password: password
    };

    axios
        .post('http://localhost:3000/api/login', user, {
        })
        .then(response=> {
            console.log('Login successful!');
            props.setUsernameApp(username);
            navigate('/dashboard');
        })
        .catch(error => {
            console.log('Login failed:', error);
            setLoginError(true);
        })
  }

// return (
//     <div style={loginBoxStyle}>
//       {loginError && <p style={{ color: 'red' }}>Invalid login information. Please try again or <a href="/signup">sign up</a>.</p>}
  
//       <form onSubmit={handleLogin}>
//         <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} style={inputStyle} />
//         <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} style={inputStyle} />
//         <button type="submit" style={buttonStyle}>Sign In</button>
//       </form>
  
//       <a href="#forgot-password" style={linkStyle}>Forgot Password?</a>
//       <button style={secondaryButtonStyle} onClick={signUpClick}>Don't have an account yet? Create one now</button>
//     </div>
//   );



return (
    <div style={loginBoxStyle}>
      {loginError && <p style={{ color: 'red' }}>Invalid login information. Please try again or <a href="/signup">sign up</a>.</p>}
  
      <form onSubmit={handleLogin}>
        <div style={inputIcon}>
          <i className="fas fa-user" style={iconStyle}></i>
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} style={inputStyle} />
        </div>

        <div style={inputIcon}>
          <i className="fas fa-lock" style={iconStyle}></i>
          <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={handlePasswordChange} style={inputStyle} />
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility} style={eyeIconStyle}></i>
        </div>
        
        <button type="submit" style={buttonStyle}>Sign In</button>
      </form>
  
      <a href="#forgot-password" style={linkStyle}>Forgot Password?</a>
      <button style={secondaryButtonStyle} onClick={signUpClick}>Don't have an account yet? Create one now</button>
    </div>
  );


  
}

export default Login;

