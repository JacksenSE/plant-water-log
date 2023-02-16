import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
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
