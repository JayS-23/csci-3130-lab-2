import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  const [visits, setVisits] = useState(0);

  return (
      <Routes>
      <Route path="/" element={<Home visits={visits} setVisits={setVisits} />} exact />
      <Route path="/about" element={<About visits={visits} />} />
      <Route path="/contact" element={<Contact visits={visits} />} />
      </Routes>
  );
}

export default App;
