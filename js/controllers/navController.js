define([
    'app',
    'templates/gridColumnLayouts/gridColumnNames',
    'views/inspectionsView',
    'views/inspectionsList'],
    function(app,gridNames, inspectionsView, InspectionsList){
        'use strict';
// Controller function will be called here to keep the router clean
        return ({
            showComplianceGrid: function(role){
                $("#content").empty();
                app.role = role;
                var gnames = new gridNames(app.role); 
                new inspectionsView({columnNames: gnames.columns}) 
            },
            details: function(id){
                $("#content").empty(); 
                var gnames = new gridNames("inspector"); 
                new inspectionsView({columnNames: gnames.columns})
                app.leftsidebar.show(new InspectionsList());
            },
        });             
    });       