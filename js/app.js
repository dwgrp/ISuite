define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'layouts/containerLayout'],
	function($,_, Backbone, Marionette, ContainerLayout){
	// Tie app variable to Marionette application-add router to app and add applayout to app
		var app = new Marionette.Application();
		app.addRegions({	
				nav:"#nav",
				content:"#content",
				leftsidebar: "#leftsidebar"
		});
		app.on('start', function(){ 
			// new ApplicationRouter({ controller: new NavController })  
		    if(Backbone.history){
		        Backbone.history.start();
		    }
		    var NavView = Marionette.View.extend({
	            events: {
	                "click": "onClick"
	            },
	            onClick: function(e){
	                var $li = $(e.target);
	                Backbone.history.navigate($li.attr("data-url"),{trigger:true});
	            }
        	}); 
		    console.log("ContactManager has started!");
		    app.navView = new NavView({ el: "#nav" });   
		});		
		return window.app = app;
});