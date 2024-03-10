
    //how to stuff
    function howToOn() {
      document.getElementById("howTo").style.display = "block";
    }
    
    function howToOff() {
      document.getElementById("howTo").style.display = "none";
    }

    //game shit that makes the game do the game

    //can be action or movement
    var phase = "Action";

    //fix to whatever
    var currMoney = 1000;

    var currLocation = null;

    var bandLocation = null;

    var fishScore = null;

    //ready for some hacks boys?
  /* let locations = ["Perth and Kinross", "Edinburgh", "Northumberland", "Derry", "Cumbria", "Bridgend", "Manchester", "Coventry", "Bedford", "Herefordshire", "Somerset", "Anglesey", "Cornwall", "Dorset", "London City", "Norfolk", "Kent", "Suffolk", "Eilean Siar", "Orkney", "Highland", "South Ayrshire", "East Riding of Yorks", "North Yorkshire", "Ceredigion", "Lincolnshire", "Derbyshire", "Oxfordshire", "West Sussex", "Hampshire", "Argyll and Bute"];

    let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99];

    let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88]; */

    //it is 2:30 am, I have no other solutions than put the arrays in every single fucking function. this is so fucking stupid

    function setup (){
      let locations = ["Perth and Kinross", "Edinburgh", "Northumberland", "Derry", "Cumbria", "Bridgend", "Manchester", "Coventry", "Bedford", "Herefordshire", "Somerset", "Anglesey", "Cornwall", "Dorset", "London City", "Norfolk", "Kent", "Suffolk", "Eilean Siar", "Orkney", "Highland", "South Ayrshire", "East Riding of Yorks", "North Yorkshire", "Ceredigion", "Lincolnshire", "Derbyshire", "Oxfordshire", "West Sussex", "Hampshire", "Argyll and Bute"];

      let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99];
  
      let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88]; 

    var playerStart = Math.floor(Math.random() * 30);
    var bandStart = Math.floor(Math.random() * 30);
    while (bandStart == playerStart){
      bandStart = Math.floor(Math.random() * 30);
    }
    currLocation = playerStart;
    bandLocation = bandStart;
    currMoney = 1000;
    phase = "Action";
    document.getElementById('currCity').innerHTML = "Current Location: " + locations[playerStart];
    document.getElementById('currMoney').innerHTML = "Current Cash: " + currMoney;

    fishScore = 10 - ((Math.abs(lat[currLocation] - lat[bandLocation])) + (Math.abs(long[currLocation] - long[bandLocation])));
    if (fishScore < 0) {
      fishScore = 0;
    }
    fishScore = Math.floor(fishScore);
    document.getElementById('cityFish').innerHTML = "ATMs with Fish: " + fishScore;
    /* var i = 0;
    const fishList = []; 
    while (i <= 30){
        var score = (Math.abs(lat[playerStart] - lat[i])) + (Math.abs(long[playerStart] - long[i]));
        fishList.push(Math.floor(score));
      i++;
    } */
    }

function phaseSwitch (){
  if (phase == "Action")
  {
    phase = "Movement";
    document.getElementById('phase').innerHTML = "Movement Phase";
  }
  else {
    phase = "Action";
    document.getElementById('currCity').innerHTML = "Current Location: " + currLocation;
    document.getElementById('phase').innerHTML = "Movement Phase";
  }
}

//money tracker/lose check?
function moneyTrack(){
    if (currMoney > 0){
      //lose screen
    }
    else {
      return;
    }
}    

//money gain
function clean(){
  //idk values can change
  currMoney = currMoney + 10;
  phaseSwitch(); 
}


// hint providor 
function hint() {
  currMoney = currMoney - 10;
  moneyTrack();

  //some hint bs here

  phaseSwitch();
}

//movement shit
function move() {
  //lol figure it out asshole
  winCheck();
  phaseSwitch();
} 

//bandit movement
function banditMove(){
  //some sort of ai moving this boy and then checking if hes in the same area idk man
}

//win check
function winCheck () {
  //check if bandit and player are in the same city
}