
require('calabash').do 'dev',
  'jade -o ./ -wP layout/index.jade'
  'jade -o ./jade -w --client --no-debug jade/template.jade'
  # 'handlebars -f handlebars/template.js handlebars/*'
  'coffee -o lib/ -wbc coffee/'