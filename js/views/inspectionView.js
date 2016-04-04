define([
    'jquery',
    'underscore',
    'marionette'
    ],function($,_, Marionette){
        var my_template_html = "\
                <a href='#/details/<%= equipment %>/'>\
                    <li class='ms-ListItem ' id='<%= equipment %>'>\
                        <span class='ms-ListItem-primaryText'><%= equipment %></span>\
                        <span class='ms-ListItem-secondaryText' styles='word-wrap: break-word'><%= maintenanceItemDescription %></span>\
                    </li>\
                </a>"
        var InspectionView = Marionette.View.extend({
            initialize: function(options){
                $(this.el).html(_.template(my_template_html)(options.model.toJSON()));
            },
            tagName: "li",
            template: _.template(my_template_html)
        });
        return InspectionView;
	});