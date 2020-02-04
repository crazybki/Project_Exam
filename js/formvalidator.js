
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
        styleTxtField.style.backgroundColor = 'green';
        var getErrormsg = document.getElementById('errormsg_firstname');
        getErrormsg.innerHTML = "Thanks " + userInput + ' :)';
        console.log('correct')  
    } else {
        event.preventDefault();
        styleTxtField.style.backgroundColor = 'red';
        getErrormsg.innerHTML = "Are you sure " + userInput + ' is your name? Please try again.';
    }
};


//Event and function for lastname checks to see if it contains a-zA-Z with - and space
document.getElementById('send').addEventListener('click', submitLastName);

function submitLastName () {
    var checkLastName = /^[a-z/A-Z\-]{3,}$/;
    inputLastName = checkLastName.test(document.getElementById('lastname').value);
    var styleLastName = document.getElementById('lastname');
    var userInputLastname = document.getElementById('lastname').value;

    if (inputLastName === true) {
        event.preventDefault();
        styleLastName.style.backgroundColor = 'green';
        var errorLastName = document.getElementById('errormsg_lastname');
        errorLastName.innerHTML = 'Thanks ' + userInputLastname + ' :)'; 
    } else {
        event.preventDefault();
        styleLastName.style.backgroundColor = 'red';
        var errorLastName = document.getElementById('errormsg_lastname');
        errorLastName.innerHTML = 'Are you sure ' + userInputLastname + ' is your name? Please try again.'
    }
};


