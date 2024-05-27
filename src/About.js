import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ visits }) => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About Page</p>
      <p>Home page visited {visits} times</p>
      <button><Link to={"/"}>Home</Link></button>
    </div>
  );
}

export default About;
