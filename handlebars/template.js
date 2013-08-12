(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['template.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <h4>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n      <li>"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</li>\n    ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    ";
  stack1 = helpers.each.call(depth0, depth0.map, {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <p>\n        <span>";
  if (stack1 = helpers.key) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.key; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        :\n        <span>";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </p>\n    ";
  return buffer;
  }

  buffer += "\n<p>\n  ";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  stack1 = helpers['if'].call(depth0, depth0.map, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</p>";
  return buffer;
  });
templates['template.js'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates['template.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Handlebars.helpers); data = data || {};\n  var buffer = \"\", stack1, functionType=\"function\", escapeExpression=this.escapeExpression, self=this;\n\nfunction program1(depth0,data) {\n  \n  var buffer = \"\", stack1;\n  buffer += \"\\n    <h4>\";\n  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }\n  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }\n  buffer += escapeExpression(stack1)\n    + \"</h4>\\n  \";\n  return buffer;\n  }\n\nfunction program3(depth0,data) {\n  \n  var buffer = \"\", stack1;\n  buffer += \"\\n    \";\n  stack1 = helpers.each.call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n  \";\n  return buffer;\n  }\nfunction program4(depth0,data) {\n  \n  var buffer = \"\";\n  buffer += \"\\n      <li>\"\n    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))\n    + \"</li>\\n    \";\n  return buffer;\n  }\n\n  buffer += \"\\n<p>\\n  \";\n  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n  \";\n  stack1 = helpers['if'].call(depth0, depth0.list, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});\n  if(stack1 || stack1 === 0) { buffer += stack1; }\n  buffer += \"\\n</p>\";\n  return buffer;\n  });\n})();";
  });
})();