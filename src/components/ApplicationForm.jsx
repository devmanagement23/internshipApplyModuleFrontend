import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

function ApplicationForm() {

    const { internshipId } = useParams();
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      resume: '',
      coverLetter: '',
      companyId: internshipId, // Updated to use internshipId from URL
    });

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/applications/submit', formData);
          alert('Application submitted successfully!');
        } catch (error) {
          alert('Error submitting application');
        }
      };


  return (
    <>
    <div>ApplicationForm</div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
      <textarea name="resume" value={formData.resume} onChange={handleChange} placeholder="Resume" />
      <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} placeholder="Cover Letter" />
      <button type="submit">Submit</button>
    </form>
      </>
  )
}

export default ApplicationForm