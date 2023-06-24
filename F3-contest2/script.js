const signupForm = document.querySelector('.form');
const signupButton = document.querySelector('#signupbtn');
const errorElement = document.querySelector('.message p:first-child');
const successElement = document.querySelector('.message p:last-child');
const signupPage = document.querySelector('.signup_form');


function generateAccessToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}


function handleSignup(event) {
  event.preventDefault();
  
  const fullName = document.querySelector('#fname').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#cpassword').value;

 //error msg
  if (fullName === '' || email === '' || password === '' || confirmPassword === '') {
    errorElement.textContent = 'Error : All the fields are mandatory';
    errorElement.style.color = 'red';
    errorElement.style.display = 'block';
    successElement.style.display = 'none';
    return;
  }

  if (password !== confirmPassword) {
    errorElement.textContent = 'Error: Passwords do not match.';
    errorElement.style.color = 'red';
    errorElement.style.display = 'block';
    successElement.style.display = 'none';
    return;
  }

  // obj for locl stg
  const user = {
    fullName,
    email,
    password,
    accessToken: generateAccessToken() 
  };

 //storing
  localStorage.setItem('user-copy', JSON.stringify(user));

  
  errorElement.style.display = 'none';
  successElement.style.display = 'block';
  successElement.style.color = 'green';
  successElement.textContent = 'Successfully Signed Up!';

 // redirecting
  setTimeout(() => {
    window.location.href = 'profile.html';
  },1000);
}

signupButton.addEventListener('click', handleSignup);
