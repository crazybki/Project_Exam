//Fetch API past launches

fetch ("https://api.spacexdata.com/v3/launches/past/?limit=14&offset=74")
  .then(result => result.json())
    .then ((res) => {
        pastLaunches(res);
    })
  .catch(err => console.log(err))

function pastLaunches (result) {
    var getLaunches = document.getElementById('launches_flex');
    
    for (var i = 0; i < result.length; i++){
        var nameOfLaunch = document.createElement('h2');
        nameOfLaunch.innerHTML = result[i].mission_name;
        nameOfLaunch.classList = 'launch_heading';
        getLaunches.appendChild(nameOfLaunch);

        var videoLink = document.createElement('iframe');
        videoLink.classList = 'launch_links'
        videoLink.src = "https://www.youtube.com/embed/" + result[i].links.youtube_id;
        getLaunches.appendChild(videoLink);

        var launchInfo = document.createElement('p');
        launchInfo.classList = 'launch_info'
        launchInfo.innerHTML = result[i].details;
        getLaunches.appendChild(launchInfo)
    }
};

//Fetch upcoming Launches 
