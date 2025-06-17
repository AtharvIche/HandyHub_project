// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page container">
      <section className="intro-section">
        <div className="intro-text">
          <h2>Your Task, Our Talent</h2>
          <p className="subtitle">Your Trusted Source for Quality Services</p>
          <p>
            Got a Problem? We’ve Got the Right Hands for It! From leaky faucets
            to garden makeovers, HandyHub connects you with trusted local workers.
            Post your task and get it done hassle-free.
          </p>
          <Link to="/post-problem" className="learn-more-button" style={{marginRight: "15px"}}>
            Post Your Problem
          </Link>
          <Link to="/all-problems" className="learn-more-button browse-tasks-button">
            Browse Available Tasks
          </Link>
        </div>
        <div className="intro-image-placeholder">
           {/* Corrected path to the image in the public folder */}
           <img
              src="/handyhub.jpg" // This path means "look for handyhub.jpg in the root of the served files"
              alt="Modern and vibrant co-working or creative space" // Make this alt text descriptive of YOUR image
              className="hero-illustration"
            />
        </div>
      </section>

      <section className="how-it-works-section">
        <h2>How HandyHub Works</h2>
        <div className="steps-container">
            <div className="step">
                <h3>1. Post Your Task</h3>
                <p>Describe what you need help with, set your location, and provide contact details.</p>
            </div>
            <div className="step">
                <h3>2. Get Noticed</h3>
                <p>Skilled local workers browse available tasks and can see your posting.</p>
            </div>
            <div className="step">
                <h3>3. Connect & Solve</h3>
                <p>Workers contact you directly to discuss the job and get it done!</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;