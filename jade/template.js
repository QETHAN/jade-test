function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),title = locals_.title,list = locals_.list,map = locals_.map,key = locals_.key,value = locals_.value;buf.push("<p>");
if ( title)
{
buf.push("<h4 class=\"title\">" + (jade.escape(null == (jade.interp = title) ? "" : jade.interp)) + "</h4>");
}
if ( list)
{
buf.push("<ul>");
// iterate list
;(function(){
  var $$obj = list;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade.interp = item) ? "" : jade.interp)) + "</li>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<li>" + (jade.escape(null == (jade.interp = item) ? "" : jade.interp)) + "</li>");
    }

  }
}).call(this);

buf.push("</ul>");
}
if ( map)
{
buf.push("<p><span>" + (jade.escape(null == (jade.interp = key) ? "" : jade.interp)) + "</span>:<span>" + (jade.escape(null == (jade.interp = value) ? "" : jade.interp)) + "</span></p>");
}
buf.push("</p>");;return buf.join("");
}