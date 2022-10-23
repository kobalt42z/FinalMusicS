import doSearch from "./api/doSearch.js";
let btn = document.querySelector("#searchBtn")
let userInput = document.querySelector("#searchInput")

btn.addEventListener("click",event=>{
    doSearch(userInput.value);
})
userInput.addEventListener("keydown",event=>{
 
    if (event.key === "Enter"){
        doSearch(userInput.value)
       
    }
})