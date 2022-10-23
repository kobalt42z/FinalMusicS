const CLIENT_ID = 'acd70c9466c6446f9574371673cd7fe5'
const CLIENT_SECRET = 'b352ce5838414740bc1e2c8116db3813'
const URL_FOR_TOKEN = 'https://accounts.spotify.com/api/token'
const authParams = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded' ,
        
    },
    body:'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET,
    

}

async function getTokenFromSpoty() {

    try {
        let resp = await fetch(URL_FOR_TOKEN, authParams)
        let data =  await resp.json()
        
       
        // console.log('success', token);
        return data.access_token
    }
    catch (err) {
        console.log(err);
    }
}
export default getTokenFromSpoty;