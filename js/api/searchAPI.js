const BASIC_SEARCH_URL = 'https://api.spotify.com/v1/search?q='
// let q = 'input from user '
const other_q = '&type=album&include_external=audio'



async function search(input, token) {
    let entier_url = BASIC_SEARCH_URL + input + other_q
    const params = {
        method: 'GET',
        headers: {

            'Authorization': 'Bearer '+token ,
            'Content-Type': 'application/json'

        },
    }
    try {
        let resp = await fetch(entier_url, params)
        let data = resp.json()
        console.log('search : success');
        return await data;
        
    }
    catch (err) {
        console.log(err);
    }
}
export default search;