import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://wallpapercave.com/wp/wp8664314.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',  // Parallax effect
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',  // Light overlay to enhance background visibility
      zIndex: 2,
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',  // Reduced opacity for better background visibility
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
      width: '350px',
      minHeight: '500px',
      textAlign: 'center',
      zIndex: 3,
      backdropFilter: 'blur(8px)',  // Added blur for a modern glassmorphism effect
      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    },
    loginFormHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7)',
    },
    header: {
      marginBottom: '25px',
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#222',
      letterSpacing: '1.5px',
    },
    input: {
      width: '100%',
      padding: '14px',
      margin: '12px 0',
      borderRadius: '50px',  // Rounded input fields
      border: '2px solid rgba(0, 123, 255, 0.3)',  // Subtle border
      fontSize: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Slight transparency for inputs
      transition: 'border-color 0.3s ease, background-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#007BFF',  // Border highlight on focus
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '50px',  // Rounded button
      cursor: 'pointer',
      margin: '20px 0',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'translateY(-3px)',  // Slight lift on hover
    },
    signUpLink: {
      display: 'block',
      marginTop: '15px',
      color: '#007BFF',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '1px',
      transition: 'color 0.3s ease',
    },
    signUpLinkHover: {
      color: '#0056b3',
    },
    errorMessage: {
      color: 'red',
      fontSize: '14px',
      marginTop: '10px',
    },
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hover, setHover] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Both fields are required.');
      return;
    }
    setErrorMessage('');
    navigate('/home');
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div
        style={{ ...styles.loginForm, ...(hover ? styles.loginFormHover : {}) }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <h2 style={styles.header}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          style={{
            ...styles.input,
            ...(inputFocused ? styles.inputFocus : {}),
          }}
          value={username}
          onChange={handleUsernameChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            ...styles.input,
            ...(inputFocused ? styles.inputFocus : {}),
          }}
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
        />
        {errorMessage && (
          <p style={styles.errorMessage}>{errorMessage}</p>
        )}
        <button
          style={{ ...styles.button, ...(buttonHovered ? styles.buttonHover : {}) }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
          onClick={handleLogin}
        >
          Login
        </button>
        <Link
          to="/signup"
          style={{ ...styles.signUpLink, ...(linkHovered ? styles.signUpLinkHover : {}) }}
          onMouseEnter={() => setLinkHovered(true)}
          onMouseLeave={() => setLinkHovered(false)}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
