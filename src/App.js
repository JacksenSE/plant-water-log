import React from 'react';
import './App.css';
import CarouselPage from './Components/Carousel/Carousel';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp'

function App() {
  return (
    <div className="App">
      <CarouselPage/>
      <NavbarComp/>
      <AboutUs />
    </div>
  );
}

export default App;
