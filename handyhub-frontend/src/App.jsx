// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostProblemPage from './pages/PostProblemPage';
import MyProblemsPage from './pages/MyProblemsPage';
import AllProblemsPage from './pages/AllProblemsPage'; // Import the new page
import ContactUsPage from './pages/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-problem" element={<PostProblemPage />} />
            <Route path="/my-problems" element={<MyProblemsPage />} />
            <Route path="/all-problems" element={<AllProblemsPage />} /> {/* ADD THIS ROUTE */}
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;