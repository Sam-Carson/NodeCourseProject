let userArray = [];
let tripArray = [];
let chosenPlayer = {
  name: ""
}

let newUser = function(pPlayerID, pName, pAge) {
  this.PlayerID = pPlayerID;
  this.Name = pName;
  this.Age = pAge;
}

let newTrip = function(pMountain, pTrail, pDifficulty, pDistance, pElevation){
  this.Mountain = pMountain;
  this.Trail = pTrail;
  this.Difficulty = pDifficulty;
  this.Distance = pDistance;
  this.Elevation = pElevation;
}

document.addEventListener("DOMContentLoaded", function () {

  //user object constructor
document.getElementById('addUserBtn').addEventListener("click", function(){
  userArray.push(new newUser(userArray.length, 
    document.getElementById("name").value, 
    document.getElementById("age").value));
});

//trip object constructor
document.getElementById("addTripBtn").addEventListener("click", function(){
  tripArray.push(new newTrip(document.getElementById("where").value, 
  document.getElementById("trail").value, 
  document.getElementById("select-difficulty").value,
  document.getElementById("distance").value, 
  document.getElementById("elevation").value));
  clearUserInput();
});

//clear input fields
document.getElementById("clearBtn").addEventListener("click", function () {
  clearUserInput();
});

// custom user header page3
$(document).on("pagebeforeshow", "#page3", function(event) {
  let currentUser = document.getElementById("name").value;
  chosenPlayer.name = currentUser;
  document.getElementById("userNameHeader").innerHTML = "Welcome " +chosenPlayer.name;
});
// $(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
//  // document.getElementById("IDparmHere").innerHTML = "";
//   createList();
// });


// clears fields so input doesn't remain after leaving and then returning to page 3
 $(document).on("pagebeforeshow", "#page3", function (Event) {
  clearUserInput();
 });

 function clearUserInput() {
  document.getElementById("where").value = "";
  document.getElementById("trail").value = "";
  document.getElementById("select-difficulty").value = "Green Circle";
  document.getElementById("distance").value = "";
  document.getElementById("elevation").value = "";
 };

 $(document).on("pagebeforeshow", "#page4", function(event) {
  let currentUser = document.getElementById("name").value;
  chosenPlayer.name = currentUser;
  document.getElementById("userNameHeaderPage4").innerHTML = chosenPlayer.name + ", here are your recorded rides";

});

$(document).on("onload", "#page4", function(event) {
  if (tripArray = null) {
    document.getElementById("userTripList").innerHTML = "No trips recorced";
  }
});


// To Do List
// 1. when fields are empty, have statements that say so.
// 2. create list on page 4

});

// function createList()
// {
//   // clear prior data
//   var divUserlist = document.getElementById("divUserlist");
//   while (divUserlist.firstChild) {    // remove any old data so don't get duplicates
//       divUserlist.removeChild(divUserlist.firstChild);
//   };

//   var ul = document.createElement('ul');  
//   userArray.forEach(function (element,) {   // use handy array forEach method
//     var li = document.createElement('li');
//     li.innerHTML = "<a data-transition='pop' class='onePlayer' data-parm=" + element.PlayerID + "  href='#page3'>Jump </a> " + element.PlayerName;
//     ul.appendChild(li);
//   });
//   divUserlist.appendChild(ul)

//     // set up an event for each new li item, if user clicks any, it writes >>that<< items data-parm into the hidden html 
//     var classname = document.getElementsByClassName("onePlayer");
//     Array.from(classname).forEach(function (element) {
//         element.addEventListener('click', function(){
//             var parm = this.getAttribute("data-parm");  // passing in the record.Id
//             console.log(parm);
//             //do something here with parameter on  pickbet page
//             document.getElementById("IDparmHere").innerHTML = parm;
//             document.location.href = "index.html#page3";
//         });
//     });
//   } ;