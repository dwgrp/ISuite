define([
    'app',
    'marionette',
], function(app, Marionette){	
	return Marionette.Object.extend({
		columnNames : function(Roles){
			switch(Roles) 
			{
				case "cadLeader":
					return [
	                    { title: 'ID'                 ,name: 'id'                         ,hidden:true},
	                    { title: 'PMO'                ,name: 'order'                      ,width: '10%'  	,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Functional Location',name: 'functionalLocation'         ,resizable:true 	,filter: true ,filterType: 'input'},
	                    { title: 'Inspection Type'    ,name: 'maintenanceItemDescription' ,width: '25%'		,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Date'               ,name: 'planDateMaintenanceCall'    ,hidden:true},
	                    { title: 'NDT'				  ,name: 'ndtComplete'                ,hidden:true},
	                    { title: 'Tech Date'          ,name: 'sentToCadTech'              ,hidden:true},
	                    { title: 'Tech'               ,name: 'cadTechName'                ,width: '15%'		,resizable:true	,filter: true},
	                    { title: 'NDT'                ,name: 'ndtCadComplete'             ,hidden:true},
	                    { title: 'INSP'               ,name: 'fieldInspectionComplete'    ,hidden:true},
	                    { title: 'Ready For NDT'      ,name: 'readyForNdt'				  ,width: '10%'		,filter: true},
	                    { title: 'Report Ready'       ,name: 'readyForReport'			  ,width: '10%'		,filter: true},
	                    { title: 'Cad Complete'       ,name: 'cad'			  			  ,width: '10%'		,filter: true}
	                    
              		];
	              	break;
				case "patTeam":
					return [
	                    { title: 'ID'                 ,name: 'id'                         ,hidden:true},
	                    { title: 'PMO'                ,name: 'order'                      ,width: '10%'  	,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Functional Location',name: 'functionalLocation'         ,resizable:true 	,filter: true ,filterType: 'input'},
	                    { title: 'Inspection Type'    ,name: 'maintenanceItemDescription' ,width: '25%'		,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Date'               ,name: 'planDateMaintenanceCall'    ,hidden:true},
	                    { title: 'NDT'				  ,name: 'ndtComplete'                ,hidden:true},
	                    { title: 'Tech Date'          ,name: 'sentToCadTech'              ,hidden:true},
	                    { title: 'Tech'               ,name: 'cadTechName'                ,width: '15%'		,resizable:true	,filter: true},
	                    { title: 'NDT'                ,name: 'ndtCadComplete'             ,hidden:true},
	                    { title: 'INSP'               ,name: 'fieldInspectionComplete'    ,hidden:true},
	                    { title: 'Ready For PreAssessment'      ,name: 'readyForNdt'				  ,width: '10%'		,filter: true},
	                    { title: 'Ready For PostAssessment'       ,name: 'readyForReport'			  ,width: '10%'		,filter: true},
	                    { title: 'PAT Complete'       ,name: 'readyForReport'			  ,width: '10%'		,filter: true}
              		];
	              	break;		              		
				default:
					return [
	                    { title: 'ID'                 ,name: 'id'                         ,hidden:true},
	                    { title: 'PMO'                ,name: 'order'                      ,width: '10%'  ,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Equipment'          ,name: 'equipment'                  ,width: '9%'  ,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Functional Location',name: 'functionalLocation'         ,resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Inspection Type'    ,name: 'maintenanceItemDescription' ,width: '22%',resizable:true ,filter: true ,filterType: 'input'},
	                    { title: 'Date'               ,name: 'planDateMaintenanceCall'    ,width: '8%',resizable:true ,filter: true },
	                    { title: 'AS'                 ,name: 'assessment'                 ,width: '5%',resizable:true},
	                    { title: 'PL'                 ,name: 'planning'                   ,width: '5%',resizable:true},
	                    { title: 'IN'                 ,name: 'inspected'                  ,width: '5%',resizable:true},
	                    { title: 'SIG'                ,name: 'cad'                        ,width: '5%',resizable:true},
	                    { title: 'F'                  ,name: 'signatures'                 ,width: '5%',resizable:true}
              		];
			}
		},
		initialize: function(Roles){
			this.columns = [];
			this.columns = this.columnNames(Roles);							
		}
	});
});