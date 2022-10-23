// ? get input from user ask token and search over api 


import getTokenFromSpoty from './spotifyApi.js';
import search from './searchAPI.js'
import SongCard from "../class/songcard.js";


async function doSearch(userInput) {




    // ! get token 
    try {

        let tempToken = await getTokenFromSpoty()
    
        console.log('requested token: success!');

        //! replace space with +
        console.log(userInput);
        let correctUserInput = userInput.toString().split(' ').join('+');
        console.log(correctUserInput);


        //? doing search
        let data = await search(correctUserInput, tempToken)
        console.log(data.albums.items);

        let reciver = document.querySelector("#reciver")
        reciver.innerHTML=``

    data.albums.items.forEach((element,i) => {
        let newOne = new SongCard("#reciver", element,i)
        console.log(element);
        newOne.render()
    });






    }
    catch (err) {
        console.log(err)

    }


}
export default doSearch;