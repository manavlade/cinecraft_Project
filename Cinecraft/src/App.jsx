import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from './Pages/Courses';
import NAvbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Foter from './Pages/Footer';
import Cinematography from './CourseContent/Cinemato';
function App() {
  return (
    <>
      <NAvbar />
      <Home />
      <About/>
      <Course />
      <Foter/>
      <Cinematography/>
    </>
  )
}

export default App
