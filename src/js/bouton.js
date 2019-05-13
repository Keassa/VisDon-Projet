


var buttons = document.querySelector('.buttons'),
  activeClass = 'active';

// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Choisir une date";

// var Dates = {
//   "les Dates" : 0
//   };

// for (property in catF) {
//   var newEl = document.createElement('button');
//   newEl.innerText = property;
//   newEl.setAttribute('data-name', property);
//   buttons.appendChild(newEl);
// }

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener("click", function () {
  alert("Change les valeures du graph");
});

/* Read

https,//css-tricks.com/use-button-element/
*/