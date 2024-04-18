var scorer = 0
var extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var blue1 = [2122,
5285,
4655,
3572,
1923,
9462,
1577,
1540,
5484,
4907,
5822,
9586,
2468,
3928,
343,
3683,
6081,
9312,
2637,
5414,
971,
876,
4561,
1285,
324,
3005,
9478,
2638,
177,
5951,
1732,
7558,
4561,
2826,
424,
9692,
987,
1296,
1153,
177,
6147,
461,
1285,
1807,
2486,
987,
539,
5822,
9450,
1241,
3604,
3990,
9408,
1023,
461,
324,
9586,
9692,
2638,
2714,
2056,
9408,
1577,
4655,
6147,
6806,
2468,
5851,
876,
868,
9312,
4907,
3990,
424,
3572,
3018,
539,
1153,
9404,
1540,
868,
3322,
3464,
4096,
9692,
862,
5951,
4122,
7558,
4143,
3018,
2056,
987,
1577,
3467,
1540,
3604,
539,
1807,
5414,
2637,
4143,
1676,
6806,
4122,
3467,
2486,
2337,
1923,
5484,
5851,
176,
9450,
424,
9478,
9462,
2826,
829,
6147,
6806,
4907,
4096,
4143,
3005,
670];
var blue2 = [4561,
1676,
177,
2337,
5114,
5285,
7558,
9312,
3464,
2468,
324,
971,
4655,
5951,
670,
829,
461,
3604,
3464,
2056,
2826,
4907,
9408,
177,
5112,
3928,
176,
987,
9586,
670,
4907,
3928,
1296,
670,
245,
9312,
1023,
461,
324,
1676,
5951,
9462,
176,
868,
424,
2056,
9312,
9450,
6002,
3322,
5484,
5851,
1296,
4655,
3683,
548,
245,
3322,
2486,
9692,
3990,
6081,
5285,
5822,
2637,
245,
862,
7762,
9462,
971,
9404,
1296,
1241,
1577,
5114,
3683,
7762,
548,
8817,
5484,
324,
1023,
5112,
670,
3005,
6002,
5414,
9478,
7762,
1241,
2486,
1285,
4096,
1923,
177,
9692,
6806,
3005,
6081,
5114,
868,
343,
7762,
6147,
4561,
5285,
987,
1153,
1540,
3928,
1807,
3018,
8817,
9586,
1577,
5822,
2714,
4122,
5484,
3990,
3018,
876,
3604,
2122,
9408,];
var blue3 = [3928,
176,
5951,
6147,
1807,
4122,
548,
4143,
176,
7762,
8817,
2122,
5484,
987,
1732,
2486,
5114,
9462,
1807,
1577,
1285,
1153,
4143,
3464,
829,
1241,
539,
3683,
9450,
862,
829,
2714,
6002,
3018,
2637,
876,
2468,
2638,
6081,
2122,
3683,
3990,
5414,
1540,
4561,
971,
8817,
1923,
3467,
1676,
9404,
3464,
6147,
2337,
3005,
2826,
868,
1732,
4096,
539,
3604,
424,
6002,
3572,
343,
548,
4561,
1923,
9404,
3005,
5822,
9586,
9478,
4122,
9408,
1023,
5414,
5951,
343,
7558,
5851,
3572,
3467,
3322,
4907,
2638,
1732,
1676,
9404,
424,
324,
3572,
343,
2468,
3322,
2337,
4096,
4655,
876,
9478,
461,
3572,
3990,
9586,
245,
1285,
2714,
5112,
6806,
3322,
9408,
876,
9692,
5285,
862,
2637,
5114,
3464,
6081,
9312,
5112,
7558,
1153,
2056,
9450];
var red1 = [8817,
5112,
1296,
6002,
9404,
3322,
2637,
461,
3005,
245,
1023,
2826,
3990,
3467,
4655,
868,
177,
6147,
2468,
8817,
5484,
5822,
4655,
9408,
3018,
1296,
343,
5851,
4096,
6081,
8817,
9450,
343,
5822,
862,
2056,
539,
1923,
3572,
3322,
3464,
5112,
4122,
7762,
670,
3928,
2638,
5285,
5114,
2714,
9478,
6081,
2122,
7762,
1285,
1540,
5112,
1807,
1241,
5851,
5114,
9312,
1023,
176,
4122,
3683,
5414,
5112,
3464,
1676,
2337,
7558,
829,
2486,
6806,
2637,
3928,
4561,
876,
9462,
176,
2486,
971,
2337,
177,
9586,
5285,
5114,
829,
548,
8817,
987,
245,
1153,
245,
3683,
2714,
2122,
176,
548,
6002,
5951,
424,
2056,
1241,
1577,
2122,
862,
1732,
670,
3604,
971,
1296,
9404,
1241,
4561,
7762,
6002,
1676,
1807,
3322,
548,
1732,
1023,
324];
var red2 = [424,
3683,
8817,
9478,
1241,
3990,
9692,
1676,
4561,
3018,
4096,
1153,
548,
9408,
2638,
9450,
539,
6002,
1676,
3572,
3990,
424,
3322,
868,
2122,
1540,
3467,
4122,
1732,
7558,
5114,
2337,
5851,
4143,
1923,
2486,
5484,
5414,
9404,
548,
1732,
4096,
6806,
4655,
4143,
862,
1153,
343,
3018,
1732,
4096,
3572,
1577,
6806,
2468,
4122,
876,
3467,
1153,
829,
539,
2714,
4143,
829,
1285,
2826,
1540,
5951,
9692,
2337,
5951,
1807,
4143,
5822,
2638,
2714,
6002,
9450,
2826,
2122,
2468,
3604,
3604,
2056,
1923,
1807,
2637,
1023,
343,
868,
461,
5112,
6081,
9462,
6147,
9408,
4907,
862,
2826,
3464,
9404,
2468,
2638,
2637,
9586,
829,
4907,
6147,
6081,
9312,
3005,
7558,
9478,
1285,
876,
987,
3572,
1923,
5414,
343,
539,
5851,
176,
3467,
971];
var red3 = [1807,
7762,
3683,
424,
5414,
862,
6806,
3604,
2714,
2056,
1285,
5851,
4122,
876,
5112,
1296,
2337,
548,
245,
2714,
9692,
1023,
1923,
1153,
6806,
5285,
2486,
9404,
7762,
868,
9462,
2638,
971,
3005,
3604,
5285,
9586,
2826,
3467,
9478,
1241,
9408,
4907,
1577,
5114,
829,
2637,
177,
1540,
6002,
3018,
4907,
176,
9462,
7558,
5951,
5414,
987,
3018,
670,
9450,
9478,
177,
461,
670,
3928,
3467,
5484,
2122,
8817,
971,
324,
987,
1732,
5285,
6081,
1285,
461,
1676,
245,
9312,
7558,
4655,
1296,
6147,
5822,
3990,
3928,
4561,
5484,
3464,
1296,
3005,
670,
5851,
9586,
971,
9312,
9450,
5822,
2056,
9462,
324,
4143,
9692,
4096,
4655,
2826,
539,
3683,
1023,
177,
2468,
461,
324,
868,
862,
2337,
2486,
1241,
1577,
1540,
3928,
2638,
245];
var ipadID = localStorage.getItem("iPadId");
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
let activeAnimations = [];
let nonDblClick = true;

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
  var compressed8 = compressedList.indexOf(10);



  if (compressed7 > -1) {
    compressedList.splice(compressed7, 1);
  }
  if (compressed8 > -1) {
    compressedList.splice(compressed8, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceHarmony() {
  var index9 = actionList.indexOf("Harmony");
  var index8 = actionList.indexOf("Failed Climb");


  if (index9 > -1) {
    actionList.splice(index9, 1);
  }
  if (index8 > -1) {
    actionList.splice(index8, 1);
  }



  var compressed9 = compressedList.indexOf(15);
  var compressed8 = compressedList.indexOf(10);



  if (compressed9 > -1) {
    compressedList.splice(compressed9, 1);
  }
  if (compressed8 > -1) {
    compressedList.splice(compressed8, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceLeave() {
  var leaveAction = actionList.indexOf("Leave");



  if (leaveAction > -1) {
    actionList.splice(leaveAction, 1);
  }
  var leaveCompressed = compressedList.indexOf(14);

  if (leaveCompressed > -1) {
    compressedList.splice(leaveCompressed, 1);
  }

  console.log(actionList);
  updateLog();

}

function replaceDisabled() {
  var disabledAction = actionList.indexOf("Disabled");



  if (disabledAction > -1) {
    actionList.splice(disabledAction, 1);
  }
  var disabledCompressed = compressedList.indexOf(13);

  if (disabledCompressed > -1) {
    compressedList.splice(disabledCompressed, 1);
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
  if(!activeAnimations.includes(id)) {
    activeAnimations.push(id);
  const button = document.getElementById(id);
  const buttonBgColor = window.getComputedStyle(button).getPropertyValue('background-color');
  const backgroundColorWithAlpha = rgbaFromRgb(buttonBgColor, 0.75);
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
    activeAnimations.splice(activeAnimations.indexOf(id), 1);
  }, 2000);
  
}
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
    document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'hue-rotate(170deg)';
    document.getElementById('indexTable').style['backdrop-filter'] = 'hue-rotate(170deg)';
  }
  if(alliance == "Blue Alliance") {
    document.getElementById('indexTable').style['-webkit-backdrop-filter'] = 'hue-rotate(40deg)';
    document.getElementById('indexTable').style['backdrop-filter'] = 'hue-rotate(40deg)';
  }
  extraData[4] = alliance;
  console.log(extraData);
}

function GO(iPadID,matchsaver,scoutsaver, id) {
  getBoxData();
  var message = "You need to add ";
  var allClear = 1;
  var team = document.getElementById("teamNum");
  var match = document.getElementById("matchNum");
  var scout = document.getElementById("scout");
  scoutSave = document.getElementById("scout").value;
  matchSave = document.getElementById("matchNum").value;
  team.removeAttribute('style');
  match.removeAttribute('style');
  scout.removeAttribute('style');
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
  setTimeout(() => {
    if(nonDblClick) {
      if (allClear == 1) {
        indexOut("auton2");
      }
    }
  }, 200);
  
  //console.log(displaySavedData());
}

function skipToQr(iPadID, scoutsaver, matchsaver) {
  nonDblClick = false;
  getBoxData();
  sessionStorage.setItem("iPadId",iPadID);
  sessionStorage.setItem("scoutInitials", scoutsaver);
  sessionStorage.setItem("matchNum", matchsaver);  
  saveQR();
  indexOut("qr");
}

/* function indexOut(id) {
  let team = document.getElementById('teamNum');
  let scout = document.getElementById('scout');
  let match = document.getElementById('matchNum');
  team.style.textShadow = "0px 0px 2vh white";
  team.style.boxShadow = "0px 0px 200vh 2vw white";
  team.style.width = "9vw";
  setTimeout (() => {
    team.style.fontSize = "0vh";
    team.style.width = "0vw";
    team.style.opacity = "0";
  }, 1500);
  setTimeout(() => {
  scout.style.textShadow = "0px 0px 2vh white";
  scout.style.width = "9vw";
  scout.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    scout.style.fontSize = "0vh";
    scout.style.width = "0vw";
    scout.style.opacity = "0";
  }, 1500);
  }, 200);
  setTimeout(() => {
  match.style.textShadow = "0px 0px 2vh white";
  match.style.width = "9vw";
  match.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    match.style.fontSize = "0vh";
    match.style.width = "0vw";
    match.style.opacity = "0";
  }, 1500);
  }, 400);
  setTimeout(() => {
  let button = document.getElementById(id);
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
  document.getElementById('iPadIDarea').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('iPadIDarea').style.opacity = "0";
  document.getElementById('row1').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row2').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row3').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row4').style.transition = "opacity 0.5s ease-in-out";
  
  for(let i = 4; i > 0 ; i--) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "0";
    }, i);
    }
    setTimeout(() => {
      button.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      
      document.getElementById('body').style.background = "black";
    }, 450);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 800);
  }, 2000);
} */

function flip() {
  document.getElementById('flit').style.transform
}
function indexOut(page) {
  let team = document.getElementById('teamNum');
  let scout = document.getElementById('scout');
  let match = document.getElementById('matchNum');
  document.getElementById('indexTable').setAttribute("onclick", "window.location.href ='./" + page + ".html'");
  team.style.textShadow = "0px 0px 2vh white";
  team.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    team.style.fontSize = "0vh";
    team.style.width = "0vw";
    team.style.opacity = "0";
  }, 250);
  setTimeout(() => {
  scout.style.textShadow = "0px 0px 2vh white";
  scout.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    scout.style.fontSize = "0vh";
    scout.style.width = "0vw";
    scout.style.opacity = "0";
  }, 250);
  }, 150);
  setTimeout(() => {
  match.style.textShadow = "0px 0px 2vh white";
  match.style.boxShadow = "0px 0px 200vh 2vw white";
  setTimeout (() => {
    match.style.fontSize = "0vh";
    match.style.width = "0vw";
    match.style.opacity = "0";
  }, 250);
  }, 300);
  setTimeout(() => {
  let button = document.getElementById('goButton');
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
  document.getElementById('iPadIDarea').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('iPadIDarea').style.opacity = "0";
  document.getElementById('regenMatch').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('regenMatch').style.opacity = "0";
  document.getElementById('row1').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row2').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row3').style.transition = "opacity 0.5s ease-in-out";
  document.getElementById('row4').style.transition = "opacity 0.5s ease-in-out";
  
  for(let i = 4; i > 0 ; i--) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "0";
    }, i);
    }
    setTimeout(() => {
      button.style.opacity = "0";
    }, 300);
    setTimeout(() => {
      document.getElementById('fadeOnTrans1').style.opacity = "0";
      document.getElementById('fadeOnTrans2').style.opacity = "0";
      document.getElementById('body').style.background = "black";
    }, 450);
    setTimeout(() => {
      window.location.href = "./" + page + ".html";
    }, 800);
  }, 500);
} 

