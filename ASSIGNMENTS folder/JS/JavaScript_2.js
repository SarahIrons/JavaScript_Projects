//on lines 3 and 4 we see the butons for sign up vs sign in options. The #togglesignIn and #sign up on 3 and 4 are referring to the ID tags in HTML and CSS of these elements.

const signInBtn = document.querySelector('#toggleSignIn');
const signUpBtn = document.querySelector('#toggleSignUp');

const signUpForm = document.querySelector('#sign-up-container');
const signInForm = document.querySelector('#sign-in-container');

    // Change form when clicking on button; this toggles between options of new or returning users.
const changeForm = (form1, form2) => {
  form1.classList.toggle('hide');
  form2.classList.toggle('hide');
}

// Show the Sign In form
signInBtn.addEventListener('click', () => {
  changeForm(signUpForm, signInForm);
});
//this is an option for if the user is returning so it would guide them to 'sign in' vs 'sign up'

// Show the Sign Up form; this is prompted by the event listener using button click on the relevant button of the two options.
signUpBtn.addEventListener('click', () => {
  changeForm(signUpForm, signInForm);
});

//Method regarding Javascript form validation: two functions generated; one for each of the form types. In the alert triggers for a blank name or username field, the text display will prompt users to enter ALL of the relevant fields to proceed. It would be best practice to have separate alerts for each separate blank field and to have data validation present (example, to have correct email format and to have the correct password settings such as character length/complexity for strong password for a site if needed.)

//sign in validation
signInBtn01 = document.getElementById('username');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  if (username.value === "") {
    alert("Please enter your username and password to proceed.");
    username.focus();
    return false;
  }
  return true;
}

signInBtn01.addEventListener('click', validate);

//sign up validation --
signUpBtn01 = document.getElementById('name');

const validate01 = (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  if (name.value === "") {
    alert("Please enter your name, email and password to proceed.");
    name.focus();
    return false;
  }
 
  return true;
}

signUpBtn01.addEventListener('click', validate01);