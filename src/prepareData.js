const fs = require('fs')
const d3 = require('d3')
const csvF = fs.readFileSync('../data/mondeProfessionnelFemme.csv', 'utf-8')
const csvH = fs.readFileSync('../data/mondeProfessionnelHomme.csv', 'utf-8')
const dates = fs.readFileSync('../data/dates.csv', 'utf-8')

const csvToJson = d3.dsvFormat(';').parse
// console.log(csvToJson(csvH)[0])

JSON.stringify(csvToJson(csvF), null, 2)
console.log(JSON.stringify(csvToJson(csvF), null, 2))

JSON.stringify(csvToJson(csvH), null, 2)
console.log(JSON.stringify(csvToJson(csvH), null, 2))

JSON.stringify(csvToJson(dates), null, 2)
console.log(JSON.stringify(csvToJson(dates), null, 2))
