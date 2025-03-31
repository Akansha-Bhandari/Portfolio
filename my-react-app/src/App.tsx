// import { useState } from 'react'
// import { Typography } from '@mui/material'
// import Navbar from './Navbar'
// import About from './About'
// import Footer from './images/Footer'
// import Skills from './Skills'
// import Qualification from './Qualification'
// import Experience from './Experience'
// import Contact from './Contact'

// function App() {
  
//   return (
//     <>
      
//       <Navbar/>
//       <About/>
//       <Skills/>
//       <Qualification/>
//       <Experience/>
//       <Contact/>
//       <Footer/>
//     </>
    
//   )
// }

// export default App

import { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Footer from './images/Footer';
import Skills from './Skills';
import Qualification from './Qualification';
import Experience from './Experience';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />

      {/* Assign IDs to the sections */}
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="qualification"><Qualification /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>

      <Footer />
    </>
  );
}

export default App;

