import React, { useEffect, useState } from 'react';
import api from '../services/api';

function HomePage() {

    const [internships, setInternships] = useState([]);

    useEffect(() => {
      const fetchInternships = async () => {
        const response = await api.get('/internships');
        setInternships(response.data);
      };
  
      fetchInternships();
    }, []);

  return (
    <>
    <div>HomePage</div>
    <h2>Available Internships</h2>
      <ul>
        {internships.map(internship => (
          <li key={internship.id}>
            {internship.title} at {internship.companyName} - {internship.location}
            <button onClick={() => window.location.href = `/apply/${internship.id}`}>Apply</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage