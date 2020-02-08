
//Form Validation

/*When user is clicking "Submit button", user shall get a message and input fields 
will show colors and display a short message*/


//Event and function for firstname checks to see if it contains a-zA-Z with - and space
document.getElementById('send').addEventListener('click', submitName);

function submitName () {
    var checkFirstName = /^[a-z/A-Z\-]{3,}$/;
    var inputfirstName = checkFirstName.test(document.getElementById('firstname').value);
    var styleTxtField = document.getElementById('firstname');
    var userInput = document.getElementById('firstname').value; 

    if (inputfirstName === true) {
        event.preventDefault();
 
    } else if (userInput === '') {
        event.preventDefault();
        var getErrormsg = document.getElementById('errormsg_firstname');
        getErrormsg.innerHTML = 'Input field is blank, please type in your first name'; 

    } else {
        event.preventDefault();
        styleTxtField.style.backgroundColor = 'red';
        var getErrormsg = document.getElementById('errormsg_firstname');
        getErrormsg.innerHTML = 'Please enter your first name';
    }
};


//Event and function for lastname checks to see if it contains a-zA-Z with - and space
document.getElementById('send').addEventListener('click', submitLastName);

function submitLastName () {
    var checkLastName = /^[a-z/A-Z\-]{3,}$/;
    var inputLastName = checkLastName.test(document.getElementById('lastname').value);
    var styleLastName = document.getElementById('lastname');
    var userInputLastname = document.getElementById('lastname').value;

    if (inputLastName === true) {
        event.preventDefault();

    } else if (userInputLastname === '') {
        event.preventDefault();
        var errorLastName = document.getElementById('errormsg_lastname');
        errorLastName.innerHTML = 'Input field is blank, please type in your last name';
    }
    
    else {
        event.preventDefault();
        styleLastName.style.backgroundColor = 'red';
        var errorLastName = document.getElementById('errormsg_lastname');
        errorLastName.innerHTML = 'Please enter your last name'; 
    }
};


document.getElementById('send').addEventListener('click', submitEmail);

function submitEmail () {
    var checkEmail = /[a-z0-9/=?^{|}-]+(?:\.[a-z0-9!'*+/=?^_‘{|}]+)*@(?:[a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    var inputEmail = checkEmail.test(document.getElementById('email').value);
    var styleEmail = document.getElementById('email');
    var userInput = document.getElementById('email').value;
    
    if (inputEmail === true) {
        event.preventDefault();
          
    } else if (userInput === '') {
        event.preventDefault();
        var errorEmail = document.getElementById('errormsg_email');
        errorEmail.innerHTML = 'Input field is blank, please type in your email adress';

    } else {
        event.preventDefault();
        styleEmail.style.backgroundColor = 'red';
        var errorEmail = document.getElementById('errormsg_email');
        errorEmail.innerHTML = 'Please enter a valid email adress';
        console.log('something written')
    }
};


document.getElementById('send').addEventListener('click', submitQuestion);

function submitQuestion () {
    var checkTextArea = /[a-z/A-Z\-\w\W]/;
    var txtAreaInput = checkTextArea.test(document.getElementById('questions').value);
    var txtAreaStyle = document.getElementById('questions');
    var txtUserInput = document.getElementById('questions').value;

    if (txtAreaInput === true) {
        event.preventDefault();

    } else if (txtUserInput === '') {
        event.preventDefault();
        var errorArea = document.getElementById('errormsg_txtarea');
        errorArea.innerHTML = 'You havnt written us a question, the text area is blank. Please ask us a question';
    }
};

document.getElementById('send').addEventListener('click', submitForm);

function submitForm (submitQuestion) {
    if (submitQuestion === true) {
        var errorArea = document.getElementById('errormsg_txtarea');
        errorArea.innerHTML = 'thanks for your submit'
    }
}