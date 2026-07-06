import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Movieinfo from './pages/Movieinfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movieinfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
