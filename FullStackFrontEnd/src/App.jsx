import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'
// import ClassCompEg from './Components/ClassComponents/ClassComponentEg';
import Home from './Components/FunctionalComponents/Home';
import About from './Components/FunctionalComponents/About';
import Gallery from './Components/FunctionalComponents/Gallery';
import Contact from './Components/FunctionalComponents/Contact';
import NavBar from './Components/FunctionalComponents/NavBar';
import Form from './Components/FunctionalComponents/Form';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About college = "Kongu Engineering College" clg1 = "Kongu Arts" clg2= "Naturopathy college"/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Form />
      </BrowserRouter>
      

      {/* without Routing, all the components are in the same home page */}
      {/* <Home />
      {/* <h4>This is App.jsx</h4> */}
      {/* <ClassCompEg /> */}
      {/* <About college = "Kongu Engineering College" clg1 = "Kongu Arts" clg2= "Naturopathy college"/>
      <Gallery />
      <Contact /> */} 

    </div>
    
  );
}

export default App
// In about - passing props