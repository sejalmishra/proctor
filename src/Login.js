import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logoonly.png';
import {ReactComponent as Pic } from './assets/pic1.svg';

const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
      window.location.href = '/onboard'
  }

  return (
    <div>
      <div>
      <img src={logo} alt="Proctor Vision"/>
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' placeholder='Username'/>
        <input type='password' name='password' placeholder='Password'/>
        <a href='/'>Reset Password From Defalut/</a>
        <a href='/'>Forgot Password</a>
        <button type='submit'>Log In</button>
      </form>
      </div>
    </div>
  );
};

export default Login;