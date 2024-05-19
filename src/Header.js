import React, { useEffect, useState } from 'react';
import './cssfile/style.css';
import { Link } from 'react-router-dom';
import CurrentTimeAndDate from './CurrentTimeAndDate';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('accountNum');
    };

    useEffect(() => {
        const authToken = localStorage.getItem('token');
        if (authToken) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div className="header">
            <nav>

                <h1>
                    <Link to={"/"}>
                        <span className='Blogo'>B</span>
                        <span className='smallLatter'>a</span>
                        <span className='smallLatter'>n</span>
                        <span className='smallLatter'>k</span>
                        <span className='smallLatter'> of </span>
                        <span className='capitalLatter'>C</span>
                        <span className='smallLatter'>i</span>
                        <span className='smallLatter'>t</span>
                        <span className='smallLatter'>y</span>
                    </Link>
                </h1>
                {isLoggedIn ? (
                        <>
                        </>
                    ) : (
                        <>
                           <ul class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                     <li><a href="/">Services</a></li> 
                    <li><a href="/">Contact</a></li>
                </ul> 
                        </>
                    )}
                
                <div className="auth-links">    
                    {isLoggedIn ? (
                        <>
                        <Link onClick={handleLogout} to="/login">Logout</Link>
                        <p className='time'><CurrentTimeAndDate/></p>
                        </>
                    ) : (
                        <>
                            <Link to="/open-account">Open Account</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )}

                </div>
            </nav> 
        </div>

    );
}

export default Header;
