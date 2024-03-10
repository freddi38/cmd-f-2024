import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

import logo from './ggr.svg';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
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


            <h2>Sabrina</h2>

            <div className="profile-details">
                <p><strong>Age:</strong> 30</p>
                <p><strong>Email:</strong> john@example.com</p>
                <div className="special-features">
                    <h3>Special Features</h3>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="right-panel">
            <div className="user-list" onClick={() => showProfile("john")}>
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
function showProfile(username) {
  // Fetch the user profile details based on the username
  // For simplicity, let's just display a message with the username
  alert("Showing profile for: " + username);
}
const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res){

  const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
  fetch(activities_link)
      .then((res) => console.log(res))
}

function reAuthorize(){
  fetch(auth_link,{
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'

      },

      body: JSON.stringify({

          client_id: '122880',
          client_secret: '5c723c6ca6a3976d379dab9a08d024f99ccb3a49',
          refresh_token: '09dce5055c1738b7be5fd289864c176dd49f6e15',
          grant_type: 'refresh_token'
      })
  }).then(res => res.json())
      .then(res => getActivities(res))  
}