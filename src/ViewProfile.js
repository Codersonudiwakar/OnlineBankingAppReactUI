import React, { useState } from 'react';
import './cssfile/style.css';
import Card from './Card';
import { myAxios } from './service/helper';
import { useEffect } from 'react';

function ProfileView() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const AcNumber=localStorage.getItem('accountNum');
  const [profileData, setProfileData] = useState({
    fullName: '',
    dob: '',
    fatherName: '',
    aadhaarNo: '',
    panNo: '',
    phoneNo: '',
    email: '',
    addressDto: {
      homeNo: '',
      areaTwon:'',
      city:'',
      state:'',
      zipcode:'',
    },
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = `/bank/${AcNumber}`;
      const token =localStorage.getItem('token');
      const response = await myAxios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseData = response.data; // Assuming response is in JSON format
      console.log("Data received:", responseData);
      setProfileData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'An error occurred while fetching data.');
      setLoading(false);
    }
  };

  return (
    <div className="container-main">
      <div className='profile'>
        {/* <h2>Profile View Page</h2> */}
        <table>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className='field'>NAME</td>
              <td className='fieldValue'>{profileData.fullName}</td>
            </tr>
            <tr>
              <td className='field'>DOB</td>
              <td className='fieldValue'>{profileData.dob}</td>
            </tr>
            <tr>
              <td className='field'>FATHER NAME</td>
              <td className='fieldValue'>{profileData.fatherName}</td>
            </tr>
            <tr>
              <td className='field'>AADHAAR NO</td>
              <td className='fieldValue'>{profileData.aadhaarNo}</td>
            </tr>
            <tr>
              <td className='field'>PAN NUMBER</td>
              <td className='fieldValue'>{profileData.panNo}</td>
            </tr>
            <tr>
              <td className='field'>MOBILE NO</td>
              <td className='fieldValue'>{profileData.phoneNo}</td>
            </tr>
            <tr>
              <td className='field'>EMAIL</td>
              <td className='fieldValue'>{profileData.email}</td>
            </tr>
            <tr>
              <td className='field'>ADDRESS</td>
              <td className='fieldValue'>{profileData.addressDto.homeNo} {profileData.addressDto.areaTwon} {profileData.addressDto.city}, {profileData.addressDto.state} {profileData.addressDto.zipcode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      );
}

      export default ProfileView;
