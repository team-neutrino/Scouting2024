var scorer = 0
var extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'red']
var matchNumber = []; //Match Number
var teamNumber = []; //Team Number
var actionList = ["Red Alliance"]; //This is the list that populates the log with human friendly text.
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var comments = ""; //Comments Box
var blue1 = [4728,
  9579,
  5576,
  3723,
  7531,
  5041,
  9092,
  9639,
  4143,
  8821,
  4260,
  1156,
  2526,
  6805,
  5837,
  5041,
  1785,
  4143,
  9570,
  3928,
  8766,
  967,
  648,
  6424,
  5275,
  8298,
  7021,
  1625,
  6217,
  4646,
  8737,
  5935,
  4859,
  2654,
  9508,
  5837,
  7531,
  5935,
  7848,
  6419,
  4655,
  4859,
  8744,
  9061,
  4646,
  7541,
  9543,
  525,
  5837,
  7531,
  3723,
  6420,
  8824,
  6419,
  8822,
  9495,
  4607,
  167,
  6420,
  9508,
  5576,
  7309,
  2526,
  4624,
  4655,
  8744,
  4728,
  8298,
  1785,
  6217,
  6706,
  8821,
  648,
  9061,
  7309,
  1625,
  6706,
  5041,
  9570,
  2654,];
var blue2 = [1785,
  9543,
  4624,
  967,
  8821,
  6420,
  7541,
  5275,
  4646,
  5935,
  8766,
  9092,
  9639,
  6706,
  4607,
  2654,
  5275,
  525,
  1625,
  9508,
  2654,
  7541,
  6805,
  9639,
  6455,
  4859,
  4607,
  7531,
  9543,
  9570,
  167,
  4624,
  6455,
  9061,
  525,
  8737,
  6805,
  5041,
  6706,
  8822,
  8770,
  6217,
  967,
  4260,
  7021,
  8822,
  1625,
  9495,
  8744,
  3928,
  4624,
  5576,
  4655,
  6217,
  8766,
  7541,
  8737,
  3928,
  4260,
  9061,
  1156,
  8824,
  2847,
  9092,
  6420,
  6424,
  7848,
  4143,
  9508,
  7309,
  9570,
  3928,
  7531,
  8766,
  9639,
  167,
  5837,
  4607,
  9579,
  2847,];
var blue3 = [8824,
  9061,
  6455,
  525,
  7021,
  5837,
  8770,
  648,
  8737,
  6217,
  5576,
  9508,
  7531,
  3723,
  9495,
  6424,
  8298,
  5935,
  2847,
  9495,
  4646,
  7021,
  8822,
  9579,
  4260,
  8770,
  525,
  3723,
  648,
  6805,
  6706,
  4655,
  9092,
  6419,
  2847,
  7309,
  6424,
  167,
  3928,
  9495,
  5576,
  4143,
  1156,
  4624,
  648,
  5275,
  8821,
  7309,
  9579,
  1156,
  2847,
  2526,
  7848,
  4646,
  5837,
  8298,
  8744,
  9092,
  8770,
  4655,
  9570,
  4859,
  5275,
  9543,
  6455,
  9061,
  6419,
  8824,
  2654,
  4607,
  2526,
  6420,
  8737,
  4728,
  967,
  4859,
  4143,
  6805,
  1785,
  3928,];
var red1 = [2847,
  7848,
  9570,
  3928,
  4260,
  9508,
  4655,
  6805,
  4607,
  8824,
  167,
  2847,
  6455,
  4646,
  3928,
  7021,
  8822,
  648,
  167,
  4607,
  1156,
  9092,
  6217,
  4624,
  4143,
  6419,
  9061,
  7309,
  8766,
  8744,
  2526,
  1156,
  8770,
  6420,
  9579,
  8821,
  9543,
  7541,
  8766,
  1625,
  5275,
  3723,
  8824,
  9092,
  6455,
  6424,
  4859,
  8737,
  9639,
  8770,
  2654,
  967,
  4260,
  525,
  9579,
  2847,
  7021,
  4728,
  6706,
  967,
  1785,
  6805,
  3928,
  9495,
  8737,
  5576,
  8822,
  9639,
  7541,
  8770,
  525,
  4624,
  5275,
  8298,
  6424,
  6455,
  9543,
  5935,
  9495,
  7848,];
var red2 = [6419,
  2526,
  7309,
  8298,
  1156,
  6424,
  8744,
  9495,
  2654,
  9061,
  6419,
  7848,
  4728,
  9579,
  4655,
  4859,
  7309,
  8770,
  7531,
  8824,
  5837,
  3723,
  4655,
  8821,
  8744,
  8737,
  6420,
  5041,
  1785,
  4260,
  6424,
  4728,
  8824,
  9495,
  5576,
  648,
  8298,
  4646,
  7021,
  2526,
  8821,
  4728,
  525,
  5837,
  9508,
  9570,
  5935,
  5041,
  8298,
  4143,
  6706,
  9092,
  1785,
  5275,
  5935,
  6455,
  2526,
  648,
  9543,
  4143,
  3723,
  7848,
  7021,
  7531,
  9579,
  648,
  967,
  1625,
  6805,
  167,
  4859,
  8822,
  3723,
  4646,
  2847,
  1156,
  5576,
  6419,
  8770,
  6217,];
var red3 = [6706,
  8737,
  5935,
  8766,
  6217,
  167,
  1625,
  4859,
  8822,
  9570,
  4624,
  9543,
  7541,
  1625,
  967,
  8744,
  6420,
  7848,
  9543,
  6706,
  2526,
  7309,
  5041,
  1785,
  4728,
  5576,
  7541,
  7848,
  967,
  3928,
  4143,
  8298,
  8822,
  9639,
  5275,
  9570,
  4607,
  1785,
  9639,
  9508,
  2654,
  6420,
  9579,
  2847,
  6419,
  8766,
  4607,
  4728,
  6217,
  9061,
  6455,
  6805,
  167,
  6424,
  7531,
  8821,
  4624,
  2654,
  5041,
  1625,
  9639,
  5837,
  5935,
  4646,
  8766,
  3723,
  8821,
  5041,
  4260,
  1156,
  4655,
  8744,
  8824,
  9508,
  4260,
  525,
  7541,
  9092,
  7021,
  7531,];
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
let activeAnimations = [];

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
    indexOut(id);
  }
  //console.log(displaySavedData());
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
function indexOut(id) {
  let team = document.getElementById('teamNum');
  let scout = document.getElementById('scout');
  let match = document.getElementById('matchNum');
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
      window.location.href = "./auton2.html";
    }, 800);
  }, 500);
} 

function qrOut(id) {
  let button = document.getElementById(id);
  button.style.transform = "scale(1.2)";
  button.style.boxShadow = `0px 0px 1000vh 100vw black`;
 setTimeout(() => {
   document.getElementById('tableQR').style.opacity = '0';
   document.getElementById('QrBody').style.background = 'black';
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
  document.getElementById("iPadIDarea").value = sessionStorage.getItem("iPadId");
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
    quote = "for real!"
    break;
    case 12:
    quote = "When life gives you lemons, squirt them right into life's eyes - Logan"
    break;
    case 13:
    quote = "'Sun Tzu Quote' - Matthias"
    break;
    default: 
    quote ="i really dont know"
    break;
  }
  return quote;
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

function loadTransition(times, page) {
  for(let i = 1; i < times+1; i++) {
    setTimeout(() => {
      document.getElementById('row' + i).style.opacity = "1";
      document.getElementById('row' + i).style.transform = "scale(1)";
    }, i*10);
    }
}

function leaveTransition(times, page) {
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
