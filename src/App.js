import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import  Contact from "./pages/Contact"; 
import Aboutme from "./pages/AboutMe";
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Welcome message="Hola welcome props" name="José"></Welcome>
       <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/about-me">About me</Link>
            </li>
            <li>
              <Link to="/profile">Perfil</Link>
            </li>
          </ul>
        </div>
         <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-Me" element={<Aboutme />} />
          <Route path="/profile/:name" element={<Profile />}  />
        </Routes>
       </Router>
      </header>
    </div>
  );
}

export default App;
