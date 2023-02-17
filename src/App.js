import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp';
import CarouselPage from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <CarouselPage/>
      <NavbarComp/>
    </div>
  );
}

export default App;
