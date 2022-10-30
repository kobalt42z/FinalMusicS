import doSearch from "./api/doSearch.js";
let btn = document.querySelector("#searchBtn")
let userInput = document.querySelector("#searchInput")
let modal = document.querySelector("#mainModal")
const myModalAlternative = new bootstrap.Modal('#mainModal', {keyboard : true})
btn.addEventListener("click",event=>{
    doSearch(userInput.value);
})
userInput.addEventListener("keydown",event=>{
 
    if (event.key === "Enter"){
        doSearch(userInput.value)
       
    }
})

window.addEventListener("load",event=>{
    // modal.ariaHidden = "false"
    myModalAlternative.show()
    console.log("success");
})
