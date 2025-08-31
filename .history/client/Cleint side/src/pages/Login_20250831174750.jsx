import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth';
import './page.css';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { storetokenIn,API } = useAuth()
  const URL = `${API}/api/auth/login`

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      });

      const res_data = await response.json()

      if (response.ok) {
        console.log("res from server", res_data.token)
        storetokenIn(res_data.token)
        toast.success("Login Successful")
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message)
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <div className="section-parent">
        <div className="img">img</div>
        <div className="form">
          <h1>LOG IN</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder='Email'
              name='email'
              id='email'
              required
              autoComplete='off'
              value={user.email}
              onChange={handleInput}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder='Password'
              name='password'
              id='password'
              required
              autoComplete='off'
              value={user.password}
              onChange={handleInput}
            />

            <button className='res' type='submit'> Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
