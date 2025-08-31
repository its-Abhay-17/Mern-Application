import React from 'react'
import {Link} from 'react-router-dom'
import './Navabr.css'

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">ABHAY</div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/service"><li>Service</li></Link>
            <Link to="/register"><li>Register</li></Link>
            <Link to="/Login"><li>Login</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
