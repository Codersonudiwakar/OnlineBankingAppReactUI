
import React from 'react';
import { useS } from 'react';
import './cssfile/style.css';
import { useState } from 'react';
import DebitCard from './Card';



const  ViewCard =() =>  {


    return (
      <div className="container-main">
      <div class="container">
        
        <DebitCard/>
    </div>
     </div>
    );
  }
  
  export default ViewCard;
