
### Performance comparison between pre-compiled Jade and pre-compiled Handlebars

Code runnig here: http://s.jiyinyiyong.info/jade-test/index.html

Install dependencies with lastest version of Bower please.
And test with NPM and CoffeeScript:

```
bower install
npm install
npm test # you need CoffeeScript and Jade global installed to run this
```

While you update the code, remember to recompile the CoffeeScript to JS.

Since Handlebars doesn't watch and reload itself, you need to compile that by hand:

```
handlebars -f handlebars/template.js handlebars/*
```