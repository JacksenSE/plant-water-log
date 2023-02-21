import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp'
import styled from 'styled-components';
import { Routes, Route, Link } from "react-router-dom";
import CarouselPage from './Components/Carousel/Carousel';
import PlantProfiles from './Components/PlantProfiles/PlantProfiles';
import CRUD from './Components/CRUD/CRUD';


function App() {
  return (
    <><div className="App">
      <NavbarComp />
      <h1 style={styles}>House-Plant Watering Log</h1>
      <CarouselPage/>
    </div>
        <Routes>
          <Route path="home" element={<PlantProfiles/>} />
          <Route path="log" element={<CRUD/>} />
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

