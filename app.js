var scorer = 0
var extraData = ['', '', '', '', 'red']; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
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
  const backgroundColorWithAlpha = rgbaFromRgb(buttonBgColor, 0.125);
  console.log(backgroundColorWithAlpha);
  console.log(buttonBgColor);
  // Add box shadow
  button.classList.add('box-shadow');
  button.style.boxShadow = `0px 0px 1000vh 50vw ${backgroundColorWithAlpha}`;

  // After 1 second, change the blur to the defualt blur
  setTimeout(() => {
    button.removeAttribute('style')
  }, 1000);

  // After 3 seconds, remove both classes
  setTimeout(() => {
    button.classList.remove('box-shadow');
  }, 2000);
}

function addAction(action, number) { //Used for buttons that have a data validation script
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
  compressedList.push(number); //Add it to the compressedList (QR Code)//
  updateLog(); //Update what the scouter sees on the app (actionList)
  addButtonGlowEffect(action);
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
}

































































/* Stuff I aint gonna worry about rn */


// ---- DIRECT BUTTON FUNCTIONS ---
function leave() {
  var mob = actionList.indexOf("Leave");
  var comMob = compressedList.indexOf(20);

  if (mob > -1) {
    actionList.splice(mob, 1);
  }
  if (comMob > -1) {
    compressedList.splice(comMob, 1);
  }
}



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
function Defense() {
  var defender = actionList.indexOf("Defense");
  var defendercompressed = compressedList.indexOf(16);
  if (defender > -1) {
    actionList.splice(defender, 1);
  }
  if (defendercompressed > -1) {
    compressedList.splice(defendercompressed, 1);
  }


}



function pullArrayEnd() {
  var sessionString = sessionStorage.getItem("ActionList");
  var extradata = sessionStorage.getItem("extraData");
  var qrstuff = sessionStorage.getItem("qrlist");
  actionList = JSON.parse(sessionString);
  compressedList = JSON.parse(qrstuff);
  extraData = JSON.parse(extradata);
  console.log(actionList);
  console.log(compressedList);
  console.log(extradata);
  updateLog();
  document.getElementById("teamnum").value = extraData[0];
  document.getElementById("matchnum").value = extraData[1];
  document.getElementById("comments").value = extraData[3];

}
function placebets() {
  var red = actionList.indexOf("Red Alliance");
  var blue = actionList.indexOf("Blue Alliance");

  if (red > -1 || blue > -1) {
    actionList.splice(red && blue, 1);
  }

  console.log(actionList);
  //console.log(compressedList);
}


function setAlliance(action) {
  actionList.push(action); //Add it to the actionList (what the scouter sees on the app)

  extraData[4] = action; //Add it to the compressedList (QR Code)//


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

// --- INDIRECT BUTTON FUNCTIONS ---

function updateLog() {
  var logText = actionList.slice().reverse().join("\n");
  document.getElementById("teamLog1").value = logText;
}
//stuff for setting team number and match number values

function commentBox() {
  extraData[3] = document.getElementById("comments").value;
  console.log(extraData);
}

function pullArrayQR() {
  var sessionString = sessionStorage.getItem("ActionList");
  var extradata = sessionStorage.getItem("extraData");
  var qrstuff = sessionStorage.getItem("qrlist");
  actionList = JSON.parse(sessionString);
  compressedList = JSON.parse(qrstuff);
  extraData = JSON.parse(extradata);
  console.log(actionList);
  console.log(compressedList);
  console.log(extradata);
  document.getElementById("teamnum").value = extraData[0];
  document.getElementById("matchnum").value = extraData[1];
}

function commentBox() {
  extraData[3] = document.getElementById("comments").value;
  console.log(extraData);
}

function secret() {
  document.getElementById("auton").style.opacity = "0";
  document.getElementById("anton").style.opacity = "100";
}

function reset() {
  if (confirm("If you could, taking a screenshot would be the right thing to do! :)") == true) {
    sessionStorage.removeItem("ActionList");
    sessionStorage.removeItem("qrlist");
    incmatchnumber++ //increses the variable by one
    sessionStorage.setItem("matchnumber", incmatchnumber);
    window.location.href = "./index.html";
  }
}



function setipadid(id) {
  if (rUsure == true) {
    ipadID = id;
    console.log(ipadID);
    localStorage.setItem("iPadId", ipadID);
    setTeam(incmatchnumber);
    return;
  } else {
    alert("Better Luck Next Time!");
    document.getElementById("iPadID").value = localStorage.getItem("iPadId");
  }
}
function Warn() {
  rUsure = prompt("Do you want REALLY want to edit this?");
  if (rUsure == "y e s") {
    rUsure = true
  }
}
function pullIPadID() {
  document.getElementById("iPadID").value = sessionStorage.getItem("iPadId");
  console.log(incmatchnumber);
  document.getElementById("entermatch").value = incmatchnumber;
  setTeam(incmatchnumber);
  document.getElementById("enterscout").value = sessionStorage.getItem("ScoutInitials");
  document.getElementById("iPadID").value = localStorage.getItem("iPadId");
}
function setTeam(matchnum) {
  var teamum = document.getElementById("enterteam");
  var ipadID = localStorage.getItem("iPadId");
  if (blue1[0] != undefined) {
    if (ipadID == 1) {
      teamum.value = blue1[matchnum - 1];
      console.log(blue1[matchnum - 1]);
    }
    if (ipadID == 2) {
      teamum.value = blue2[matchnum - 1];
      console.log(blue2[matchnum - 1]);
    }
    if (ipadID == 3) {
      teamum.value = blue3[matchnum - 1];
      console.log(blue3[matchnum - 1]);
    }
    if (ipadID == 4) {
      teamum.value = red1[matchnum - 1];
      console.log(red1[matchnum - 1]);
    }
    if (ipadID == 5) {
      teamum.value = red2[matchnum - 1];
      console.log(red2[matchnum - 1]);
    }
    if (ipadID == 6) {
      teamum.value = red3[matchnum - 1];
      console.log(red3[matchnum - 1]);
    }
  }
}


function saveQR() {
  var compSavename = "comp" + extraData[1];
  var EDsaveName = "ED" + extraData[1];
  localStorage.setItem(compSavename, JSON.stringify(compressedList));
  localStorage.setItem(EDsaveName, JSON.stringify(extraData));
}

function redAlliance() {
  document.getElementById('redAlliance').style.boxShadow = "0px 0px 20vh 5vh red";
  document.getElementById('blueAlliance').style.boxShadow = "0px 0px 20vh 5vh transparent";
}
function blueAlliance() {
  document.getElementById('redAlliance').style.boxShadow = "0px 0px 20vh 5vh transparent";
  document.getElementById('blueAlliance').style.boxShadow = "0px 0px 20vh 5vh blue";
}
