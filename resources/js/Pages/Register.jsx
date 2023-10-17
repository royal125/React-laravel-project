import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isRightPanelActive, setIsRightPanelActive] = useState(true);
  
  const handlePanelChange = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
   const response =  await axios.post('http://127.0.0.1:8000/api/signup',{name,email,password,
       
  },
   );
   if (response) {
    navigate('/login');
    console.log(response.data);
  }
} catch (error) {
  if (error.response && error.response.status === 422) {
    toast.error("Email already exists !", {
      position:toast.POSITION.TOP
    });
  } else {
    setError("Something went wrong");
  }
}

  };
  return (
    <div className={`custom-form container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className="custom-form form-container sign-in-container">
      <ToastContainer autoClose={2000}/>
        <form>
          <h1>Sign in</h1>
          <div className="custom-form social-container">
            <a href="#" className="custom-form social">
              <i className="custom-form fab fa-facebook-f"></i>
            </a>
            <a href="#" className="custom-form social">
              <i className="custom-form fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="custom-form social">
              <i className="custom-form fab fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Register</button>
          {error && <div className='erro'>{error}</div>}
         
        </form>
      </div>
      <div className="custom-form overlay-container">
        <div className="custom-form overlay">
        
          <div className="custom-form overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <Link to="/login">
              <button className="custom-form ghost" id="signIn" onClick={handlePanelChange}>
             Login
              </button>
            </Link>
      
          </div>
        </div>
      </div>
      <footer>
        <p>
          Created with <i className="custom-form fa fa-heart"></i> by
          <a target="_blank" href="https://florin-pop.com">
            Florin Pop
          </a>
          - Read how I created this and how you can join the challenge
          <a
            target="_blank"
            href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/"
          >
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Signup;
