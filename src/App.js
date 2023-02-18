import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp';
import styled from 'styled-components';
import PlantProfiles from './Components/Navbar/PlantProfiles';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CarouselPage from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <CarouselPage />
      <PlantProfiles/>
      </div>
  );
}
const styles = {
  color: 'green',
  backgroundColor: 'salmon',
  fontSize: '40px',
  margin: '20px'
}
export default App;
