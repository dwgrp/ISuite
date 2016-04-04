define([
    'underscore',
    'backbone',
    'models/inspection'],function(_, Backbone,Inspection){
		var Inspections =  Backbone.Collection.extend({
			model: Inspection,
			url: "http://vrtx.dow.com/RegisWebAPI/api/sapprogresses",
		
			initialize: function(models, options) {
  			}
		});
		return Inspections;
});