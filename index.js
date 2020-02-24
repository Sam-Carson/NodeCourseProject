let userArray = [];



var newUser = function(pName, pAge) {
  this.Name = pName;
  this.Age = pAge;
}

document.addEventListener("DOMContentLoaded", function () {

document.getElementById('addUserBtn').addEventListener("click", function(){
  userArray.push(new newUser(document.getElementById("name").value, document.getElementById("age").value));
});

document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("where").value = "";
  document.getElementById("trail").value = "";
  document.getElementById("select-difficulty").value = "";
  document.getElementById("distance").value = "";
  document.getElementById("elevation").value = "";

});
// $(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
//  // document.getElementById("IDparmHere").innerHTML = "";
//   createList();
// });

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