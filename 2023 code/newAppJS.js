var scorer = 0
var extraData = Array(5).fill("");
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var blue1 = [4201,
  5460,
  203,
  2412,
  6081,
  3314,
  2073,
  4946,
  230,
  870,
  2883,
  3414,
  4613,
  4907,
  3314,
  5216,
  5724,
  6081,
  2264,
  3641,
  2883,
  9079,
  2713,
  2412,
  8575,
  2590,
  5406,
  1477,
  7769,
  2659,
  1731,
  6989,
  3875,
  2412,
  5712,
  144,
  4613,
  3647,
  3082,
  5724,
  5472,
  125,
  4206,
  2713,
  321,
  6081,
  2445,
  144,
  2363,
  1038,
  4091,
  3390,
  100,
  9136,
  5472,
  5216,
  20,
  1922,
  3647,
  4795,
  2659,
  2767,
  3035,
  1781,
  3082,
  100,
  5460,
  2333,
  9280,
  4226,
  2438,
  3928,
  2073,
  321,
  2363,
  5712,
  2869,
  1138,
  100,
  6510,
  6806,
  3928,
  2054,
  5216,
  7153,
  1533,
  1781,
  4201,
  3035,
  9000,
  7769,
  3414,
  1731,
  9136,
  125,
  230,
  6081,
  4272,
  870,
  5422,
  3647,
  9280,
  203,
  2264,
  2054,
  7153,
  2767,
  5472,
  2590,
  7769,
  3527,
  9280,
  9079,
  6838,
  9293,
  1533,
  1511,
  9287,
  3928,
  2486,
  4226,
  695,
  2667,
  3314,
  321,
  20,
  6424,
  5422,
  1477,
  2713];
var blue2 = [1138,
  9136,
  2054,
  1325,
  4907,
  5712,
  5406,
  8575,
  1511,
  1038,
  2363,
  6838,
  2486,
  5460,
  2767,
  2869,
  5472,
  5406,
  4226,
  4946,
  3875,
  870,
  1511,
  3390,
  3082,
  2491,
  2333,
  2438,
  2264,
  2073,
  4201,
  2667,
  1325,
  6806,
  2445,
  321,
  1038,
  4907,
  1781,
  5460,
  4201,
  7769,
  4946,
  6838,
  6989,
  4795,
  4272,
  1922,
  9000,
  1138,
  3035,
  5712,
  5422,
  1731,
  695,
  5724,
  2412,
  2590,
  144,
  4272,
  2363,
  125,
  2073,
  9287,
  3527,
  5724,
  1731,
  1710,
  8575,
  5406,
  1533,
  3390,
  9135,
  870,
  2445,
  9079,
  6081,
  1922,
  3647,
  3641,
  6424,
  9135,
  2333,
  3527,
  203,
  4272,
  4091,
  5724,
  3875,
  3314,
  1138,
  2054,
  2667,
  695,
  2445,
  3527,
  4206,
  3035,
  9000,
  4946,
  4795,
  2363,
  8575,
  3390,
  9287,
  2659,
  5712,
  4613,
  4091,
  1781,
  3314,
  230,
  100,
  1710,
  20,
  203,
  2363,
  3414,
  9136,
  2767,
  4613,
  9079,
  3641,
  7153,
  3035,
  9000,
  1922,
  9135,
  2333,
  125];
