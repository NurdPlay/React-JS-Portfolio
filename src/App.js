import './App.css';
import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/HomeScreen';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404 NOT FOUND!!!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
