import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Home = ({ visits, setVisits }) => {

    let location = useLocation();

    useEffect(() => {
        setVisits(visits + 1);
    },[location, setVisits, visits])

  return (
    <div>
      <h1>Home</h1>
      <h2>Banner Id: B00937799</h2>
      <p>Home page visited {visits} times</p>
      
      <Link to={"/about"}><button>About Us</button></Link>
      <Link to={"/contact"}><button>Contact Us</button></Link>
    </div>
  );
}

export default Home;
