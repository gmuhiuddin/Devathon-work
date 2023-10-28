let signInTxt = document.getElementById('sign-in-txt');
let signIn = document.getElementById('sign-in');
let signup = document.getElementById('sign-up');

let signUpTxt = document.getElementById('sign-up-txt');

signUpTxt.addEventListener('click',() =>{
    signIn.style.display = 'none'
    signup.style.display = 'block'
})

signInTxt.addEventListener('click',() =>{
    signIn.style.display = 'block'
    signup.style.display = 'none'

    let signInuserEmail = document.getElementById('user-email');
    signInuserEmail.value = localStorage.getItem('User email')
    
})

let signInBtn = document.getElementById('sign-in-btn');
signInBtn.addEventListener('click',() => {
    let signInuserPassword = document.getElementById('user-password');
    let signInuserEmail = document.getElementById('user-email');
    if(signInuserEmail.value === localStorage.getItem('User email') && signInuserPassword.value === localStorage.getItem('User password')){
    
    }else{
        signInuserPassword.value = '';
        alert('Email and Password is incorrect')
    }
})

let signUpBtn = document.getElementById('sign-up-btn');

signUpBtn.addEventListener('click',() => {
    let signUpUserName = document.getElementById('sign-up-user-name');
    let signUpUserEmail = document.getElementById('sign-up-user-email');
    let signUpUserPassword = document.getElementById('sign-up-user-password');

    localStorage.setItem('User name',signUpUserName.value)
    localStorage.setItem('User email',signUpUserEmail.value)
    localStorage.setItem('User password',signUpUserPassword.value)
})
