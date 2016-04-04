define([
    'jquery',
    'underscore',
    'backbone',
    'models/equipment',
    'models/equipmentData',
    ],function($,_, Backbone, Equipment, EquipmentData, Equipments){
        return Backbone.View.extend({
            tagName: "li",
            initialize: function(options){
            },
            render: function(Equipment){
                console.log("got1");
                $(this.el).html(this.template(this.model.toJSON()));
                return this;
            }
        });

        // return equipmentView;

	});