import doSearch from "./api/doSearch.js";
let btn2 = document.querySelector("#searchBtn2")
let btn = document.querySelector("#searchBtn")
let userInput = document.querySelector("#searchInput")
let userInput2 = document.querySelector("#searchInput2")
let modal = document.querySelector("#mainModal")
const myModalAlternative = new bootstrap.Modal('#mainModal', { keyboard: true })

const searchBlock = document.querySelector("#searchBlock")

const logoBLock = document.querySelector("#logoBlock")



btn.addEventListener("click", event => {
    doSearch(userInput.value);
})
btn2.addEventListener("click", event => {
    doSearch(userInput2.value);
})
userInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        doSearch(userInput.value)
        searchBlock.className += " hidden"
        logoBLock.className += " hidden"

    }
})
userInput2.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        doSearch(userInput2.value)

        searchBlock.className += " hidden"
        logoBLock.className += " hidden"
    }
})

window.addEventListener("load", event => {
    // modal.ariaHidden = "false"
    myModalAlternative.show()
    console.log("success");
})
