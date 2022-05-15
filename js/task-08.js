const loginForm = document.querySelector('.login-form');


function onLoginFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!");
    } else {          
        const fieldValues = {
            [email.name]: email.value,
            [password.name]: password.value,
        };  
        console.log(fieldValues);
        event.currentTarget.reset();
    }
};


loginForm.addEventListener('submit', onLoginFormSubmit);
