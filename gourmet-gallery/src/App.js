// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';

// Import global styles
import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
