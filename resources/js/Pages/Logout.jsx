import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      try {
        // Make a request to your logout API endpoint
   const user =     await axios.post('http://127.0.0.1:8000/api/logout');

        // Clear any authentication tokens or user data from local storage, etc.
        localStorage.removeItem('token'); // Clear token from local storage

        // Redirect to the login page or any other page after logout
        navigate('/login');
        console.log(user)
      } catch (error) {
        console.error('Logout failed:', error);
        // Handle errors if needed
      }
    }

    logout(); // Call the logout function
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;