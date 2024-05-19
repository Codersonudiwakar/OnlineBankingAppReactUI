// Navbar.js
import {Link} from 'react-router-dom';
import React from 'react';
import './cssfile/style.css';


function LeftMenu() {
  const AcNumber=localStorage.getItem('accountNum');
    return (
      <div className="left-menu">
        <table>
          <tbody>
            <tr>
              <td><Link to={`/profile/${AcNumber}`}>View Profile</Link></td>
            </tr>
            <tr>
              <td> <Link to={`/account-info/${AcNumber}`}>Check Balance</Link></td>
            </tr>
            <tr>
              <td><Link to={`/transfer/${AcNumber}`}>Fund Transfer</Link></td>
            </tr>
            <tr>
              <td><Link to={`/statement/${AcNumber}`}>Account Statement</Link></td>
            </tr>
            <tr>
              <td><Link to={`/card/${AcNumber}`}>View Card</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default LeftMenu;
