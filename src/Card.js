    import './cssfile/style.css';
import { useEffect, useState } from 'react';
import backgroundImage from './image/card-background.jpg';


import React from 'react';
import { myAxios } from './service/helper';
const DebitCard = () => {
    const [cardData, setCardData] = useState({
        accountNumber: '',
        cardNumber: '',
        cardHolderName: '',
        cardExpiryData: '',
        cvv: '',
      });
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const AcNumber=localStorage.getItem('accountNum');
    
      useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const url = `/bank/card/${AcNumber}`;
          const token =localStorage.getItem('token');
          const response = await myAxios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const responseData = response.data; // Assuming response is in JSON format
          console.log("Data received:", responseData);
          setCardData(responseData);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError(error.message || 'An error occurred while fetching data.');
          setLoading(false);
        }
      };
    
    return (
        <div>
                <div class="credit-card">

                    <div className="chip"></div>
                    <div className="logo"><p><span>B </span>O <span>C</span></p></div>
                    <div class="number">{cardData.cardNumber}</div>
                    <div class="info">
                        <div class="card-holder">
                            <label>Card Holder</label>
                            <div class="name">{cardData.cardHolderName}</div>
                        </div>
                        <div class="expiry-date">
                            <label>Expiry Date</label>
                            <div class="date">{cardData.cardExpiryData}</div>
                        </div>
                        <div class="cvv">
                            <label>CVV</label>
                            <div class="cvv-pin">{cardData.cvv}</div>

                        </div>
                    </div>
                </div>
            






        </div>
    );
};

export default DebitCard;
