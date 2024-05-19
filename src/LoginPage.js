import './cssfile/Homepage.css';
import React, { useEffect, useState } from 'react';
import { myAxios } from './service/helper';
import { useNavigate } from 'react-router-dom';
 // Assuming your axiosConfig.js file is in the same directory
 

const Login = () => {
    
  


  const [data, setData] = useState({
    accountNum: '',
    password: ''
  });
  const nav = useNavigate();
  const [accountNum, setAccount] = useState('');
  const [error, setError] = useState({
    Errors: {},
    isError: false
  });

  useEffect(() => {
    console.log(data);
  }, [data])

  const handleChange = (e, property) => {
    setData({ ...data, [property]: e.target.value });
  };

  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await myAxios.post('/account/login', data);
      console.log('Response:', response.data);
      const token = response.data.jwt; // Assuming your API returns token upon successful login
      const accountNum = response.data.username; // Assuming your API returns username upon successful login
      localStorage.setItem('token', token);
      localStorage.setItem('accountNum', accountNum);
     

      // Update username state
      setAccount(accountNum);
      const AcNumber=localStorage.getItem('accountNum');
      nav(`/account-info/${AcNumber}`);
      console.log("here redirect"+AcNumber);
    } catch (error) {
      console.error('Login error:', error);
      setError({ Errors: error.response.data, isError: true });
    }
    window.location.reload();
    
  };
  

  return (
    <div className="home-body">
      <div className="container">
        <div className="login-card">
          <form className="registration-form" onSubmit={handleLogin}>
            <label>
              Username:
              <input
                type="text"
                name="accountNum"
                value={data.accountNum}
                onChange={(e) => handleChange(e, 'accountNum')}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => handleChange(e, 'password')}
              />
            </label>
            <br />
            <button type="submit" onClick={handleLogin} >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
