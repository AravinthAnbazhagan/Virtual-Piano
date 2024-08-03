function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('mail').value;
    var number = document.getElementById('number').value;
    var pwd = document.getElementById('pwd').value;
    var cpwd = document.getElementById('cpwd').value;
    
    var nameError = document.getElementById('name_error');
    var mailError = document.getElementById('mail_error');
    var numberError = document.getElementById('number_error');
    var pwdError = document.getElementById('pwd_error');
    var cpwdError = document.getElementById('cpwd_error');

    nameError.innerHTML = '';
    mailError.innerHTML = '';
    numberError.innerHTML = '';
    pwdError.innerHTML = '';
    cpwdError.innerHTML = '';
    
    if (username.trim() === '') {
        nameError.innerHTML = '*Username is required.';
        return false;
    }
    
    if (email.trim() === '') {
        mailError.innerHTML = '*Email is required.';
        return false;
    }
    
    if (number.trim() === '') {
        numberError.innerHTML = '*Number is required.';
        return false;
    }
    
    if (number.length < 10) {
        numberError.innerHTML = '*Invalid Mobile number.';
        return false;
    }
    
    if (pwd.trim() === '') {
        pwdError.innerHTML = '*Password is required.';
        return false;
    }
    
    if (cpwd.trim() === '') {
        cpwdError.innerHTML = '*Confirm password is required.';
        return false;
    }
    
    if (pwd !== cpwd) {
        cpwdError.innerHTML = '*Password does not match.';
        return false;
    }
    
    return true;
}

function Validate() {
    var username = document.getElementById("logname").value;
    var password = document.getElementById("logpwd").value;

    document.getElementById("lname_error").innerText = "";
    document.getElementById("lpwd_error").innerText = "";

    if (username.trim() === "") {
        document.getElementById("lname_error").innerText = "*Username is required.";
        return false; 
    }

    if (password.trim() === "") {
        document.getElementById("lpwd_error").innerText = "*Password is required.";
        return false; 
    }

    return true;
}

 
