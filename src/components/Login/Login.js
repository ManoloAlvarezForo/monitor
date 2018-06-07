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
  inputTextColor: {
    color: 'white'
  },
  buttonLogin: {
    width: '100%'
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formTitle: 'Please login to continue...',
      userNameText: 'Username',
      passwordText: 'Password',
      buttonText: 'Log In'
    }
  }
  render() {
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
                {this.state.formTitle}
              </div>
              <div class="group">
                <input style={styles.inputTextColor} type="text" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>{this.state.userNameText}</label>
              </div>
              <div class="group">
                <input style={styles.inputTextColor} type="password" required />
                <span class="highlight"></span>
                <span class="bar"></span>
                <label>{this.state.passwordText}</label>
              </div>
              <br />
              <div className="l-button">
                <Link style={styles.buttonLogin} className="button is-primary" to='/dashboards'>
                  {this.state.buttonText}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div >
    )
  }
}


export default Login;