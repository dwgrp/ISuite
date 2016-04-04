define([
    'underscore',
    'backbone',
    'collections/equipments',
    'backboneRelational'
    ],function(_, Backbone, Equipments, backboneRelational){ 
		 var equipmentsView = Backbone.View.extend({
		    initialize:function () {
		    	var equipments = new Equipments();
		    	equipments.fetch();
		    },
		    render:function (eventName) {
		        _.each(this.model.models, function (item) {
		            $(this.el).append(new app.view.ItemView({model:item}).render().el);
		        }, this);
		        return this;
		    }			
		});
		return equipmentsView;
	});