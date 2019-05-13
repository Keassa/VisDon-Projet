
var total = 628, // la circonférence du cercle
buttons = document.querySelector('.buttons'),
pieF = document.querySelector('.pieF'),
pieH = document.querySelector('.pieH'),
activeClass = 'active';


var catF = {// en 1991
"Indépendant(e)s": 14.3,
"Collab. familiales/familiaux": 1.7,
"Salarié(e)s membres de la direction 2)": 10.9,
"Salarié(e)s exerçant une fonction de chef": 21.5,
"Salarié(e)s sans fonction de chef": 46.9,
"Apprenti(e)s": 4.6
};

// var datesH = { //en 1991
// "Indépendant(e)s": 7.6,
// "Collab. familiales/familiaux": 6.4,
// "Salarié(e)s membres de la direction 2)": 3.4,
// "Salarié(e)s exerçant une fonction de chef": 12.2,
// "Salarié(e)s sans fonction de chef": 66.9,
// "Apprenti(e)s": 3.5
// };


// work out percentage as a result of total

var numberFixer = function (num) {
var result = ((num * total) / 100);
return result;
}

// create a button for each categories
for (property in catF) {
var newEl = document.createElement('button');
newEl.innerText = property;
newEl.setAttribute('data-name', property);
buttons.appendChild(newEl);
}

// when you click a button setPieChart and setActiveClass
buttons.addEventListener('click', function (e) {
if (e.target != e.currentTarget) {
  var el = e.target,
    name = el.getAttribute('data-name');
  setPieChart(name);
  setActiveClass(el);
}
e.stopPropagation();
});

var setPieChart = function (name) {
var number = catF[name],
  fixedNumber = numberFixer(number),
  result = fixedNumber + ' ' + total;

pieF.style.strokeDasharray = result;
}

var setActiveClass = function (el) {
for (var i = 0; i < buttons.children.length; i++) {
  buttons.children[i].classList.remove(activeClass);
  el.classList.add(activeClass);
}
}

// Set up default settings
setPieChart('Indépendant(e)s');
setActiveClass(buttons.children[0]);