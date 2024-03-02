var scorer = 0
var extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var blue1 = [];
var blue2 = [];
var blue3 = [];
var red1 = [];
var red2 = [];
var red3 = [];
var ipadID = sessionStorage.getItem("iPadId");
let savedComments = [];
var incmatchnumber = sessionStorage.getItem("matchnumber");
var OldCompressedList = [];
var OldExtraDataList = [];
var countt = [];
var curentAction = "";
var MakeqrExtraData = [];
var MakeqrCompList = [];
var rUsure = "";
var num = 0;
var quote = "";
/* Function List
--- Direct Button Functions ---
changeMatchNumber: Used to change the match number
changeTeamNumber: Used to change the team number
addAction: Called everytime a button is pushed.
Undo: Pops items off of all the lists.
moveTableLeft: Used to move backwards in the table structure
moveTableRight: Used to move forward in the table structure
updateComments: Add comments
resetButton: Resets all the variables
--- Indirect Functions ---
init: Initialize everything
updateLog: Updates the human list of actions done.
updateAvail: This was created to enable/disable (validation) scoring buttons based on how many game pieces the robot has.
--- Notes ---
The updateReview and updateList using the organizedActionList variable in 2022 code was legacy code that was used to show the scouter the total # they put in. This might be useful to have on a review page.
Combined lowerCounter and raiseCounter functions into the updateAvail function to make it easier.
*/

function replaceFail() {
  var index7 = actionList.indexOf("Climb");
  var index8 = actionList.indexOf("Failed Climb");


  if (index7 > -1) {
    actionList.splice(index7, 1);
  }
  if (index8 > -1) {
    actionList.splice(index8, 1);
  }



  var compressed7 = compressedList.indexOf(11);
  var compressed8 = compressedList.indexOf(12);



  if (compressed7 > -1) {
    compressedList.splice(compressed7, 1);
  }
  if (compressed7 > -1) {
    compressedList.splice(compressed8, 1);
  }

  console.log(actionList);
  updateLog();

}


