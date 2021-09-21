import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/HomePage'
import ContactForm from './Components/contactform';
import Maps from './Components/googlemaps';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Home />
        <ContactForm />
        <Maps />
      </Router>



    </div>
  );
}




export default App;
