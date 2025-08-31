import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './page.css'
import { useAuth } from "../store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const {storetokenIn} = useAuth()
  const Navigate = useNavigate() 
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit data :", user);
    try {
      const response = await fetch(`http://localhost:3000/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const res_data = await response.json()
      console.log("res from server", res_data.token,res_data.extraDetails)

      if (response.ok) {
        // store the token local storage
        storetokenIn(res_data.token)
        setUser({
          username: "",
          email: "",
          phoneNumber: "",
          password: ""
        })
        alert("Your Registration successful")
        Navigate("/login")
      }else{
          alert(res_data.extraDetails)
        }
      // console.log(await response.json());
    } catch (error) {
      console.log("register error:", error);
    }
  };

  return ( 
    <section>
      <main>
        <div className="section-parent">
          <div className="img">img</div>
          <div className="form">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input type="text" placeholder='Username' name='username' id='username' required autoComplete='off' value={user.username} onChange={handleInput} />

              <label htmlFor="email">Email</label>
              <input type="text" placeholder='Email' name='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="number" placeholder='phone Number' name='phoneNumber' id='phoneNumber' required autoComplete='off' value={user.phoneNumber} onChange={handleInput} />

              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Password' name='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />


              <button className='res' type='submit'>Register Now</button>
            </form>
          </div> 
        </div>
      </main>
    </section>
  );
};

export default Register;
