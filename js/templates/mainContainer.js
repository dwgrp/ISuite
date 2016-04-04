define([
    'app',
    'marionette',
], function(app, Marionette){
var template =
'<div id="nav"></div>\
<div id="leftsidebar" class="leftsidebar"></div>\
<div id="content" class="content"><div id="bbGrid"></div></div>'

$("#container").html(template);
});