// <!-- /**************************************
//  TITLE: More Ifs
//  AUTHOR: Kiren Kaur
//  CREATE DATE: 2/16/18
//  PURPOSE: To learn about JS
//  LAST MODIFIED ON: 2/16/18
//  LAST MODIFIED BY: Kiren Kaur
//  MODIFICATION HISTORY:
//  2/16/18 - Original build
// ***************************************/

$(document).ready(function() {

//4 variables
var intCurLat = prompt("What is your current latitude in degrees?", "32");
var intCurLong = prompt("What is your current longitude in degrees?","13");
var intDestLat = prompt("What is the destination latitude in degrees?", "75");
var intDestLong = prompt("What is your current latitude in degrees?", "90");


//else if block
if(intCurLat <= intDestLat && intCurLong <= intDestLong) {
  document.getElementById("p1").textContent = "Head North East!";
} else if(intCurLat <= intDestLat && intCurLong >= intDestLong) {
  document.getElementById("p1").textContent = "Head North West!";
} else if(intCurLat >= intDestLat && intCurLong >= intDestLong) {
  document.getElementById("p1").textContent = "Head South West!";
} else if(intCurLat >= intDestLat && intCurLong <= intDestLong) {
  document.getElementById("p1").textContent = "Head South East!";
} else {
  document.getElementById("p1").textContent = "Land Ho!";
}


switch(true) {
  case (intCurLat <= intDestLat && intCurLong <= intDestLong) :
    document.getElementById("p2").textContent = "Head North East!";
    break;

  case (intCurLat <= intDestLat && intCurLong >= intDestLong) :
    document.getElementById("p2").textContent = "Head North West!";
    break;

  case (intCurLat >= intDestLat && intCurLong >= intDestLong) :
    document.getElementById("p2").textContent = "Head South West!";
    break;

  case (intCurLat >= intDestLat && intCurLong <= intDestLong) :
    document.getElementById("p2").textContent = "Head South East!";
    break;

  default:
    document.getElementById("p2").textContent = "Land Ho!";
    break;
}

}());
