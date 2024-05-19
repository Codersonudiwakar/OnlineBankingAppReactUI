// RegistrationPage.js
import React, { useEffect, useState } from 'react';
import './cssfile/Homepage.css';
import './FormNumber';
import RandomNumberGenerator from './FormNumber';
import { myAxios } from './service/helper';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const RegistrationPage = () => {
  //const [inputValue, setInputValue] = useState('');

  const [data, setData] = useState({
    fullName: '',
    dob: '',
    fatherName: '',
    aadhaarNo: '',
    panNo: '',
    phoneNo: '',
    email: '',
    accountNumber: '',
    password:'',
    addressDto: {
      homeNo: '',
      areaTwon: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl= '/account/signup';

    try {
      const response = await myAxios.post(apiUrl, data); // Make a POST request using Axios
      console.log('Response:', response.data); 
      toast.success('Registration successful', { autoClose: 5000 });
      // Log the response data
      // Optionally, you can handle success scenario here (e.g., show a success message)
    } catch (error) {
      console.error('Error:', error);
      
      toast.error('Transfer Faield', { autoClose: 5000 });// Log any errors
      // Optionally, you can handle error scenario here (e.g., show an error message)
    }
  }


  const handleChange1 = (e, property, parent) => {
    if (parent) {
      setData({
        ...data,
        [parent]: {
          ...data[parent],
          [property]: e.target.value
        }
      });
    } else {
      setData({ ...data, [property]: e.target.value });
    }
  };
  
  useEffect(() => {
    console.log(data);
  }, [data])

  // Function to handle changes in input fields
  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value})
  };
  return (
    <div class="home-body">
    <div class="container">
    <ToastContainer position="top-right" />
    <div class="login-card">
      <form className="registration-form" onSubmit={handleSubmit}>
<h2>Personal Information</h2>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => handleChange(e, 'fullName')}
          required
        />

        <label htmlFor="name">DOB:</label>
        <input
          type="date"
          id="dob"  
          name="dob"
          onChange={(e) => handleChange(e, 'dob')}
          required
        />
        <label htmlFor="fathername">Father Name:</label>
        <input
          type="text"
          id="fathername"
          name="fathername"
          onChange={(e) => handleChange(e, 'fatherName')}
          required
        />

        <label htmlFor="aadhaarno">Aadhaar No:</label>
        <input
          type="text"
          id="aadhaarno"
          name="aadhaarno"
          onChange={(e) => handleChange(e, 'aadhaarNo')}
          required
        />
        <label htmlFor="panno">PAN No:</label>
        <input
          type="text"
          id="panno"
          name="panno"
          onChange={(e) => handleChange(e, 'panNo')}
          required
        />
        <label htmlFor="mobileno">Phone No:</label>
        <input
          type="text"
          id="mobileno"
          name="mobileno"
          onChange={(e) => handleChange(e, 'phoneNo')}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => handleChange(e, 'email')}
          required
        />
         <label htmlFor="password">Password :</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(e) => handleChange(e, 'password')}
          required
        />
<h2>Address</h2>

<label htmlFor="houseNo">House No:</label>
<input
  type="text"
  id="houseNo"
  name="houseNo"
  onChange={(e) => handleChange1(e, 'homeNo', 'addressDto')}
  required
/>

<label htmlFor="areaTwon">Village/Town:</label>
<input
  type="text"
  id="areaTwon"
  name="areaTwon"
  onChange={(e) => handleChange1(e, 'areaTwon', 'addressDto')}
  required
/>

<label htmlFor="city">City:</label>
<input
  type="text"
  id="city"
  name="city"
  onChange={(e) => handleChange1(e, 'city', 'addressDto')}
  required
/>

<label htmlFor="state">State:</label>
<input
  type="text"
  id="state"
  name="state"
  onChange={(e) => handleChange1(e, 'state', 'addressDto')}
  required
/>

<label htmlFor="zipcode">Zip Code:</label>
<input
  type="text"
  id="zipcode"
  name="zipcode"
  onChange={(e) => handleChange1(e, 'zipCode', 'addressDto')}
  required
/>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default RegistrationPage;
