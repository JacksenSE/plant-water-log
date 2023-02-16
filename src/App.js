import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
        <h1>House-Plant Watering Log</h1>
        <NavbarComp/>
        
    </div>
  );
}

export default App;
