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
      <h1 style={styles}>House-Plant Watering Log</h1>
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
