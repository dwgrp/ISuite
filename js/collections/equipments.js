define([
    'underscore',
    'backbone',
    'models/equipment'],function(_, Backbone,Equipment){
		return Backbone.Collection.extend({
				model: Equipment,
			    url: 'http://vrtx.dow.com/regisWebAPI/api/tbl_equipment_info'
		});
	});