function qrOut(id) {
  let button = document.getElementById(id);
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
 setTimeout(() => {
   document.getElementById('tableQR').style.opacity = '0';
   document.getElementById('body').style.background = 'black';
    button.style.opacity = "0";
  }, 1200); 
  
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
  if(extraData[0] !== undefined) {
    document.getElementById('teamNumberBox').value = extraData[0];
  }
  if(extraData[1] !== undefined) {
    document.getElementById('matchNumberBox').value = extraData[1];
  }
  if(extraData[3] !== undefined) {
  document.getElementById('coment').value = extraData[3];
  }
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
    document.getElementById('teamLog1').style.border = '5px solid red';
    setTimeout(() => {
      document.getElementById('teamLog1').style.border = '3px solid white';
    document.getElementById('teamLog1').style.transition = 'border 1s ease-in-out';
    }, 100);
    setTimeout(() => {
      document.getElementById('teamLog1').removeAttribute('style');
    }, 1100);
    compressedList.pop();
    updateLog();
  } else {
    console.log("Nothing to undo");
  }
}
function pullIPadID() {
  document.getElementById("iPadIDarea").value = localStorage.getItem("iPadId");
  console.log(sessionStorage.getItem("matchNum"));
  incmatchnumber = parseInt(sessionStorage.getItem("matchNum"));
  savescout = sessionStorage.getItem("scoutInitials");
  console.log(incmatchnumber);
  if (isNaN(incmatchnumber)) {
    console.log("its NaN :(");
    incmatchnumber = 1;
  }
  document.getElementById("matchNum").value = incmatchnumber;
  document.getElementById("scout").value = savescout;
}


