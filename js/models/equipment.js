define([
    'jquery',
    'underscore',
    'backbone'
    ],function($, _, Backbone){
        return Backbone.Model.extend({
            urlRoot:"http://vrtx.dow.com/regisWebAPI/api/tbl_equipment_list",
         	idAttribute: 'fkEquipment'
        });
    });