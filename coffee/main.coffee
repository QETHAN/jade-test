
data =
  title: 'a title'
  list: [
    'line a'
    'line b'
    'line c'
    'line d'
  ]
  map:
    a: 'this is a'
    b: 'this is b'
    c: 'this is c'
console.time 'Handlebars'
[1..10000].map ->
  Handlebars.templates['template.hbs'](data)
console.timeEnd 'Handlebars'

console.time 'jade'
[1..10000].map ->
  jade.attrs data
console.timeEnd 'jade'