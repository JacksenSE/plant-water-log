import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp'
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import styled from 'styled-components';
import { Routes, Route, Link } from "react-router-dom";
import CarouselPage from './Components/Carousel/Carousel';
import PlantProfiles from './Components/PlantProfiles/PlantProfiles';

function App() {
  return (
    <><div className="App">
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <CarouselPage/>
    </div>
        <Routes>
          <Route path="features" element={<AboutUs/>} />
          <Route path="login" element={<LogIn />} />
          <Route path="login/signup" element={<SignUp/>} />
          <Route path="home" element={<PlantProfiles/>} />
        </Routes>
  </>
     
  );
  
}
const styles = {
  color: 'green',
  backgroundColor: 'salmon',
  fontSize: '40px',
  margin: '20px'
}

export default App;

