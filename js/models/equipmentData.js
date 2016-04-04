define([
	'jquery',
    'underscore',
    'backbone',
    'backboneRelational'],function($, _, Backbone){
        var EquipmentData = Backbone.RelationalModel.extend({
            urlRoot:"http://vrtx.dow.com/regisWebAPI/api/tbl_equipment_info",
         	idAttribute: 'equipmentData'
        });
        return EquipmentData;
    });
