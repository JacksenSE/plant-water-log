import React from 'react';
import './App.css';
import CarouselPage from './Components/Carousel/Carousel';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp';
import styled from 'styled-components';
import Carousel from "./Components/Carousel/Carousel"
import PlantProfiles from './Components/PlantProfiles/PlantProfiles';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <><div className="App">
      <CarouselPage />
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <PlantProfiles />
    </div><BrowserRouter>
        <nav>
          <Link to="/"></Link>
          <Link to="/create"></Link>
        </nav>
        <Routes>
          <Route path="/" element={<PlantProfiles/>} />
          <Route path="/create" element={<NavbarComp />} />
          <Route path="/:id" element={<Carousel />} />
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
