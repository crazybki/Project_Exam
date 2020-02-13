
//Countdown on pages



var launchday = new Date('Mar 1, 2020 23:59:59').getTime();
console.log(launchday)

var countDown = setInterval(function() {
    var thisDay = new Date().getTime();
    var timeToLaunch = launchday - thisDay;

    var dayOfLaunch = Math.floor(timeToLaunch / (1000 * 60 * 60 * 24));
    var hourOfLaunch = Math.floor((timeToLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesOfLaunch = Math.floor((timeToLaunch % (1000 * 60 * 60)) / (1000 * 60));
    var secondsOfLaunch = Math.floor((timeToLaunch % (1000 * 60)) / 1000);



    var dayElement = document.getElementById('day_clock');
    dayElement.innerHTML = dayOfLaunch;
    var hourElement = document.getElementById('hour_clock');
    hourElement.innerHTML = ('0' + hourOfLaunch).slice(-2);
    var minutesElement = document.getElementById('minutes_clock');
    minutesElement.innerHTML = ('0' + minutesOfLaunch).slice(-2);
    var secondsElement = document.getElementById('seconds_clock');
    secondsElement.innerHTML = ('0' + secondsOfLaunch).slice(-2);

    if (timeToLaunch < 0) {
        clearInterval(countDown); 
        document.getElementById('launch_paragraph').innerHTML = "Liftoff!!";
    }
}, 1000);


// Slide-in menu

var hamburger = document.getElementById('hamburger');
var menu = document.querySelector('.menu');

hamburger.addEventListener('click', slideMenu);

function slideMenu () {

    menu.classList.toggle('open');

    if(menu.classList.contains('open')) {
         hamburger.innerHTML = "X";
    }

    else {
         hamburger.innerHTML = "&#9776;"; 
    }

};

