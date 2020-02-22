//PAST LAUNCHES-Fetch API past launches, Fetches 10 of 89 past launches

fetch ("https://api.spacexdata.com/v3/launches/past/?limit=7&offset=72")
  .then(result => result.json())
    .then ((res) => {
        pastLaunches(res);
    })
  .catch(err => console.log(err))

 //UPCOMING LAUNCHES-Fetch upcoming Launches. Fetches 15 of 18 launches
fetch ("https://api.spacexdata.com/v3/launches/upcoming/?limit=15&offset=1")
.then(result => result.json())
  .then ((res) => {
      upComingLaunches(res);
  })
.catch(err => console.log(err))

//LATEST LAUNCH - Fetches the latest launch
fetch('https://api.spacexdata.com/v3/launches/latest')
.then(latestLaunch => latestLaunch.json())
  .then((res) => {
      latestRocket(res);
  })
.catch(err => console.log(err));






//Fetches the first upcoming launch. Note this is only one launch!

function latestRocket (latestLaunch) {
    var containerLaunches = document.getElementById('last_launch');

    //Heading from latest launch
    var headingLatestLaunch = document.createElement('h2');
    headingLatestLaunch.innerHTML = 'Latest launch: ' + latestLaunch.mission_name ;
    headingLatestLaunch.id = 'heading_latest_launch';
    containerLaunches.appendChild(headingLatestLaunch);

    //Get Launchdate
    var latestLaunchDay = document.createElement('p');
    latestLaunchDay.innerHTML = 'Launched: ' + latestLaunch.launch_date_utc.slice(0,-14);
    latestLaunchDay.id = 'launch_date';
    containerLaunches.appendChild(latestLaunchDay);

    var getDetails = document.createElement('p');
    getDetails.setAttribute('id', 'detail_latest_launch');
    getDetails.innerHTML = latestLaunch.details;
    containerLaunches.appendChild(getDetails);
};







//PAST LAUNCHES - Looping through past launches and displays the launches  

function pastLaunches (result) {
    var getLaunches = document.querySelector('.single_past_launches');
    
    for (var i = 0; i < result.length; i++){

        //Create av div that holds all API Info
        var pastLaunchesDiv = document.createElement('div');
        pastLaunchesDiv.classList = 'past_launches';
        getLaunches.appendChild(pastLaunchesDiv);

        //Create headings for past launches
        var nameOfLaunch = document.createElement('h2');
        nameOfLaunch.innerHTML = 'Mission: ' + result[i].mission_name;
        nameOfLaunch.classList = 'launch_heading';
        pastLaunchesDiv.appendChild(nameOfLaunch);
        
        //Create and fetch videolinks
        var videoLink = document.createElement('iframe');
        videoLink.classList = 'launch_links'
        videoLink.src = "https://www.youtube.com/embed/" + result[i].links.youtube_id;
        pastLaunchesDiv.appendChild(videoLink);

        //Create and fetch information about launch
        var launchInfo = document.createElement('p');
        launchInfo.classList = 'launch_info';
        launchInfo.innerHTML = result[i].details;
        pastLaunchesDiv.appendChild(launchInfo);
    }
};







//UPCOMING LAUNCHES - Looping through the launches and displays the launches

function upComingLaunches (result) {
    var getInnerDiv = document.querySelector('.single_launch')
    for (var j = 0; j < result.length; j++) {

        var createDiv = document.createElement('div');
        createDiv.classList = 'upcoming_launch_info';
        getInnerDiv.appendChild(createDiv);

        //Create heading and fetch from API
        var futureLaunch = document.createElement('h2');
        futureLaunch.innerHTML = 'Mission: ' + result[j].mission_name;
        futureLaunch.id = 'launch_heading_upcoming';
        createDiv.appendChild(futureLaunch);
        
        //Create span for counter
        var launchCountdown = document.createElement('span');
        launchCountdown.classList = 'countdown_clock'      
        createDiv.appendChild(launchCountdown);

        //Creates info about launchplace
        var launchPlace = document.createElement('p');
        launchPlace.innerHTML = 'Launch site: ' + result[j].launch_site.site_name_long;
        launchPlace.classList = 'launch_place';
        createDiv.appendChild(launchPlace);

        
        //nextlaunch defined here but passes as an argument to function createCountdown
        nextLaunch = new Date(result[j].launch_date_utc).getTime();
        createCountdown(nextLaunch, launchCountdown);    
      } 
};





//UPCOMING LAUNCHES TOGGLE - Show/hide/Toggle upcoming launches

var accordionBtn = document.getElementById('show_launches');
var openLaunches = document.querySelector('.single_launch')
accordionBtn.addEventListener('click', showAccordion);

function showAccordion () {
    openLaunches.classList.toggle('open');
    
        if(openLaunches.classList.contains('open')) {
          accordionBtn.innerHTML = 'Close launches';
        } else {
          accordionBtn.innerHTML = 'See upcoming Launches'
        }
};




//PAST LAUNCHES TOGGLE - Show/hide/Toggle upcoming launches

var btnPastLaunches = document.getElementById('show_past_launchesBtn');
var pastLaucnhesOpen = document.querySelector('.single_past_launches');
btnPastLaunches.addEventListener('click', showAccordionPastLaunches); 

function showAccordionPastLaunches () {
    pastLaucnhesOpen.classList.toggle('open');
  
        if(pastLaucnhesOpen.classList.contains('open')) {
            btnPastLaunches.innerHTML = 'Close past launches';
        } else {
            btnPastLaunches.innerHTML = 'Show past launches';
        }
};








//COUNTDOWN-fetches date and showing counter for upcoming launches

function createCountdown(nextLaunch, element){

    var launchCounter = setInterval(function() {
        var getDiv = document.getElementById('test');
        var today = new Date().getTime();
        
        if(today < nextLaunch){       
          launchStart =  nextLaunch - today;        
          var launchDay = Math.floor(launchStart / (1000 * 60 * 60 * 24));
          var launchHours = Math.floor((launchStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var launchMinutes = Math.floor((launchStart % (1000 * 60 * 60)) / (1000 * 60));
          var launchSeconds = Math.floor((launchStart  % (1000 * 60)) / 1000);

          element.innerHTML = "Launch: " + launchDay + " days " + ('0' + launchHours).slice(-2) + "hrs " + ('0' + launchMinutes).slice(-2) + " min " + ('0' + launchSeconds).slice(-2);
          
          if (launchStart < 0) {
            clearInterval(launchCounter); 
            document.createElement('p').innerHTML = "Liftoff!!";
          }
        } else{
          element.innerHTML = 'Launched';
        }
  }, 1000);
}



