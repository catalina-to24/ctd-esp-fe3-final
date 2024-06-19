import React, { useState, useEffect } from 'react';
import { useContextState } from '../Components/utils/global.context';
import { useParams } from 'react-router-dom';
import axios from "axios";
import dentistImg from "/public/images/doctor.jpg";



const Detail = () => {
  const { state } = useContextState()
  const [dentist, setDentist] = useState();
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDentist(res.data);
    });
  }, []);

  return (

    <div className={`${state.theme} mainPage`}> 
      <h1>Detail Dentist </h1>

      
      {dentist && (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
              </tr>
            </tbody>
            
            
          </table>
          
        </>
      )}
    
    </div>
    
  );
};

export default Detail