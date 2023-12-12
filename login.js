//validation code for input

var email = document.forms['form'] ['email'];
var password = document.forms['form'] ['password'];

var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('textInput',email_verify);
password.addEventListener('textInput',password_verify);

function validated(){
if (email.value.length <5){
    email.style.border = "1px solid red";
    email_error.style.display = "Incorrect";
    email.focus();
    return false;
}
if (password.value.length <4){
    password.style.border = "1px solid red";
    password_error.style.display = "Incorrect";
    password.focus();
    return false;
}

function email_verify(){
    if(email_verify.length >=4) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
             return true;
    }
}

function password_verify(){
    if(password_verify.length >=3) {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
             return true;
    }
}