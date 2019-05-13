const d3 = require('d3');

const f = require("../../data/dataF.json")
const h = require("../../data/dataH.json")
//InfoFemale = require("../../data/femme.json")
//InfoMale = require("../../data/homme.json")
const categories = f.categories



const dataParDate = (data, date) => {
  const found = data.find(d => d.date === date)
  if (found) {
    return found.list
  } else {
    return []
  }
}

const parCategorie = (list, index) => list[index]

const getAnnee = date => {
  const listF = dataParDate(f.data, date)
  const listH = dataParDate(h.data, date)
  return categories.map((cat, i) => ([cat, listF[i], listH[i]]))
}

// BOUTON

var data = [1991,1992,1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];

var select = d3.select('body')
  .append('select')
  	.attr('class','select')
    .on('change',onchange)

var options = select
  .selectAll('option')
	.data(data).enter()
	.append('option')
		.text(function (d) { return d; });

function onchange() {
	selectValue = d3.select('select').property('value')
  d3.select('body')
  graph(Number(selectValue))
};




//GRAPH
const graph = annee =>
bb.generate({
  data: {
    x: "x",
    columns: 
    [
  ["x", "femme", "homme"],
  ...getAnnee(annee),
  [],
    ],
    groups: [
      categories
    ],
    type: "bar"
  },
  axis: {
    x: {
      type: "category",
      categories
    }
  },
  bindto: "#categoryData"
});

graph(2018)
/*

setTimeout(function() {
	chart.load({
		columns: [
			["x", "www.siteA.com", "www.siteB.com", "www.siteC.com", "www.siteD.com"],
			["download", 130, 200, 150, 350],
			["loading", 190, 180, 190, 140]
		],
	});
}, 1000);

setTimeout(function() {
	chart.load({
		columns: [
			["x", "www.siteE.com", "www.siteF.com", "www.siteG.com"],
			["download", 30, 300, 200],
			["loading", 90, 130, 240]
		],
	});
}, 2000);

setTimeout(function() {
	chart.load({
		columns: [
			["x", "www.site1.com", "www.site2.com", "www.site3.com", "www.site4.com"],
			["download", 130, 300, 200, 470],
			["loading", 190, 130, 240, 340]
		],
	});
}, 3000);

setTimeout(function() {
	chart.load({
		columns: [
			["download", 30, 30, 20, 170],
			["loading", 90, 30, 40, 40]
		],
	});
}, 4000);

setTimeout(function() {
	chart.load({
		url: './data/string_x.csv'
	});
}, 5000);
*/