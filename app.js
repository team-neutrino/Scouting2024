var scorer = 0
var extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var blue1 = [3928,525];
var blue2 = [2207,676];
var blue3 = [3434,989];
var red1 = [4544,877];
var red2 = [8567,900];
var red3 = [989,8887];
var ipadID = sessionStorage.getItem("iPadId");
let savedComments = [];
var incmatchnumber = "1";
var matchSave = 0;
var scoutSave = "";
var OldCompressedList = [];
var OldExtraDataList = [];
var countt = [];
var curentAction = "";
var MakeqrExtraData = [];
var MakeqrCompList = [];
var rUsure = "";
var matchnum = 1;
var team = "";
var match = "";
var savescout = sessionStorage.getItem("scoutInitials");

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
  const backgroundColorWithAlpha = rgbaFromRgb(buttonBgColor, 0.5);
  console.log(backgroundColorWithAlpha);
  console.log(buttonBgColor);
  button.style.boxShadow = `0px 0px 100vh 10vw ${backgroundColorWithAlpha}`;

  // After 1 second, change the blur to the defualt blur
  setTimeout(() => {
    button.style.boxShadow = `0px 0px 0px rgba(0, 0, 0, 0)`;
  }, 1000);
  
  // After 3 seconds, remove both classes
  setTimeout(() => {
    button.removeAttribute('style');
  }, 2000);
  
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
  if(alliance == "Red Alliance") {
    document.getElementById('indexTable').style.backdropFilter = 'hue-rotate(170deg)';
  }
  if(alliance == "Blue Alliance") {
    document.getElementById('indexTable').style.backdropFilter = 'hue-rotate(40deg)';
  }
  extraData[4] = alliance;
  console.log(extraData);
}

function GO(iPadID,matchsaver,scoutsaver) {
  getBoxData();
  var message = "You need to add ";
  var allClear = 1;
  var team = document.getElementById("teamNum");
  var match = document.getElementById("matchNum");
  var scout = document.getElementById("scout");
  scoutSave = document.getElementById("scout").value;
  matchSave = document.getElementById("matchNum").value;
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
        //console.log(message);
      //  alert(message);
        allClear = 0;
        
        console.log(sessionStorage);

  }
  sessionStorage.setItem("iPadId",iPadID)
  sessionStorage.setItem("scoutInitials", scoutsaver)
  sessionStorage.setItem("matchNum", matchsaver)  
  actionList[0] = extraData[4];
  saveData();
  if (allClear == 1) {
        window.location.href = "./auton2.html";
  }
  //console.log(displaySavedData());

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
function pullIPadID() {
  document.getElementById("iPadIDarea").value = sessionStorage.getItem("iPadId");
  console.log(sessionStorage.getItem("matchNum"));
  incmatchnumber = parseInt(sessionStorage.getItem("matchNum"));
  savescout = sessionStorage.getItem("scoutInitials");
  console.log(incmatchnumber);
  document.getElementById("matchNum").value = incmatchnumber;
  document.getElementById("scout").value = savescout;
  //document.getElementById("iPadID").value = localStorage.getItem("iPadId");
}

function getQuote() {
  num = Math.floor(Math.random() * 13);
  console.log(num);
  switch (num){
    case 1: 
    quote = "If you trust in yourself. . .and believe in your dreams. . .and follow your star. . . you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy. - Terry Pratchett"
    break; 
    case 2: 
    quote = "I know a bit about leading, I'm the drop leader of my Fortnite squad - Owen McCormick"
    break;
    case 3:
    quote = "Don't quote me on that - Chetas Aduri"
    break;
    case 4:
    quote = "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life. - Matthias "
    break;
    case 5:
    quote = "There are two people in this world, winners and losers, and I'm a loser - Anirudh Manimaran"
    break;
    case 6:
    quote = "Ewwwww do you have leprosy? - Adam Zhu"
    break;
    case 7:
    quote = "I like Germany because Matthias is German - Chetas Aduri"
    break;
    case 8:
    quote = "I'm a Chinese crip - Mick Wu"
    case 9:
    quote = "I'm dyslexic today - Anton"
    break;
    case 10:
    quote = "you either die a cucumber or live long enough to see yourself become a carrot - Anton"
    break;
    case 11:
    quote = "f"
    break;
    case 12:
    quote = "When life gives you lemons, squirt them right into life's eyes - Logan"
    break;
    case 13:
    quote = "'Sun Tzu Quote' - Matthias"
    break;
    default: 
    quote ="idk"
    break;
  }
  return quote;
}

