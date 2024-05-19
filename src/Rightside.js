// Navbar.js
import {Link} from 'react-router-dom';
import React from 'react';
import './cssfile/style.css';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


function Rightside() {
  const AcNumber=localStorage.getItem('accountNum');
    return (
      <div className="right-side">
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src="https://www.easemytrip.com/images/offer-img/bobemi-4oct23-lp.webp"
  />
</Card> 
<Card
  style={{
  }}
>
  <img
    alt="Sample"
    src="https://pbs.twimg.com/media/CaiVO1nUsAA8B72.jpg"
  />
</Card> 
      </div>
    );
  }
  
  export default Rightside;
