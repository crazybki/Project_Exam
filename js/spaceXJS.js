
//Countdown on pages

fetch ("https://api.spacexdata.com/v3/launches/next")
  .then(resultCounter => resultCounter.json())
    .then ((res) => {
        counter(res);
    })
  .catch(err => console.log(err))

  function counter (resultCounter) {
    var upcomingLaunch = new Date(resultCounter.launch_date_utc).getTime();

    var counterContainer = document.getElementById('counter');
    var createSpan = document.createElement('span');
    createSpan.id = 'counter_clock';
    counterContainer.appendChild(createSpan);

    var countDownToLaunch = setInterval(function() {
        var timeToday = new Date().getTime();
        

        if (timeToday < upcomingLaunch) {
            startLaunch = upcomingLaunch - timeToday;
            var countdownDay = Math.floor(startLaunch / (1000 * 60 * 60 * 24));
            var countdownHours = Math.floor((startLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var countDownMinutes =  Math.floor((startLaunch % (1000 * 60 * 60)) / (1000 * 60));
            var countDownSec = Math.floor((startLaunch  % (1000 * 60)) / 1000);

            createSpan.innerHTML = 'Next launch: ' + countdownDay + " days " + ('0' + countdownHours).slice(-2) + " hrs " + ('0' + countDownMinutes).slice(-2) + " min " + ('0' + countDownSec).slice(-2);

            if (startLaunch < 0) {
                clearInterval(countDownToLaunch); 
                document.createElement('p').innerHTML = "Liftoff!!";
              }
            } else{
                createSpan.innerHTML = 'Launched';
            }
    }, 1000)
}



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

