import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

export const Login = () => {

  return (
    <div className='loginsignup'>
    <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text"  placeholder='Your Name'/>
        <input type="email" placeholder='Email Address' />
        <input type="number"  placeholder='10-digit mobile number'/>
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm-Password' />
      </div>
      <button>Register</button>
      <p className="loginsignup-login">Already have an account? <Link to={'./login'}> <span>Login</span> </Link></p>
    <div className="loginsignup-agree">
      <input type="checkbox" name='' id='' />
      <p>By continuing, i agree to the terms of use & privacy policy  </p>
    </div>
    </div>
    </div>
  )
}

export default Login;
