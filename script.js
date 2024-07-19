document.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        let isValid = true;
        let messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push("Username should be longer than three characters");
        }
        if(/^(?!.*[@.]).*$/.test(email)){
            isValid = false;
            messages.push("Email should contain @ and .");
        }
        if(password.length < 8){
            isValid = false;
            messages.push("Password should be longer than 8 characters");
        }

        feedbackDiv.style.display = "block";

        if(isValid){
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.color = "#28a745";
        }else{
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.color = "#dc3545";
        }
        
    });

});