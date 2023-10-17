import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState()


  const navigate = useNavigate()
  async function handleSubmit(e) {
     e.preventDefault()
    const item = {  email, password };

   
      const response = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
        
      });
      console.log(response);

      if (response.ok) {
        console.log('Login Successful:',item);
        toast.success("Login Successful")
        navigate('/');
        
      } else if(!response.ok) {
        console.error('Invalid Credentials:', response);
        setError('Invalid Credentials', response);
        toast.error("Invalid Credentials")
      }

  }
 setTimeout(() => {
  setError(false)
 }, 5000);
    return (
      <div className="custom-form container"  id="container">
      
      <div className="custom-form form-container sign-in-container">
        <form >


          <h1>Sign in</h1>
          <div className="custom-form social-container">
            <a href="#" className="custom-form social"><i className="custom-form fab fa-facebook-f"></i></a>
            <a href="#" className="custom-form social"><i className="custom-form fab fa-google-plus-g"></i></a>
            <a href="#" className="custom-form social"><i className="custom-form fab fa-linkedin-in"></i></a>
          </div>
          
          <span>or use your account</span>
          <input type="email" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value={password}/>
          <a href="#">Forgot your password?</a>
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
      <div className="custom-form overlay-container">
        <div className="custom-form overlay">
          <div className="custom-form overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
      
          </div>
          <div className="custom-form overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
           <Link to="/signup"> <button className="custom-form ghost" id="signUp" >Sign Up</button></Link>
           <ToastContainer autoClose={3000}/>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created with <i className="custom-form fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
          - Read how I created this and how you can join the challenge
          <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
        </p>
      </footer>
    </div>
    );
}

export default Login;
