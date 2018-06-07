import React from 'react';
import { Link } from 'react-router-dom';
import loginStyles from './Login.css';
import image from '../../assets/BG-2-1.jpg';

const styles = {
  content: {
    backgroundImage: `url(${image})`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
  },
  loginContainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center'
  },
  logoContainer: {
    height: '500px',
    width: '450px',
    backgroundColor: 'white',
    borderRadius: '10px 0 0 10px'
  },
  formContainer: {
    height: '500px',
    width: '450px',
    backgroundColor: '#1B1B1B',
    borderRadius: '0 10px 10px 0',
    opacity: 0.7
  }

}

const Login = () => {
  return (
    <div style={styles.content}>
      <div style={styles.loginContainer}>
        <div style={styles.logoContainer}>Logo</div>
        <div style={styles.formContainer}>
          <form style={{ alignSelf: 'center', padding: '70px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', padding: '30px', fontWeight: 'bold' }}>Login</div>
            <div className="field">
              <label style={{ display: 'flex', alignSelf: 'flex-start' }} className="label">Name</label>
              <div className="control has-icons-left">
                <input style={ loginStyles.place } className="input is-rounded" type="email" placeholder="e.g manolo@gmail.com" />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label style={{ display: 'flex', alignSelf: 'flex-start' }} className="label">Password</label>
              <div className="control">
                <input style={ loginStyles.place }  className="input is-rounded" type="password" placeholder="password" />
              </div>
            </div>
            <br />
            <Link style={{ width: '100%', fontWeight: 'bold' }} className="is-rounded button is-success is-outlined" to='/dashboards'>
              Send
            </Link>
          </form>
        </div>
      </div>
    </div >
  )
}

export default Login;