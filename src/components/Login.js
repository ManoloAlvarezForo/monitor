import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh' }}>
        <div style={{ alignSelf: 'center', padding: '50px', borderRadius: '7px', backgroundColor: 'rgb(38, 60, 80)' }}>
          <form style={{ width: '350px' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center', padding: '30px', fontWeight: 'bold', color: '#23d160' }}>Login</div>
            <div className="field">
              <label style={{ color: '#23d160', display: 'flex', alignSelf: 'flex-start' }} className="label">Name</label>
              <div className="control">
                <input className="input is-rounded" type="email" placeholder="e.g manolo@gmail.com" />
              </div>
            </div>
            <div className="field">
              <label style={{ color: '#23d160', display: 'flex', alignSelf: 'flex-start' }} className="label">Password</label>
              <div className="control">
                <input className="input is-rounded" type="password" placeholder="password" />
              </div>
            </div>
            <br/>
            <Link style={{ width: '350px', fontWeight: 'bold' }} className="is-rounded button is-success is-outlined" to='/dashboards'>
              Send
            </Link>
          </form>
        </div>
      </div>

    )
}

export default Login;