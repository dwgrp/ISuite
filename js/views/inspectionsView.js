define([
    'jquery',
    'underscore',
    'backbone',
    'marionette',
    'collections/inspections',
    'bbGrid'],function($,_, Backbone, Marionette, Inspections, bbGrid){ 
        var inspectionsView = Marionette.View.extend({
            showModal:function(){
                inspectionDetailModalShow = setTimeout(function(){
                    $("#myModal").modal('show');
                }, 1250);
            },
            initialize: function(options){
                var self = this;
                var inspections = new Inspections();
                inspections.fetch();
                var MyGrid = new bbGrid.View({  
                    container: $('#content'),        
                    collection: inspections,
                    rows: 50,
                    rowList: [25, 50, 100],
                    colModel: options.columnNames,
                    subgrid: true,
                    subgridAccordion: true,
                    onRowExpanded: function($el, rowid) {
                        var subgridCollection = new Backbone.Collection(inspections.toJSON());  
                        var subgrid = new bbGrid.View({
                            container: $el,
                            collection: subgridCollection,
                            multiselect: true,
                            buttons: [{
                                title: 'Show selected',
                                onClick: function(){
                                    var sapID = inspections.at(rowid-1).get('equipment');
                                    $(location).attr('href', Backbone.history.location.pathname + '#details/' + sapID + '/');
                                }
                            }],
                            colModel:[
                                { title: 'ID'                 ,name: 'id'                         ,hidden:true},
                                { title: 'Equipment'          ,name: 'equipment'                  ,hidden:true},
                                { title: 'PMO'                ,name: 'order'                      ,width: '10%' ,resizable:true},
                                { title: 'Inspection Type'    ,name: 'maintenanceItemDescription' ,width: '25%' ,resizable:true},
                                { title: 'Date'               ,name: 'planDateMaintenanceCall'    ,width: '10%' },
                                { title: 'AS'                 ,name: 'assessment'                 ,width: '5%'  ,resizable:true},
                                { title: 'PL'                 ,name: 'planning'                   ,width: '5%'  ,resizable:true},
                                { title: 'IN'                 ,name: 'inspected'                  ,width: '5%'  ,resizable:true},
                                { title: 'SIG'                ,name: 'cad'                        ,width: '5%'  ,resizable:true},
                                { title: 'F'                  ,name: 'signatures'                 ,width: '5%'  ,resizable:true}
                            ],
                            onRowClick: function(model){
                                model.set('planning', !model.get('planning'));
                            }
                        });

                        subgridCollection.reset(subgridCollection.where({
                            equipment: inspections.at(rowid-1).get('equipment')
                        }));

                    },
                    onRowHover:function($el){
                        self.showModal();
                    },
                    onRowLeave:function($el){
                        clearTimeout(inspectionDetailModalShow);
                    }
                });

            }
        });

        return inspectionsView;
    });
    
                        


