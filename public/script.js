// Function to show user profile details
function showProfile(username) {
    // Fetch the user profile details based on the username
    // For simplicity, let's just display a message with the username
    alert("Showing profile for: " + username);
    reAuthorize();
}
const auth_link = "https://www.strava.com/oauth/token"

function getActivities(res){
    console.log(res.access_token)
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
            refresh_token: '117f09d01b5247d5804906bb66f27aa13c28fc51',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => {
            console.log(res)
            getActivities(res)
        })  
            
}