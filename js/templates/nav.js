define([
    'app',
    'marionette',
], function(app, Marionette){
var template = 
'<nav class="navbar navbar-default navbar-fixed-top">\
	<div class="container-fluid">\
		<div class="navbar-header">\
			<ul class="nav navbar-nav navbar-left">\
		        <a class="navbar-brand" href="#">MTS Inspection Suite</a>\
		    </ul>\
        	<ul class="nav navbar-nav navbar-right">\
 	            <li><a href="#">Home</a></li>\
 	            <li class="dropdown">\
	          		<a  class="dropdown-toggle" data-toggle="" role="button" aria-haspopup="true" aria-expanded="false">\
	          		Dropdown <span class="caret"></span>\
	          		</a>\
	          		<ul class="dropdown-menu">\
			            <li><a href="#patTeam/">PAT Team</a></li>\
			            <li><a href="#cadLeader/">CadLeader</a></li>\
			            <li role="separator" class="divider"></li>\
			            <li><a href="#">Home</a></li>\
	          		</ul>\
        		</li>\
 	        </ul>\
	    </div>\
	</div>\
</nav>'
$("#nav").html(template);
});
