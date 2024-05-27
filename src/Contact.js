import React from 'react';
import { Link } from 'react-router-dom';

const Contact = ({ visits }) => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Welcome to the Contact Page</p>
      <p>Home page visited {visits} times</p>
      <button><Link to={"/"}>Home</Link></button>
    </div>
  );
}

export default Contact;