var blue3 = [9287,
  2869,
  1477,
  4272,
  2333,
  9293,
  4206,
  2491,
  695,
  3641,
  3082,
  6806,
  20,
  1922,
  1477,
  203,
  4206,
  2054,
  230,
  6989,
  9000,
  6510,
  3647,
  4613,
  4795,
  321,
  203,
  125,
  7153,
  6424,
  4946,
  1138,
  4091,
  4226,
  9280,
  9135,
  1922,
  3414,
  20,
  9293,
  2667,
  3314,
  2264,
  5422,
  9280,
  2883,
  2438,
  230,
  2869,
  3082,
  9079,
  2486,
  1710,
  321,
  6510,
  2883,
  2491,
  2713,
  870,
  1138,
  1533,
  6838,
  9000,
  2445,
  2486,
  9136,
  6806,
  1325,
  3647,
  4201,
  3414,
  1477,
  3875,
  4091,
  1038,
  9287,
  6838,
  2659,
  9293,
  1710,
  2713,
  6989,
  2667,
  1731,
  2412,
  2767,
  2659,
  6081,
  1038,
  2491,
  3390,
  6510,
  144,
  6424,
  1533,
  3928,
  2659,
  1710,
  2486,
  5216,
  9079,
  5460,
  1511,
  9293,
  2438,
  2869,
  3928,
  6424,
  4946,
  4272,
  2412,
  1325,
  8575,
  4907,
  3875,
  5422,
  9135,
  5406,
  2590,
  1781,
  5724,
  6989,
  1325,
  5472,
  2438,
  7769,
  4201,
  4795,
  2264,
  5712];
var red1 = [125,
  2264,
  1731,
  9135,
  3875,
  9000,
  1781,
  1533,
  3390,
  7769,
  4091,
  3035,
  2667,
  4272,
  1710,
  9135,
  1325,
  1533,
  695,
  6424,
  3414,
  2363,
  9287,
  5712,
  6806,
  1038,
  3314,
  9293,
  5216,
  1710,
  4272,
  9136,
  2767,
  9079,
  6838,
  3641,
  4795,
  3527,
  3390,
  7153,
  2333,
  1325,
  3875,
  870,
  1511,
  695,
  2491,
  4907,
  5406,
  3414,
  9135,
  9287,
  2667,
  3928,
  6806,
  2054,
  3641,
  8575,
  6989,
  4091,
  2438,
  230,
  4946,
  9135,
  203,
  2883,
  2590,
  1511,
  6424,
  6989,
  4206,
  2491,
  144,
  3527,
  4946,
  4907,
  9000,
  2486,
  9136,
  4613,
  1477,
  2438,
  125,
  2445,
  1325,
  3082,
  4907,
  1922,
  5422,
  2264,
  6838,
  4226,
  2438,
  7153,
  3641,
  2869,
  20,
  5712,
  1325,
  1922,
  3082,
  2073,
  3875,
  1038,
  6806,
  6510,
  5406,
  2491,
  2486,
  5724,
  2073,
  5460,
  2333,
  4795,
  1138,
  4201,
  9000,
  2445,
  4946,
  6510,
  4206,
  2659,
  8575,
  870,
  2412,
  1710,
  2869,
  9293,
  1138,
  1731];
var red2 = [1710,
  4795,
  5472,
  2659,
  2438,
  321,
  3647,
  6510,
  2590,
  3928,
  6989,
  144,
  2713,
  125,
  2438,
  9280,
  5422,
  9293,
  7769,
  7153,
  2659,
  100,
  2667,
  144,
  2486,
  6838,
  4206,
  695,
  6081,
  3928,
  100,
  6510,
  2713,
  1511,
  2883,
  2491,
  1533,
  2590,
  3035,
  3928,
  5216,
  6510,
  2412,
  2054,
  6806,
  203,
  3647,
  20,
  8575,
  1781,
  6424,
  1477,
  5460,
  1325,
  9280,
  4613,
  4201,
  9293,
  2869,
  6424,
  3390,
  9079,
  1477,
  6081,
  2264,
  20,
  3641,
  9293,
  2412,
  5472,
  7769,
  4795,
  7153,
  2264,
  2767,
  5422,
  3082,
  3314,
  4226,
  230,
  2883,
  20,
  3414,
  695,
  2590,
  870,
  2869,
  321,
  2486,
  9280,
  5460,
  1477,
  2883,
  2333,
  5472,
  9287,
  2767,
  6989,
  1781,
  4091,
  5724,
  2713,
  6838,
  4201,
  9136,
  4206,
  2667,
  3414,
  4226,
  1477,
  2883,
  3082,
  1038,
  1731,
  5216,
  3647,
  1922,
  2491,
  144,
  4272,
  3527,
  2054,
  2073,
  4907,
  5216,
  6806,
  3875,
  230,
  1533,
  1511];
