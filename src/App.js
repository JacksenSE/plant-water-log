import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp'
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CarouselPage from './Components/Carousel/Carousel';
import PlantProfiles from './Components/PlantProfiles/PlantProfiles';

function App() {
  return (
    <><div className="App">
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <CarouselPage />
    </div><BrowserRouter>
        <nav>
          <Link to="/"></Link>
          <Link to="/create"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<PlantProfiles/>} />
          <Route path="/create" element={<NavbarComp />} />
          <Route path="/:id" element={<CarouselPage />} />
        </Routes>
      </BrowserRouter></>
     
  );
  
}
const styles = {
  color: 'green',
  backgroundColor: 'salmon',
  fontSize: '40px',
  margin: '20px'
}

export default App;

