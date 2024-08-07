import React, { useEffect, useState } from 'react';
import api from '../services/api';

function CompanyDashboard() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
      const fetchApplications = async () => {
        const response = await api.get('/applications');
        setApplications(response.data);
      };
  
      fetchApplications();
    }, []);
  
    const updateStatus = async (id, status) => {
      await api.put(`/applications/${id}/status`, null, { params: { status } });
      setApplications(applications.map(app => app.id === id ? { ...app, status } : app));
    };

  return (
    <>
    <div>
      <h2>Company Dashboard</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            {app.name} - {app.status}
            <button onClick={() => updateStatus(app.id, 'Accepted')}>Accept</button>
            <button onClick={() => updateStatus(app.id, 'Rejected')}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default CompanyDashboard