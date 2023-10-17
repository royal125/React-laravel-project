import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Home = () => {
    return (
        <div>
          <div className="navbar">
      <nav className="navbar nv navbar-expand-lg navbar-dark fixed-top p-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://codingyaar.com/wp-content/uploads/logo-1.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ulnav mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" style={{ textDecoration: "none" }}>Home</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <Link className="nav-item nav-link" to="/contact">
                Contact Us
              </Link>
              <Link className="nav-item nav-link" to="/signup">
                                 Register
              </Link>
            </ul>
            <Link className="nav-item nav-link" to="/logout">
                                 Logout
              </Link>
            <Link to="/cart" className="mx-4">
              <a href="">
                <Badge  color="secondary">
                  <AddShoppingCartIcon color="light" />
                </Badge>
                
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
        </div>
    );
}

export default Home;
