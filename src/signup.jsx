import React from 'react';
import {useNavigate} from 'react-router-dom';
const SignUpPage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(https://wallpapercave.com/wp/wp8664314.jpg)',
      backgroundSize: 'cover',
    },
    signUpForm: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      width: '400px',
      minHeight: '500px',
      textAlign: 'center',
    },
    header: {
      marginBottom: '20px',
      fontSize: '24px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '10px 0',
      fontSize: '16px',
    },
    signInLink: {
      display: 'block',
      marginTop: '10px',
      color: '#007BFF',
      textDecoration: 'none',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.signUpForm}>
        <h2 style={styles.header}>Sign Up</h2>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="email" placeholder="Email" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <input type="password" placeholder="Confirm Password" style={styles.input} />
        <button style={styles.button}>Sign Up</button>
        <a href="/c" style={styles.signInLink}>Already have an account? Login</a>
      </div>
    </div>
  );
};

export default SignUpPage;
