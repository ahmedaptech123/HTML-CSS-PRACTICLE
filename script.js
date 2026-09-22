const footer = document.querySelector("footer");

const currentYear = new Date().getFullYear();

footer.innerHTML = `@ All rights reserved ${currentYear}`;



const form = document.querySelector("form");

const nameInput = form.querySelectorAll("input")[0];
const emailInput = form.querySelectorAll("input")[1];


const errorMessage = document.createElement("div");
errorMessage.className = "alert alert-danger mt-3";
errorMessage.style.display = "none";

form.appendChild(errorMessage);

form.addEventListener("submit", function (event) {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();


    errorMessage.style.display = "none";
    errorMessage.textContent = "";


    if (name === "") {
        event.preventDefault();

        errorMessage.textContent = "Please enter your name.";
        errorMessage.style.display = "block";

        nameInput.focus();
        return;
    }


    if (email === "") {
        event.preventDefault();

        errorMessage.textContent = "Please enter your email address.";
        errorMessage.style.display = "block";

        emailInput.focus();
        return;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        event.preventDefault();

        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";

        emailInput.focus();
        return;
    }

    
    alert("Form submitted successfully!");
});



const themeButton = document.createElement("button");

themeButton.textContent = "🌙 Dark Mode";
themeButton.className = "btn btn-dark position-fixed";
themeButton.style.top = "80px";
themeButton.style.right = "20px";
themeButton.style.zIndex = "1000";

document.body.appendChild(themeButton);



themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "☀️ Light Mode";
        themeButton.className = "btn btn-light position-fixed";
        themeButton.style.top = "80px";
        themeButton.style.right = "20px";
        themeButton.style.zIndex = "1000";
    } else {
        themeButton.textContent = "🌙 Dark Mode";
        themeButton.className = "btn btn-dark position-fixed";
        themeButton.style.top = "80px";
        themeButton.style.right = "20px";
        themeButton.style.zIndex = "1000";
    }
});