function reset() {
  if (confirm(getQuote()) == true) {
    sessionStorage.removeItem("actionList");
    sessionStorage.removeItem("compressedList");
    sessionStorage.removeItem("extraData");
    console.log('1: ', sessionStorage.getItem("matchNum"));
    incmatchnumber = parseInt(sessionStorage.getItem("matchNum"));
    console.log('2: ', incmatchnumber);
    savescout = sessionStorage.getItem("scoutInitials");
    incmatchnumber++; //increses the variable by one
    console.log('3: ', incmatchnumber);
    sessionStorage.setItem("matchNum", incmatchnumber);
    sessionStorage.setItem("scoutInitials", savescout)
    window.location.href = "./index.html";
  }
}


function setTeam(matchnumb, id) {
  
  var teamnumb = document.getElementById("teamNum");
  
   var ipadID = id
  
  matchnum = parseInt(matchnumb);
  
  if (blue1[0] != -12) {
    if (ipadID == 1) {
      
      document.getElementById("teamNum").value = blue1[matchnum - 1];
      console.log(blue1[matchnum - 1]);
    }
    if (ipadID == 2) {
      document.getElementById("teamNum").value = blue2[matchnum - 1];
      console.log(blue2[matchnum - 1]);
    }
    if (ipadID == 3) {
      document.getElementById("teamNum").value = blue3[matchnum - 1];
      console.log(blue3[matchnum - 1]);
    }
    if (ipadID == 4) {
      document.getElementById("teamNum").value = red1[matchnum - 1];
      console.log(red1[matchnum - 1]);
    }
    if (ipadID == 5) {
      document.getElementById("teamNum").value = red2[matchnum - 1];
      console.log(red2[matchnum - 1]);
    }
    if (ipadID == 6) {
      document.getElementById("teamNum").value = red3[matchnum - 1];
      console.log(red3[matchnum - 1]);
    }
  }
}

function setTeampull(matchnumb) {
  console.log("test")
  var teamnumb = document.getElementById("teamNum");
  
   var ipadID = sessionStorage.getItem("iPadId")
  
  matchnum = parseInt(matchnumb);
  
  if (blue1[0] != -12) {
    if (ipadID == 1) {
      console.log("testagain")
      document.getElementById("teamNum").value = blue1[matchnum - 1];
      console.log(blue1[matchnum - 1]);
    }
    if (ipadID == 2) {
      document.getElementById("teamNum").value = blue2[matchnum - 1];
      console.log(blue2[matchnum - 1]);
    }
    if (ipadID == 3) {
      document.getElementById("teamNum").value = blue3[matchnum - 1];
      console.log(blue3[matchnum - 1]);
    }
    if (ipadID == 4) {
      document.getElementById("teamNum").value = red1[matchnum - 1];
      console.log(red1[matchnum - 1]);
    }
    if (ipadID == 5) {
      document.getElementById("teamNum").value = red2[matchnum - 1];
      console.log(red2[matchnum - 1]);
    }
    if (ipadID == 6) {
      document.getElementById("teamNum").value = red3[matchnum - 1];
      console.log(red3[matchnum - 1]);
    }
  }
}



function saveQR() {
  var compSavename = "comp" + extraData[1];
  var EDsaveName = "ED" + extraData[1];
  localStorage.setItem(compSavename,JSON.stringify(compressedList));
  localStorage.setItem(EDsaveName,JSON.stringify(extraData));
}
