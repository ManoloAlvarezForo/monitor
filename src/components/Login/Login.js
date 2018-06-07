import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import backgroundAsset from '../../assets/BG-2-1.jpg';
import logoAsset from '../../assets/brand-sciencelogic-logo-reverse-rgb.png';

const styles = {
  content: {
    backgroundImage: `url(${backgroundAsset})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
  },
  loginContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: '10px',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 5px 25px'
  },
  logoContainer: {
    height: '500px',
    width: '450px',
    backgroundColor: 'white',
    borderRadius: '10px 0 0 10px',
    opacity: '0.85',
    backgroundColor: '#ffffffb3'
  },
  logoAssetContainer: { 
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    height: '500px',
    width: '450px',
    backgroundColor: '#1B1B1B',
    borderRadius: '0 10px 10px 0',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formSize: { 
    width: '300px'
  },
  formTitle: { 
    color: 'white',
    marginBottom: '50px'
  },
  place: {
    color: 'white',
    background: 'none',
    opacity: 1
  }
}

const Login = () => {
  return (
    <div style={styles.content}>
      <div style={styles.loginContainer}>
        <div style={styles.logoContainer}>
          <div style={styles.logoAssetContainer}>
            <div>
              <img src={logoAsset} alt="" />
            </div>
          </div>
        </div>
        <div style={styles.formContainer}>
          <form style={styles.formSize}>
            <div style={styles.formTitle}>
              Please login to continue...
            </div>
            <div class="group">
              <input style={{ color: 'white' }} type="text" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Username</label>
            </div>
            <div class="group">
              <input style={{ color: 'white' }} type="password" required />
              <span class="highlight"></span>
              <span class="bar"></span>
              <label>Password</label>
            </div>
            <br />
            <div className="l-button">
              <Link style={{ width: '100%', fontWeight: 'bold' }} className="button is-primary" to='/dashboards'>
                Log In
            </Link>
            </div>
          </form>
        </div>
        <div>hello</div>
      </div>
    </div >
  )
}

export default Login;