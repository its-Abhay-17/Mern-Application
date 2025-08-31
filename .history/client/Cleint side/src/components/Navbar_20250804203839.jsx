import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../store/auth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav>
        <div className="logo">ABHAY</div>
        <ul>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
          <NavLink to="/service"><li>Service</li></NavLink>

          {isLoggedIn ? (
            <NavLink to="/Logout"><li>Logout</li></NavLink>
          ) : (
            <>
              <NavLink to="/register"><li>Register</li></NavLink>
              <NavLink to="/Login"><li>Login</li></NavLink>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