function rgbaFromRgb(rgb, alpha) {
  // Extract RGB values
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return rgb;
  
  // Convert RGB to RGBA
  const rgba = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})`;
  return rgba;
}

function addButtonGlowEffect(id) {
  const button = document.getElementById(id);
  const buttonBgColor = window.getComputedStyle(button).getPropertyValue('background-color');
  const backgroundColorWithAlpha = rgbaFromRgb(buttonBgColor, 0.25);
  const table = document.getElementsByTagName('table')[0];
  console.log(backgroundColorWithAlpha);
  console.log(buttonBgColor);
  button.classList.add('box-shadow');
  table.classList.add('backdropBlur');
  button.style.boxShadow = `0px 0px 100vh 5vw ${backgroundColorWithAlpha}`;
  table.style.backdropFilter = 'blur(.1vh)';

  // After 1 second, change the blur to the defualt blur
  setTimeout(() => {
    button.style.boxShadow = `0px 0px 0px rgba(0, 0, 0, 0)`;
    table.style.backdropFilter = 'blur(0vh)';
  }, 500);
  
  // After 3 seconds, remove both classes
  setTimeout(() => {
    button.removeAttribute('style');
    table.removeAttribute('style');
  }, 1000);

  setTimeout(() => {
    button.classList.remove('box-shadow');
    table.classList.remove('backdropBlur');
  }, 1500);
  
}

function addAction(action, number) { //Used for buttons that have a data validation script
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
  compressedList.push(number); //Add it to the compressedList (QR Code)//
  updateLog(); //Update what the scouter sees on the app (actionList)
  addButtonGlowEffect(action);
  saveData();
}

function alliancePick(alliance) {
  addButtonGlowEffect(alliance);
  extraData[4] = alliance;
  console.log(extraData);
}

function GO() {
  getBoxData();
  var message = "You need to add ";
  var allClear = 1;
  const team = document.getElementById("teamNum");
  const match = document.getElementById("matchNum");
  const scout = document.getElementById("scout");
  team.removeAttribute('style')
  match.removeAttribute('style')
  scout.removeAttribute('style')
  if (extraData[0] === "" || extraData[1] === "" || extraData[2] === "") {
        if (extraData[0] === "") {
              message += "a team number, ";
              team.style.border = "5px solid red";
        }
        if (extraData[1] === "") {
              message += "a match number, ";
              match.style.border = "5px solid red";
        }
        if (extraData[2] === "") {
              message += "your initials, ";
              scout.style.border = "5px solid red";
        }
        message = message.substring(0, message.length - 3);
        message += "!";
        console.log(message);
      //  alert(message);
        allClear = 0;
  }
  actionList[0] = extraData[4];
  saveData();
  if (allClear == 1) {
        window.location.href = "./auton2.html";
  }
  console.log(displaySavedData());

}

function getBoxData() {
  extraData[0] = document.getElementById('teamNum').value;
  extraData[1] = document.getElementById('matchNum').value;
  extraData[2] = document.getElementById('scout').value;
  saveData();
  console.log(extraData);
}

function saveData() {
  sessionStorage.setItem("actionList", JSON.stringify(actionList));
  sessionStorage.setItem("compressedList", JSON.stringify(compressedList));
  sessionStorage.setItem("extraData", JSON.stringify(extraData));
}

function displaySavedData() {
  let compList = sessionStorage.getItem("compressedList");
  compList = JSON.parse(compList);
  let actList = sessionStorage.getItem("actionList");
  actList = JSON.parse(actList);
  let exData = sessionStorage.getItem("extraData");
  exData = JSON.parse(exData);
  return "compressed list: " + compList + " action list: " + actList + " extra data: " + exData;
}
function getData() {
  console.log(displaySavedData());
  let unparsedActionList = sessionStorage.getItem("actionList");
  let unparsedExtradata = sessionStorage.getItem("extraData");
  let unparsedCompressedList = sessionStorage.getItem("compressedList");
  actionList = JSON.parse(unparsedActionList);
  compressedList = JSON.parse(unparsedCompressedList);
  extraData = JSON.parse(unparsedExtradata);
  console.log(actionList);
  console.log(compressedList);
  console.log(extraData);
  updateLog();
}

function loadPage() {
  getData();
  displayBoxData();
}

function displayBoxData() {
  document.getElementById('teamNumberBox').value = extraData[0];
  document.getElementById('matchNumberBox').value = extraData[1];
  document.getElementById('coment').value = extraData[3];
}

function updateLog() {
  var logText = actionList.slice().reverse().join("\n");
  document.getElementById("teamLog1").value = logText;
}

function commentEdit(comment) {
  extraData[3] = comment;
  saveData();
}
function Undo() {
  var lastAction = actionList.pop();

  if (lastAction) {
    compressedList.pop();
    updateLog();
  } else {
    console.log("Nothing to undo");
  }
}

function getQuote() {
  num = Math.random() * 12
  if (num > 11){
    quote = "There are two people in this world, winners and losers, and I'm a loser - Anirudh Manimaran" ;
  }
  else if (num < 11 & num > 10){
    quote = "Hope is not a strategy - Team 2472"
  }
  else if (num < 10 & num > 9){
    quote = "If you trust in yourself. . .and believe in your dreams. . .and follow your star. . . you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy. - Terry Pratchett"
  }
  else if (num < 9 & num > 8) {
    quote = "Ewwwww do you have leprosy? - Adam Zhu";
  }
  else if (num < 8 & num > 7) {
    quote = "I'm gonna quit the team if we win spirit award - Micah Steward";
  }
  else if (num < 7 & num > 6) {
    quote = "Don't quote me on that - Chetas Aduri";
  }
  else if (num < 6 & num > 5) {
    quote = "I know a bit about leading, I'm the drop leader of my Fortnite squad - Owen McCormick";
  }
  else if (num < 5 & num > 4) {
    quote = "The bad news is time flies. The good news is you're the pilot. -  Michael Altshuler";
  }
  else if (num < 4 & num > 3) {
    quote = "Nothing is impossible. The word itself says 'I'm possible!' - Audrey Hepburn";
  }
  else if (num < 3 & num > 2) {
    quote = "f";
  }
  else if (num < 2 & num > 1) {
    quote = "you either die a cucumber or live long enough to see yourself become a carrot - Anton Ludes-Bedell";
  }
  else if (num < 1 & num > 0) {
    quote = "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life. - Terry Pratchett";
  }
  else{
    quote = "idk how";
  }
  return quote + num;
}

function reset() {
  if (confirm(getQuote()) == true) {
    sessionStorage.removeItem("actionList");
    sessionStorage.removeItem("compressedList");
    sessionStorage.removeItem("extraData");
    window.location.href = "./index.html";
  }
}
