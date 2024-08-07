import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
      const fetchApplications = async () => {
        const response = await api.get('/applications');
        setApplications(response.data);
      };

      fetchApplications();
  }, []);

  return (
    <>
    <div>
      <h2>Dashboard</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.name} - {app.status}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default Dashboard