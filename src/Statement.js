import './cssfile/style.css';
import { React15Tabulator } from 'react-tabulator';
import 'react-tabulator/lib/styles.css'; // import Tabulator stylesheet
import 'react-tabulator/lib/css/tabulator.min.css';
import { myAxios } from './service/helper';
import { useEffect, useState } from 'react';

function Statement() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const AcNumber=localStorage.getItem('accountNum');

  const fetchData = async () => {
    console.log("this is account Number"+AcNumber)
    try {
      const url = `/bank/statement/${AcNumber}`;
      const token =localStorage.getItem('token');
      const response = await myAxios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const responseData = response.data; // Assuming response is in JSON format
      console.log("Data received:", responseData);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message || 'An error occurred while fetching data.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  

  const columns = [
    { title: 'Date', field: 'transactionDate' },
    { title: 'Transaction No', field: 'transactionID' },
    { title: 'Reference', field: 'referanceFrom' },
    { title: 'Amount', field: 'amount' },
    { title: 'Type', field: 'transactionType' },
  ];

  return (
    <div className="container-main">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div className='statement'>
          <div className='statement-info'>
            {/* <p>Name : </p> */}
            <p>Account Number : {AcNumber}</p>
          </div>
          <React15Tabulator columns={columns} data={data} />
        </div>
      )}
    </div>
  );
}

export default Statement;