/*function reset(id) {
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
    sessionStorage.setItem("scoutInitials", savescout); 
    qrOut(id);
}
}
*/

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
  
   var ipadID = localStorage.getItem("iPadId")
  
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

function loadTransition(times, page) {
  if(sessionStorage.getItem("fastLoad") == 'true') {
    for(let i = 1; i < times+1; i++) {
      document.getElementById('row' + i).style.transition = "none";
      document.getElementById('row' + i).style.opacity = "1";
      document.getElementById('row' + i).style.transform = "scale(1)";
    }
    sessionStorage.setItem("fastLoad", false);
  } else { 
  for(let i = 1; i < times+1; i++) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "1";
      document.getElementById('row' + i).style.transform = "scale(1)";
    }, i*10);
    }
}
}

function leaveTransition(times, page) {
  setTimeout(() => {
      document.getElementById('body').setAttribute("onclick", "skipTransition('" + page + "');");
    }, 10); 
  let k = times;
  for(let i = 1; i < times+1; i++) {
    setTimeout(() => {
      document.getElementById('row' + k).style.transition = "opacity 1s ease-in-out, transform 0.5s cubic-bezier(.5,0,1,.24)"
      document.getElementById('row' + k).style.opacity = "0";
      document.getElementById('row' + k).style.transform = "scale(0.9)";
      k--;
    },i*1);
    }
    setTimeout(() => {
      window.location.href = window.location.href = './' + page + '.html';
    }, times*100); 
    
}
function skipTransition(page) {
  window.location.href = window.location.href = './' + page + '.html';
  sessionStorage.setItem("fastLoad", true);
}




