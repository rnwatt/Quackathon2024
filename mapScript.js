
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

    var hintDir = "No Clues";

    var firstLoad = 0;

    var value = -1;

    //ready for some hacks boys?
  /* let locations = ["Perth and Kinross", "Edinburgh", "Northumberland", "Derry", "Cumbria", "Bridgend", "Manchester", "Coventry", "Bedford", "Herefordshire", "Somerset", "Anglesey", "Cornwall", "Dorset", "London City", "Norfolk", "Kent", "Suffolk", "Eilean Siar", "Orkney", "Highland", "South Ayrshire", "East Riding of Yorks", "North Yorkshire", "Ceredigion", "Lincolnshire", "Derbyshire", "Oxfordshire", "West Sussex", "Hampshire", "Argyll and Bute"];

    let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99];

    let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88]; */

    //it is 2:30 am, I have no other solutions than put the arrays in every single fucking function. this is so fucking stupid

    function setup (){
      let locations = ["Perth and Kinross", "Edinburgh", "Northumberland", "Derry", "Cumbria", "Bridgend", "Manchester", "Coventry", "Bedford", "Herefordshire", "Somerset", "Anglesey", "Cornwall", "Dorset", "London City", "Norfolk", "Kent", "Suffolk", "Eilean Siar", "Orkney", "Highland", "South Ayrshire", "East Riding of Yorks", "North Yorkshire", "Ceredigion", "Lincolnshire", "Derbyshire", "Oxfordshire", "West Sussex", "Hampshire", "Argyll and Bute", "Wick", "Lybster", "Elgin", "Dundee", "Stirling", "Aviemore", "Dumfries", "Exeter", "South Molton"];

      let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99, 58.23, 57.85, 57.64, 56.46, 56.12, 57.2, 55.07, 50.57, 51.01];
  
      let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88, -3.75, -4.18, -3.31, -2.97, -3.86, -3.82, -3.6, -3.52, -3.83]; 

    var playerStart = Math.floor(Math.random() * 30);
    var bandStart = Math.floor(Math.random() * 30);
    while (bandStart == playerStart){
      bandStart = Math.floor(Math.random() * 30);
    }
    currLocation = playerStart;
    bandLocation = bandStart;
    currMoney = 1000;
    phase = "Action";
    document.getElementById('phase').innerHTML = "Action Phase";
    document.getElementById("actionButtons").style.display = "block";
    document.getElementById("moveBox").style.display = "none";
    document.getElementById('currCity').innerHTML = "Current Location: " + locations[playerStart];
    document.getElementById('currMoney').innerHTML = "Current Cash: " + currMoney;

    fishScore = 10 - ((Math.abs(lat[currLocation] - lat[bandLocation])) + (Math.abs(long[currLocation] - long[bandLocation])));
    if (fishScore < 0) {
      fishScore = 0;
    }
    fishScore = Math.floor(fishScore);
    document.getElementById('cityFish').innerHTML = "ATMs with Fish: " + fishScore;

    const costList = []; 
    var i = 0;
  while (i <= 30){
        var score = (Math.abs(lat[currLocation] - lat[i])) + (Math.abs(long[currLocation] - long[i])) * 50;
        costList.push(Math.floor(score));
      i++;
    } 

    
if (firstLoad == 1){
  var selectObj = document.getElementById('moveOpt');
	var selectParentNode = selectObj.parentNode;
	var newSelectObj = selectObj.cloneNode(false); // Make a shallow copy
	selectParentNode.replaceChild(newSelectObj, selectObj);
	return newSelectObj;
}

   for(var i = 0; i <= 30; i++) {
      if (i == currLocation){

      }
      else {
      var el = document.createElement("option");
      el.textContent = locations[i] + " " + costList[i];
      el.value = i;
      moveOpt.appendChild(el);
      }
      firstLoad = 1;
    }
    
    }

