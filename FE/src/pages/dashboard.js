import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [executionData, setExecutionData] = useState(null);

  useEffect(() => {
    const fetchExecutionData = async () => {
      const token = localStorage.getItem('authToken'); // Get the user's token

      if (!token) {
        console.error('User not authenticated');
        return;
      }

      try {
        // Call the TradeLocker Execution API with the user's token
        const response = await axios.get('https://api.tradelocker.com/execution', {
          headers: {
            Authorization: `Bearer ${token}` // Pass the token in the Authorization header
          }
        });

        setExecutionData(response.data);
      } catch (err) {
        console.error('Error fetching execution data:', err);
      }
    };

    fetchExecutionData();
  }, []);

  if (!executionData) return <p>Loading...</p>;

  return (
    <div>
      <h1>TradeLocker Dashboard</h1>
      <pre>{JSON.stringify(executionData, null, 2)}</pre> {/* Display the API data */}
    </div>
  );
};

export default Dashboard;
