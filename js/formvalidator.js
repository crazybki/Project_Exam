
var submitBtn = document.getElementById('send');

submitBtn.addEventListener('focus', submitName);

function submitName () {
    var checkFirstName = /^[a-zA-Z ]+$/;
    var inputfirstName = checkFirstName.test(document.getElementById('firstname').value);
    var styleTxtField = document.getElementById('firstname');
    if (inputfirstName === true) {
        event.preventDefault();
        styleTxtField.style.backgroundColor = 'green';
        console.log('correct')
        
    } else {
        event.preventDefault();
        styleTxtField.style.backgroundColor = 'red';
        console.log('wrong');
        
    }
}