function phaseSwitch (){
  let locations = ["Perth and Kinross", "Edinburgh", "Northumberland", "Derry", "Cumbria", "Bridgend", "Manchester", "Coventry", "Bedford", "Herefordshire", "Somerset", "Anglesey", "Cornwall", "Dorset", "London City", "Norfolk", "Kent", "Suffolk", "Eilean Siar", "Orkney", "Highland", "South Ayrshire", "East Riding of Yorks", "North Yorkshire", "Ceredigion", "Lincolnshire", "Derbyshire", "Oxfordshire", "West Sussex", "Hampshire", "Argyll and Bute", "Wick", "Lybster", "Elgin", "Dundee", "Stirling", "Aviemore", "Dumfries", "Exeter", "South Molton"];

  let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99, 58.23, 57.85, 57.64, 56.46, 56.12, 57.2, 55.07, 50.57, 51.01];
  
  let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88, -3.75, -4.18, -3.31, -2.97, -3.86, -3.82, -3.6, -3.52, -3.83]; 

  if (phase == "Action")
  {
    phase = "Movement";
    document.getElementById('phase').innerHTML = "Movement Phase";
    document.getElementById('currCity').innerHTML = "Current Location: " + locations[currLocation] + ": " + hintDir;
    document.getElementById('currMoney').innerHTML = "Current Cash: " + currMoney;
    document.getElementById('cityFish').innerHTML = "ATMs with Fish: " + fishScore;
    document.getElementById("actionButtons").style.display = "none";
    document.getElementById("moveBox").style.display = "block";

    var moveOpt = document.getElementById('moveOpt');
  var i = 0;
 /* const costList = []; 
  while (i <= 30){
        var score = (Math.abs(lat[currLocation] - lat[i])) + (Math.abs(long[currLocation] - long[i])) * 50;
        costList.push(Math.floor(score));
      i++;
    } 

    
if (firstLoad == 1){
  var selectObj = document.getElementById('moveOpt');
	var selectParentNode = selectObj.parentNode;
	var newSelectObj = selectObj.cloneNode(false); // Make a shallow copy
	selectParentNode.replaceChild(newSelectObj, selectObj);
	return newSelectObj;
}

   for(var i = 0; i <= 30; i++) {
      if (i == currLocation){

      }
      else {
      var el = document.createElement("option");
      el.textContent = locations[i] + " " + costList[i];
      el.value = i;
      moveOpt.appendChild(el);
      }
      firstLoad = 1;
    } */

  }
  else {
    phase = "Action";

    fishScore = 10 - ((Math.abs(lat[currLocation] - lat[bandLocation])) + (Math.abs(long[currLocation] - long[bandLocation])));
    if (fishScore < 0) {
      fishScore = 0;
    }

    fishScore = Math.floor(fishScore);
    document.getElementById('currCity').innerHTML = "Current Location: " + locations[currLocation];
    document.getElementById('currMoney').innerHTML = "Current Cash: " + currMoney;
    document.getElementById('cityFish').innerHTML = "ATMs with Fish: " + fishScore;
    document.getElementById('phase').innerHTML = "Action Phase";
    document.getElementById("actionButtons").style.display = "block";
    document.getElementById("moveBox").style.display = "none";
  }
}

//money tracker/lose check?
function moneyTrack(){
    if (currMoney < 0){
      alert("Sorry you ran out of funds! :( ");
    }
    else {
      return;
    }
}    

//money gain
function clean(){
  currMoney = currMoney + 10;
  hintDir = "No Clues";
  phaseSwitch(); 
}

// hint providor 
function hint() {
  let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99, 58.23, 57.85, 57.64, 56.46, 56.12, 57.2, 55.07, 50.57, 51.01];

  currMoney = currMoney - 10;
  moneyTrack();

  var hintScore = lat[currLocation] - lat[bandLocation];
  if (hintScore > 0){
      hintDir = 'South';
  }
  else if (hintScore < 0){
    hintDir = 'North';
  }
  else {
    hintDir = "East or West";
  }

  phaseSwitch();
}


//movement shit
function move() {
  let lat = [ 56.55, 55.95, 55.2, 54.17, 54.99, 54.57, 51.5, 53.48, 52.41, 52.13, 52.07, 51.1, 53.26, 50.41, 50.74, 51.5, 52.6, 51.27, 52.18, 57.7, 58.93, 57.45, 55.45, 53.82, 54.19, 52.21, 53.05, 53.1, 51.76, 50.92, 51.05, 55.99, 58.23, 57.85, 57.64, 56.46, 56.12, 57.2, 55.07, 50.57, 51.01];
  
  let long = [-3.7, -3.11, -2.07, -6.33, -7.31, -2.79, -3.57, -2.24, -1.5, -0.46, -2.65, -2.92, -4.42, -4.97, -2.34, -0.12, 0.88, 0.97, -6.51, -2.74, -4.99, -4.62, -0.43, -1.54, -3.99, -0.16, -1.56, -1.24, -0.46, -1.3, -5.88, -3.75, -4.18, -3.31, -2.97, -3.86, -3.82, -3.6, -3.52, -3.83]; 

    var ah = document.getElementById("moveOpt");
  var next = ah.value;
  if (next == currLocation){
  }
  else{
    var cost = (Math.abs(lat[currLocation] - lat[next])) + (Math.abs(long[currLocation] - long[next])) * 50;
    cost = Math.floor(cost);
    currMoney = currMoney - cost;
    moneyTrack();
    currLocation = next;
    if (currLocation == bandLocation){
      winCheck();
    }
    else{
      phaseSwitch();
    }
  }
  //winCheck();
  //phaseSwitch();
} 

//bandit movement
function banditMove(){
  //some sort of ai moving this boy and then checking if hes in the same area idk man
}

//win check
function winCheck () {
  alert("You win :)");
}