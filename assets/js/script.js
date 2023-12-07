"use strict";
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {

    let input = document.querySelector("form input");
    
    if (input.value == "") {
        e.preventDefault();
        console.log("digite algo");
        let span = document.querySelector(".error");
        span?.classList.add("errorTs");
    }
    else {
        let span = document.querySelector(".error");
        span?.classList.remove("errorTs");
    }


    let regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);

    if (regex.test(input.value)) {
        return true;
        let span = document.querySelector(".error");
        span?.classList.remove("errorTs");
    }
    else {
        e.preventDefault();
        let span = document.querySelector(".error");
        span?.classList.add("errorTs");
    }
});
