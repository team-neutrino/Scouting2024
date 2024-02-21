var scorer = 0
var extraData = Array(5).fill("");
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
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
: Called everytime a button is pushed.
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



// ---- DIRECT BUTTON FUNCTIONS ---
function mobility() {
  var mob = actionList.indexOf("Mobility");
  var comMob = compressedList.indexOf(11);

  if (mob > -1) {
    actionList.splice(mob, 1);
  }
  if (comMob > -1) {
    compressedList.splice(comMob, 1);
  }
}

function replace() {
  var index1 = actionList.indexOf("Docked (T)");
  var index2 = actionList.indexOf("Docked & Engaged (T)");
  var index3 = actionList.indexOf("Parked (T)");
  

  if (index1 > -1) {
    actionList.splice(index1, 1);
  }
  if (index2 > -1) {
    actionList.splice(index2, 1);
  }
  if (index3 > -1) {
    actionList.splice(index3, 1);
  }
  

  
  var compressed2 = compressedList.indexOf(19);
  var compressed3 = compressedList.indexOf(20);
  var compressed1 = compressedList.indexOf(21);

  
  
  if (compressed2 > -1) {
    compressedList.splice(compressed2, 1);
  }
  if (compressed3 > -1) {
    compressedList.splice(compressed3, 1);
  }
  if (compressed1 > -1) {
    compressedList.splice(compressed1, 1);
  }

  console.log(actionList);
  updateLog();
}

function score(){
  var Foul =  compressedList.filter(item => item === 1).length;
  var AutonSpeaker = compressedList.filter(item => item === 2).length;
  var AutonSpeakerMiss = compressedList.filter(item => item === 3).length;
  var AutonAmp = compressedList.filter(item => item === 4).length;
  var AutonAmpMiss = compressedList.filter(item => item === 5).length;
  var TeleopSpeaker = compressedList.filter(item => item === 6).length;
  var TeleopSpeakerMiss =  compressedList.filter(item => item === 7).length;
  var TeleopAmp = compressedList.filter(item => item === 8).length;
  var TeleopAmpMiss = compressedList.filter(item => item === 9).length;
  var Trap = compressedList.filter(item => item === 10).length;
  var Climb = compressedList.filter(item => item === 11).length;
  var FailedClimb =  compressedList.filter(item => item === 12).length;
  var Disabled =  compressedList.filter(item => item === 13).length;
  var Defence = compressedList.filter(item => item === 14).length;

  var autonScore = (2 * AutonAmp + 5 * AutonSpeaker)
  var teleopScore = (TeleopAmp + 3 * TeleopSpeaker)
  var endgameScore = (5 * Trap) + (3 * Climb)
  var scorer =  autonScore + teleopScore + endgame;
document.getElementById("score").value = scorer;
console.log(scorer);
}

