const auth_link = "https://www.strava.com/oauth/token"

function getActivites(res){
    reAuthorize()
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()))
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
        .then(res => getActivites(res))  
}