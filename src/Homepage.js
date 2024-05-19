import React from 'react';
import { useS } from 'react';
import './cssfile/style.css';
import './cssfile/Homepage.css';
import { useState } from 'react';
import DebitCard from './Card';
import personalbankImg from './image/personal.png';
import investBankIng from './image/investment.png';
import businessbankImg from './image/Business.png';



const  HomePage =() =>  {

    return (
     <div className='home'>
       <main>
        <section className="hero">
          <h1>Welcome to Our Bank</h1>
          <p>Your trusted partner for all your financial needs.</p>
          {/* <a href="#" className="btn">Learn More</a> */}
        </section>

        <section className="features">
          <div className="feature">
            <img src={personalbankImg} alt="Feature 1" />
            <h3>Personal Banking</h3>
            <p>Manage your accounts, transfer funds, and more.</p>
          </div>
          <div className="feature">
            <img src={businessbankImg} alt="Feature 2" />
            <h3>Business Banking</h3>
            <p>Tailored solutions for your business needs.</p>
          </div>
          <div className="feature">
            <img src={investBankIng} alt="Feature 3" />
            <h3>Investment Services</h3>
            <p>Grow your wealth with our expert guidance.</p>
          </div>
        </section>
      </main>
  



     </div>
    );
  }
  
  export default HomePage;
