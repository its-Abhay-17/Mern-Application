import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';

const Contact = () => {
  const [user, setuser] = useState({
    username: "",
    email: "",
    message: ""
  });

  const { userAuth } = useAuth();

  // ✅ Auto-fill when userAuth changes
  useEffect(() => {
    if (userAuth) {
      setuser((prev) => ({
        ...prev,
        username: userAuth.username || "",
        email: userAuth.email || ""
      }));
    }
  }, [userAuth]);

  const handleInput = (e) => {
    let { name, value } = e.target;
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
        method: 'POST', // ✅ changed to POST
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
      <h2>Contact Us</h2>

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInput}
      />

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleInput}
      />

      <label>Message</label>
      <input
        type="text"
        name="message"
        value={user.message}
        onChange={handleInput}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
