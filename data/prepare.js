const data = require('./homme.json')

const categories = [
    "Indépendant(e)s",
    "Collab. familiales/familiaux",
    "Salarié(e)s membres de la direction 2)",
    "Salarié(e)s exerçant une fonction de chef",
    "Salarié(e)s sans fonction de chef",
    "Apprenti(e)s",
]

const num = x => Number(x.split(',').join('.'))

const catParAn = d => ({
  Date: Number(d.Date),
  list: categories
    .reduce((res, cat) => [...res, Number(d[cat])], [])
    .map(n => isNaN(n) ? 0 : n)
})

const result = {
  categories,
  data: data.map(catParAn)
}

console.log(JSON.stringify(result, null, 2))