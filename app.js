const formEl = document.querySelector('form');
formEl.setAttribute("novalidate", true);

const formErrors = [];

formEl.addEventListener('submit' , checkFormFields)

function checkFormFields(e) {
    e.preventDefault()

    const email = document.querySelector('[type = email]');
    const password1 = document.querySelector('[name = pass1]');
    const password2 = document.querySelector('[name = pass2]');
    const confirm = document.querySelector('[type = checkbox]');

    if(!email.value.includes('@')) {
        formErrors.push(email);
    }

    if(password1.value.length < 6 || password1.value !== password2.value) {
        formErrors.push(password1, password2);
    }

    if(!confirm.checked) {
        formErrors.push(confirm);
    }

    if(formErrors.length > 0) {
        formErrors.forEach( function(el) {
            el.previousElementSibling.style.color = "red";
        } )
    }

    else{

        const labels = document.querySelectorAll('label');

        labels.forEach(function(el) {

            el.style.color = 'black'
        })
        console.log('done');
    }
}

console.log(formErrors)


