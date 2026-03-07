import { useState } from 'react';
// This line imports routing tools from React Router, which is used to create navigation in a React application.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Import the Pages
import { About, Contact, Home, Projects } from './pages'

function App() {

  return (
    <>
    {/* Install this "npm i react-router-dom" and "npm install react-icons --save" */}
    {/* Create a Router links for the in the App.jsx */}
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about' element={<About/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
