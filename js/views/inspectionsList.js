define([
    'marionette',
    'models/inspection',
    'collections/inspections',
    'views/inspectionView'
    ],function(Marionette,Inspection, Inspections, InspectionView){ 
        var inspectionsView = Marionette.CollectionView.extend({
            childView: InspectionView,
            childViewOptions:{
                thismodel:Inspection,
            },
            tagName: "ul",
            className: "ulnob",
            initialize: function(){
                this.collection = new Inspections([]);
                this.collection.fetch();
            }
        });
        return inspectionsView;           
    });