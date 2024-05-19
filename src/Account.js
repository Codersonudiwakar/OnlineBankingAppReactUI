
import React, { useEffect } from 'react';
import { useS } from 'react';
import './cssfile/style.css';
import { useState } from 'react';
import DebitCard from './Card';
import { myAxios } from './service/helper';



const  Accountinfo =() =>  {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const AcNumber=localStorage.getItem('accountNum');
  const [accountData, setAccountData] = useState({
    accountNumber: '',
    netBalance: '',
  });

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const url = `/bank/balance/${AcNumber}`;
      const token =localStorage.getItem('token');
      const response = await myAxios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseData = response.data; // Assuming response is in JSON format
      console.log("Data received:", responseData);
      setAccountData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'An error occurred while fetching data.');
      setLoading(false);
    }
  };
  

    return (
      <div className="container-main">
      <div class="container-view">
        <div class="card">      
        <div class="card-body">
           <p className='info-account'>Account No :  {accountData.accountNumber}</p>
           <p className='info-account'>Account Balance : {accountData.netBalance}</p>
           {/* <p className='info-account'>Branch Name :</p> */}
        </div>

    </div>
    </div>
    </div>
    );
  }
  
  export default Accountinfo;
