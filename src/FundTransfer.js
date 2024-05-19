import './cssfile/style.css';

// App.js
import React, { useState } from 'react';
import './App.css';
import { myAxios } from './service/helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function App() {
  const [accountNumber, setAccountNumber] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');
  const AcNumber=localStorage.getItem('accountNum');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //  API endpoint URL
      const url = `/bank/funds-transfer/${AcNumber}`;
      const token =localStorage.getItem('token');
      const account=localStorage.getItem('');

      // Data to be sent to the server
      const data = {
        accountNumber,
        comment,
        amount
      };

      // Post data to the API
      const response = await myAxios.post(url, data,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      // Handle successful response
      console.log('Response:', response.data);
      toast.success('Transfer successful', { autoClose: 5000 });

      // Clear form fields after successful submission
      setAccountNumber('');
      setComment('');
      setAmount('');
    } catch (error) {
      // Handle error
      console.error('Error:', error);
      toast.error('Transfer failed', { autoClose: 5000 });


    }
  };


  return (
    <div className="container-main">
       <ToastContainer position="top-right" />
   
    <div className="container-funds">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reasion">Add Massage</label>
          <input
            type="text"
            id="reasion"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  </div>
  );
}

export default App;