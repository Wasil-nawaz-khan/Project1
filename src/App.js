import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importing BrowserRouter, Routes, Route, and Link
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Login from './login';
import './App.css'

const App = () => {
  return (
      <div class="btns">
       <nav>

        <button><Link to="/">Home</Link></button>
        
        <button>
        <Link to="/about">About</Link>
        </button>
        
        <button>
        <Link to="/login">Login</Link>
        </button>

        <button>
        <Link to="/product">Product</Link>
        </button>
        
        <button>
        <Link to="/contact">Contact</Link>
        </button>
          
       </nav>

        {/* Render routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
  );
};

export default App;
