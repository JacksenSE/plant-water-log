import React from 'react';
import './App.css';
import CarouselPage from './Components/Carousel/Carousel';
import AboutUs from './Components/AboutUs/AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './Components/Navbar/NavbarComp'
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <CarouselPage/>
      <NavbarComp/>
    </div>
  );
}

export default App;