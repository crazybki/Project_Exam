//Fetch API past launches, Fetches 15 of 89 past launches

fetch ("https://api.spacexdata.com/v3/launches/past/?limit=10&offset=74")
  .then(result => result.json())
    .then ((res) => {
        pastLaunches(res);
    })
  .catch(err => console.log(err))

//Looping through the launches and displays the launches  
function pastLaunches (result) {
    var getLaunches = document.getElementById('launches_flex');
    
    for (var i = 0; i < result.length; i++){

        //Create headings for past launches
        var nameOfLaunch = document.createElement('h2');
        nameOfLaunch.innerHTML = result[i].mission_name;
        nameOfLaunch.classList = 'launch_heading';
        getLaunches.appendChild(nameOfLaunch);
        
        //Create and fetch videolinks
        var videoLink = document.createElement('iframe');
        videoLink.classList = 'launch_links'
        videoLink.src = "https://www.youtube.com/embed/" + result[i].links.youtube_id;
        getLaunches.appendChild(videoLink);

        //Create and fetch information about launch
        var launchInfo = document.createElement('p');
        launchInfo.classList = 'launch_info';
        launchInfo.innerHTML = result[i].details;
        getLaunches.appendChild(launchInfo);
    }
};

//Fetch upcoming Launches. Fetches 15 of 18 launches
fetch ("https://api.spacexdata.com/v3/launches/upcoming/?limit=15&offset=1")
  .then(result => result.json())
    .then ((res) => {
        upComingLaunches(res);
    })
  .catch(err => console.log(err))



//Looping through the launches and displays the launches
function upComingLaunches (result) {
  var getInnerDiv = document.querySelector('.single_launch')
  for (var j = 0; j < result.length; j++) {

    var createDiv = document.createElement('div');
    createDiv.classList = 'upcoming_launch_info';
    getInnerDiv.appendChild(createDiv);
    console.log(createDiv)

    //Create heading and fetch from API
    var futureLaunch = document.createElement('h2');
    futureLaunch.innerHTML = 'Mission: ' + result[j].mission_name;
    futureLaunch.classList = 'launch_heading';
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
 
    //COUNTDOWN
    createCountdown(nextLaunch, launchCountdown);    
  } 
};



//Show/hide/Toggle upcoming launches

var accordionBtn = document.getElementById('show_launches');
var openLaunches = document.querySelector('.single_launch')
accordionBtn.addEventListener('click', showAccordion);

function showAccordion () {
  openLaunches.classList.toggle('open');

    if(openLaunches.classList.contains('open')) {
      accordionBtn.innerHTML = 'Show Launches';
    } else {
      accordionBtn.innerHTML = 'Close launches'
    }
};


//Counter fetches date and showing counter for upcoming launches
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

      element.innerHTML = "Launching in: " + launchDay + " days " + ('0' + launchHours).slice(-2) + "hrs " + ('0' + launchMinutes).slice(-2) + " mins " + ('0' + launchSeconds).slice(-2) + " sec";
      
      if (launchStart < 0) {
        clearInterval(launchCounter); 
        document.createElement('p').innerHTML = "Liftoff!!";
      }
    }else{
      element.innerHTML = 'Launched';
    }
  }, 1000);

}