var red3 = [9280,
  2767,
  1922,
  3527,
  5422,
  6424,
  5216,
  5724,
  2445,
  4226,
  7153,
  100,
  9079,
  9136,
  4201,
  2333,
  1138,
  3527,
  2073,
  1781,
  3928,
  1731,
  3035,
  4091,
  2445,
  20,
  5460,
  2869,
  5472,
  5724,
  230,
  9000,
  2054,
  5422,
  870,
  2486,
  9287,
  2363,
  8575,
  1731,
  2659,
  100,
  1710,
  9136,
  2767,
  3641,
  4613,
  4226,
  2590,
  3527,
  1533,
  2073,
  7153,
  4206,
  3875,
  1511,
  2333,
  7769,
  1038,
  5406,
  4226,
  3414,
  4907,
  3314,
  5712,
  695,
  4613,
  6510,
  2054,
  2713,
  230,
  5216,
  125,
  2667,
  203,
  1781,
  4272,
  3035,
  5472,
  5406,
  4206,
  8575,
  4795,
  144,
  9287,
  2073,
  1511,
  5712,
  2363,
  9079,
  4946,
  9135,
  5406,
  4613,
  2412,
  6806,
  100,
  2590,
  2491,
  3314,
  7769,
  321,
  1138,
  4907,
  3641,
  2445,
  695,
  6081,
  125,
  144,
  6989,
  3035,
  3390,
  2713,
  870,
  321,
  2264,
  4091,
  6081,
  2883,
  9280,
  5460,
  6838,
  3390,
  100,
  203,
  3082,
  2363,
  3647,
  1038];
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
 var DockedA = compressedList.filter(item => item === 3).length;
 var DandEA = compressedList.filter(item => item === 4).length;
 var ConeHA = compressedList.filter(item => item === 5).length;
 var ConeMA = compressedList.filter(item => item === 6).length;
 var ConeLA = compressedList.filter(item => item === 7).length;
 var CubeHA =  compressedList.filter(item => item === 8).length;
 var CubeMA = compressedList.filter(item => item === 9).length;
 var CubeLA = compressedList.filter(item => item === 10).length;
 var Mobility = compressedList.filter(item => item === 11).length;
 var ConeHT = compressedList.filter(item => item === 12).length;
 var ConeMT =  compressedList.filter(item => item === 13).length;
 var ConeLT =  compressedList.filter(item => item === 14).length;
 var CubeHT =  compressedList.filter(item => item === 15).length;
 var CubeMT =  compressedList.filter(item => item === 16).length;
 var CubeLT =  compressedList.filter(item => item === 17).length;
 var Park =  compressedList.filter(item => item === 19).length;
 var DockedT =  compressedList.filter(item => item === 20).length;
 var DandET =  compressedList.filter(item => item === 21).length;
var Foul =  compressedList.filter(item => item === 1).length;
  var TFoul =  compressedList.filter(item => item === 2).length;
  

  var scorer = 8*DockedA + 12*DandEA + 6*(ConeHA+CubeHA+DockedT) + 4*(ConeMA+CubeMA) + 3*(ConeLA+CubeLA+ConeMT+CubeMT+Mobility)
   + 5*(ConeHT+CubeHT) + 2*(ConeLT+CubeLT+Park) + 10*DandET - 5*Foul - 12*TFoul;
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
function replaceGrid() {
var gridfull = actionList.indexOf("Grid Full");
var gridcompressed = compressedList.indexOf(23);
if (gridfull > -1) {
  actionList.splice(gridfull, 1);
}
if (gridcompressed > -1) {
  compressedList.splice(gridcompressed, 1);
}


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

function addAnton(action) {
  document.getElementById("auton").style.opacity = "0";
  document.getElementById("anton").style.opacity = "100";
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
  if (go == true) {
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
  document.querySelector(".grid-container").style.backgroundColor = "red";
}
function blueall() {
  document.querySelector(".grid-container").style.backgroundColor = "blue";
}
function setipadid(id) {
    if (rUsure ==  true) {
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
