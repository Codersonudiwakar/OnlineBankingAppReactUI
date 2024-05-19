// RegistrationPage.js
import React, { useState } from 'react';
import './cssfile/style.css';
import './FormNumber';
const Firstpage = () => {
  return (
    <div className="firstpage">
      <header className="header">
        <h1>Welcome to My React Homepage</h1>
      </header>
      <main className="main-content">
        <section className="featured-section">
          <h2>Featured Content</h2>
          <p>This is a section for featured content or highlights.</p>
        </section>
        <section className="about-section">
          <h2>About Us</h2>
          <p>
            We are a passionate team building amazing web experiences with React and CSS.
          </p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
      
    </div>
  );
};

export default Firstpage;
