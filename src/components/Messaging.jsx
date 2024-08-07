import React, { useState, useEffect } from 'react';
import api from '../services/api';

function Messaging({ applicationId }) {

    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
          const response = await api.get(`/messages/application/${applicationId}`);
          setMessages(response.data);
        };
    
        fetchMessages();
      }, [applicationId]);
    
      const handleSend = async () => {
        const response = await api.post('/messages', { applicationId, senderId: 1, content });
        if (response.status === 200) {
          setMessages([...messages, response.data]);
          setContent('');
        }
      };

  return (
    <>
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
      <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </div>
    </>
  )
}

export default Messaging