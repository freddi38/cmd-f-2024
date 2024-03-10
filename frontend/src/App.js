import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

import logo from './ggr.svg';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios.get('http://localhost:3001/user')
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, []);

  return (
    <div className="App">
      <div className="logo">
          <img src={logo} alt="Girls Gone Running"/>
      </div>

    <div className="container">
        <div className="left-panel">


            <h2>{data.name}</h2>

            <div className="profile-details">
                <strong>Activities</strong>
                <p>Walking, Running</p>
                <div className="special-features">
                    <h3>Stats</h3>
                    <ul>
                        <li>Pace: 5:34 / km</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="right-panel">
            <div className="user-list" onClick={async () => showProfile()}>
                <h2>User List</h2>
                <div className="user" onClick={() => showProfile("john")}>
                    <p>John Doe</p>
                </div>
                <div className="user"  onClick={() => showProfile("john")}>
                    <p>Jane Smith</p>
                </div>
                <div className="user"  onClick={() => showProfile("john")}>
                    <p>Alice Johnson</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;

// Function to show user profile details
async function showProfile() {
  // Fetch the user profile details based on the username
  // For simplicity, let's just display a message with the username
  const userName = await reAuthorizeProfile();
  const activityName = await reAuthorizeActivities();
  
  alert("Showing profile for: " + activityName);
  
}

const auth_link = "https://www.strava.com/oauth/token"

async function getActivities(res) {
  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
  
  try {
      const response = await fetch(activities_link);
      const result = await response.json();
      console.log(result);
      
          const activityName = result[4].name;
          return activityName; // Return the fifth activity name
  } catch (error) {
      console.error('Error fetching activities:', error);
      throw error; // Rethrow the error
  }
}

async function getProfile(res) {
  const activities_link = `https://www.strava.com/api/v3/athlete/stats?access_token=${res.access_token}`;
  
  try {
      const response = await fetch(activities_link);
      const result = await response.json();
      console.log("getProfile: " + result);
  } catch (error) {
      console.error('Error fetching activities:', error);
      throw error; // Rethrow the error
  }
}

async function reAuthorizeActivities() {
  try {
      const response = await fetch(auth_link, {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              client_id: '122880',
              client_secret: '5c723c6ca6a3976d379dab9a08d024f99ccb3a49',
              refresh_token: '117f09d01b5247d5804906bb66f27aa13c28fc51',
              grant_type: 'refresh_token'
          })
      });
      
      const authData = await response.json();
      const result = await getActivities(authData);
      return result;
  } catch (error) {
      console.error('Error reauthorizing:', error);
      // Handle error
  }
}

async function reAuthorizeProfile() {
  try {
    const response = await fetch(auth_link, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '122880',
            client_secret: '5c723c6ca6a3976d379dab9a08d024f99ccb3a49',
            refresh_token: '117f09d01b5247d5804906bb66f27aa13c28fc51',
            grant_type: 'refresh_token'
        })
    });
    
    const authData = await response.json();
    const result = await getProfile(authData);
    return result;
} catch (error) {
    console.error('Error reauthorizing:', error);
    // Handle error
}
}