function failedDocked() {
  var index7 = actionList.indexOf("Docked (T)");
  var index8 = actionList.indexOf("Docked & Engaged (T)");
  var index9 = actionList.indexOf("Failed to Dock (T)");
  

  if (index7 > -1) {
    actionList.splice(index7, 1);
  }
  if (index8 > -1) {
    actionList.splice(index8, 1);
  }
  if (index9 > -1) {
    actionList.splice(index9, 1);
  }
  

  
  var compressed7 = compressedList.indexOf(18);
  var compressed8 = compressedList.indexOf(20);
  var compressed9 = compressedList.indexOf(21);

  
  
  if (compressed7 > -1) {
    compressedList.splice(compressed7, 1);
  }
  if (compressed7 > -1) {
    compressedList.splice(compressed8, 1);
  }
  if (compressed9 > -1) {
    compressedList.splice(compressed9, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceAuton() {
  var index5 = actionList.indexOf("Docked (A)");
  var index6 = actionList.indexOf("Docked & Engaged (A)");
  var index10 = actionList.indexOf("Failed to Dock (A)")
  var compressed5 = compressedList.indexOf(3);
  var compressed6 = compressedList.indexOf(4);
  var compressed10 = compressedList.indexOf(22);

  if (index5 > -1) {
    actionList.splice(index5, 1);
  }
  if (index6 > -1) {
    actionList.splice(index6, 1);
  }
  if (index10 > -1) {
    actionList.splice(index10, 1);
  }

  if (compressed5 > -1) {
    compressedList.splice(compressed5, 1);
  }
  if (compressed6 > -1) {
    compressedList.splice(compressed6, 1);
  }
  if (compressed10 > -1) {
    compressedList.splice(compressed10, 1);
  }
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
//the code below is jackson testing something with grouping consecutitive button presses, save please :) 
/* function addActionClasic(action, number) { //Used for buttons that have a data validation script
    actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
    compressedList.push(number); //Add it to the compressedList (QR Code)//
    updateLog(); //Update what the scouter sees on the app (actionList)
}
function addAction(action, number) {  //The New one
    curentAction = action; //Sets the curent action as a variable to be refrenced in the theSame function
    const result = actionList.filter(theSame); //This sorts the array into a "copy array" with only values that equal curentAction
    var times = result.length + 1; //Get the number of times the action shows up by getting the length of the results
    var push = action + " X" + times; //Makes the text the scouter sees
    actionList.push(push); //Add it to the actionList (what the scouter sees on the app)
    compressedList.push(number); //Add it to the compressedList (QR Code)//
    updateLog(); //Update what the scouter sees on the app (actionList)
}
function theSame(action) {
    return action.includes(curentAction); //Checks if the curent action matches a value in actionList
} */ 
function addAction(action, number) { //Used for buttons that have a data validation script
    actionList.push(action); //Add it to the actionList (what the scouter sees on the app)
    compressedList.push(number); //Add it to the compressedList (QR Code)//
    updateLog(); //Update what the scouter sees on the app (actionList)
}


function addIndexInfo(action) {
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

function saveArray() {
  sessionStorage.setItem("ActionList", JSON.stringify(actionList));
  sessionStorage.setItem("qrlist", JSON.stringify(compressedList));
  sessionStorage.setItem("extraData", JSON.stringify(extraData));
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
function pullArray() {
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

}
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
function secret() {
  document.getElementById("auton").style.opacity = "0";
  document.getElementById("anton").style.opacity = "100";
  sessionStorage.setItem("ActionList", JSON.stringify(actionList));
  sessionStorage.setItem("qrlist", JSON.stringify(compressedList));
  sessionStorage.setItem("extraData", JSON.stringify(extraData));
}

function commentBox() {
  extraData[3] = document.getElementById("comments").value;
  console.log(extraData);
}

function secret() {
  document.getElementById("auton").style.opacity = "0";
}

function reset() {
  if (confirm("If you could, taking a screenshot would be the right thing to do! :)")) {
    sessionStorage.removeItem("ActionList");
    sessionStorage.removeItem("qrlist");
    incmatchnumber++
    sessionStorage.setItem("matchnumber", incmatchnumber);
    window.location.href = "./Index mockup.html";
  }
}

function GO(team, match, scout) {
  var go = true;
  if (team == "" || team == "undefined") {
    alert("Enter a team number!");
    go = false;
  }
  if (match == "") {
    alert("Enter a match number!");
    go = false;
  }
  if (scout == "") {
    alert("Enter you initials!");
    go = false;
  }
  if (go) {
    extraData[0] = team;
    extraData[1] = match;
    extraData[2] = scout;
    incmatchnumber = match;
    sessionStorage.setItem("ScoutInitials", scout);
    sessionStorage.setItem("matchnumber", incmatchnumber);
    window.location.href = "./newAuton.html";
  }
}

function redall() {
  document.querySelector("body").style.backgroundColor = "red";
}
function blueall() {
  document.querySelector("body").style.backgroundColor = "blue";
}
function setipadid(id) {
    if (rUsure) {
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
        if (rUsure ==  "y e s") {
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
    localStorage.setItem(compSavename,JSON.stringify(compressedList));
    localStorage.setItem(EDsaveName,JSON.stringify(extraData));
}
