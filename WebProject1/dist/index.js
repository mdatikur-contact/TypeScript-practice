"use strict";
const userForm = document.querySelector("form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userCountry = document.querySelector("#country");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        userName: userName.value,
        userEmail: userEmail.value,
        userCountry: userCountry.value,
        userFeedback: userFeedback.value
    };
    console.log(data);
});
