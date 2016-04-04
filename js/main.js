require.config({
	shim:{
		'bootstrap': {
            deps: ['jquery']
        },
        backbone: {
			exports: 'Backbone',
			deps: ['jquery', 'underscore']
		},
        
    	'marionette':{
    		deps: ['backbone'],
    		exports: 'marionette'
    	},

        'backboneRelational': {
        	deps: ['backbone'],
        	exports: 'backboneRelational'
        },
		'bbGrid': {
        	deps: ['backbone'],
        	exports: 'bbGrid'
        },
	},
	paths:{
		text: 'lib/text',
		jquery:'lib/jquery-min',
		bootstrap: 'lib/bootstrap-min',
		underscore:'lib/underscore-min',
		backbone:'lib/backbone-min',
		bbGrid: 'lib/bbGrid',
		backboneRelational: 'lib/backbone-relational',
		marionette: 'lib/backbone.marionette',

	}
});
require([
	'app',	
	'modules/Pages',
    'jquery',
	'bootstrap'],function(app, PagesModule){
		'use strict';
		app.addInitializer(function() {
        	PagesModule.start();
    	});
		app.start();
});
