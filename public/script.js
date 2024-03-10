// Function to show user profile details
async function showProfile() {
    // Fetch the user profile details based on the username
    // For simplicity, let's just display a message with the username
    alert("Showing profile for: " + reAuthorize());
}
const auth_link = "https://www.strava.com/oauth/token"

async function getActivities(res) {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;
    
    try {
        const response = await fetch(activities_link);
        const result = await response.json();
        
            const activityName = result[4].name;
            console.log(activityName); // Log the result
            return activityName; // Return the fifth activity name
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error; // Rethrow the error
    }
}

// function getActivities(res){
//     const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
//     return fetch(activities_link)
//         .then(response => response.json())
//         .then(user => {
//             const result = user[4].name;
//             console.log(result); // Log the result
//             return resolve(result); // Return the result to the caller
//     })
//     // return fetch(activities_link)
//     //     .then((res) => res.json())
//     //     .then((user) => {
//     //         const result = user[4].name
//     //         console.log(result)
//     //         return result
//     //     })
// }

// function reAuthorize(){
//     fetch(auth_link,{
//         method: 'post',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'

//         },

//         body: JSON.stringify({

//             client_id: '122880',
//             client_secret: '5c723c6ca6a3976d379dab9a08d024f99ccb3a49',
//             refresh_token: '117f09d01b5247d5804906bb66f27aa13c28fc51',
//             grant_type: 'refresh_token'
//         })
//     }).then(res => res.json())
//         .then(res => {
//             console.log(getActivities(res))
//         })  
            
// }

async function reAuthorize() {
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