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
  formContainer: {
    height: '500px',
    width: '450px',
    backgroundColor: '#1B1B1B',
    borderRadius: '0 10px 10px 0',
    opacity: 0.7
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
          <div style={{height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div>
              <img src={logoAsset} alt="" />
            </div>
          </div>
        </div>
        <div style={styles.formContainer}>
          <form style={{ alignSelf: 'center', padding: '70px' }}>
            <div style={{ color: 'white', fontSize: '1rem', textAlign: 'center', padding: '45px', fontWeight: 'bold' }}>Please login to continue...</div>
            <div className="field">
              <div className="control has-icons-left">
                <input className="input is-rounded cc" style={styles.place} type="email" placeholder="Username" />
                <span className="icon is-small is-left">
                  <i className="fa fa-user-o"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left">
                <input style={styles.place} className="input is-rounded cc" type="password" placeholder="Password" />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <br />
            <div className="l-button">
              <Link style={{ width: '100%', fontWeight: 'bold' }} className="is-rounded button is-success is-outlined" to='/dashboards'>
                Send
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Login;