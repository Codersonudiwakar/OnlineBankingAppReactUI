
import './App.css';
import backgroundImage from './image/card-background.jpg';
import RegistrationPage from './RegistrationPage';
import Firstpage from './FirstPage.js';
import Navbar from './Header';
import LeftMenu from './Menu';
import Login from './LoginPage';
import UserInfoTable from './ViewProfile';
import ProfileView from './ViewProfile';
import FuntTransfer from './FundTransfer';
import './cssfile/style.css';
import './cssfile/Homepage.css';
import Statement from './Statement';
import React, { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AmountTransfer from './FundTransfer';
import Accountinfo from './Account';
import ViewCard from './ViewCard';
import HomePage from './Homepage';
import Footer from './Footer';
import Logo from './Blogo';
import Header from './Header';
import { Toast } from 'bootstrap';
import { ToastContainer } from 'react-toastify';
import { Card } from 'reactstrap';
import PrivateRoutes from './PrivateRouteWrapper.js';
import Rightside from './Rightside.js';



const App =()=> {
 
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsSignedIn(true);
    }
  }, []);
  const AcNumber = localStorage.getItem('accountNum');
  return (
    <div className="body">
      <BrowserRouter>
        <Header isSignedIn={isSignedIn} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/open-account" element={<RegistrationPage />} />
        </Routes>
        <div className="split-container">
          <div className="left">
            <Routes>
              <Route element={<PrivateRoutes />}>
                
              <Route path={`/profile/:AcNumber`} element={<LeftMenu/>} />
                <Route path={`/statement/:AcNumber`} element={<LeftMenu />} />
                <Route path={`/account-info/:AcNumber`} element={<LeftMenu />}  exact/>
                <Route path={`/transfer/:AcNumber`} element={<LeftMenu/>} />
                <Route path={`/card/:AcNumber`} element={<LeftMenu />} />
              </Route>
            </Routes>
          </div>
          <div className="middle">
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path={`/profile/:AcNumber`} element={<ProfileView />} />
                <Route path={`/statement/:AcNumber`} element={<Statement />} />
                <Route path={`/account-info/:AcNumber`} element={<Accountinfo />}  exact/>
                <Route path={`/transfer/:AcNumber`} element={<FuntTransfer/>} />
                <Route path={`/card/:AcNumber`} element={<ViewCard />} />
              </Route>
            </Routes>
          </div>
          <div class="right">
          <Routes>
              <Route element={<PrivateRoutes/>}>
              <Route path={`/profile/:AcNumber`} element={<Rightside/>} />
                <Route path={`/statement/:AcNumber`} element={<Rightside/>} />
                <Route path={`/account-info/:AcNumber`} element={<Rightside/>}  exact/>
                <Route path={`/transfer/:AcNumber`} element={<Rightside/>} />
                <Route path={`/card/:AcNumber`} element={<Rightside/>} />
              </Route>
            </Routes>
          
          </div>
        </div>
      </BrowserRouter>
       <Footer />
    </div>  );
}

export default App;