import React, { useState,useEffect } from 'react';
import { useAuth } from '../store/auth';

const Contact = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    message: ""
  });

  const [userData, setuserData] = useState(true)
  const {userr} = useAuth()
  
  useEffect(() => {
    if (userr) {
      setUser({
        username: userr.username || "",
        email: userr.email || "",
        message: ""
      });
    }
  }, [userr]);

  const handleInput = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let user = userAuthentication.username
    setuser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submit data:", user);

  try {
    const response = await fetch(`http://localhost:3000/api/form/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      alert("Your message sent successfully");
    }
  } catch (error) {
    console.log(error);
  }
};


  return (
    <div>
      <div className="ContactUs"><h2>Contact Us</h2></div>
      <div className="home-parent Contact-Page">
        <div className="home img-contact"></div>
        <div className="home-img content-Contact">

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder='Username'
            name='username'
            id='username'
            required
            autoComplete='off'
            value={user.username}
            onChange={handleInput}
          />

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

          <label htmlFor="message">Message</label>
          <input
            type="text"
            placeholder='Message'
            name='message'
            id='message'
            required
            autoComplete='off'
            value={user.message}
            onChange={handleInput}
          />

          <div>
            <button className="btn" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      {/* Here is a Map section */}
      <br />
      <hr />
      <h3 id='based'>I am Based in</h3>
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56186.28385759373!2d77.2848201246405!3d28.33941143411483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb98e43a52c7%3A0xa3688094e68c35b2!2sBallabhgarh%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1753093909319!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </section>
    </div>
  );
};

export default Contact;
