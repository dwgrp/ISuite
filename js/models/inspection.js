define([
    'underscore',
    'backbone'],function(_, Backbone){
        var Inspection =  Backbone.Model.extend({
            urlRoot:"http://vrtx.dow.com/RegisWebAPI/api/sapprogresses",
         	defaults:{
				id:"",
				reliabilityZone :"",
				plantCode :"",
				equipment:"",
				functionalLocation:"",
				flocDescription:"",
				order:"",
				maintenancePlan:"",
				maintenanceItemDescription:"",
				planDateMaintenanceCall:"",
				objectType:"",
				objectDescription:"",
         		assessment:"",
				planning:"",
				inspected:"",
				cad:"",
				signatures:"",
				complete:"",
				currentStage:"",
				preAssessPrepComplete :"",
				preAssessComplete :"",
				postAssessComplete :"",
				wacAssignJob :"",
				fieldPlanComplete :"",
				centralPlanningComplete :"",
				ndtComplete :"",
				sentToCadTech :"",
				cadTechName :"",
				ndtCadComplete :"",
				fieldInspectionComplete :"",
				inspectionCadComplete :"",
				correctionNeeded :"",
				correctionComplete :"",
				inspectorSignoff :"",
				leadInspectorSignoff :"",
				equipmentOwnerSignoff :"",
				pmoTechComplete :"",
				scheduleServiceSet :"",
				processedByDocumentor :""
         	},
         	idAttribute: 'id',
         	initialize:function(){
         		this.requiredFields(app.role);
         	},
         	requiredFields:function(role){
         		var x = this.attributes;
         		switch(role){
         			case "cadLeader":
	         			if(x.ndtComplete != null && x.ndtCadComplete == null){
	         				x.readyForNdt = "Ready";
	         				x.readyForReport = "";
	         			}else if(x.ndtCadComplete  != null && x.cad == null){
	         				x.readyForNdt ="";
	         				x.readyForReport = "Ready";
	         			}else if(x.cad == null){
	         				x.readyForNdt = "Complete";
	         				x.readyForReport = "Complete";
	         			}
	         			break;
         			case "cadLeader":
	         			if(x.ndtComplete != null && x.ndtCadComplete == null){
	         				x.readyForNdt = "Ready";
	         				x.readyForReport = "";
	         			}else if(x.ndtCadComplete  != null && x.cad == null){
	         				x.readyForNdt ="";
	         				x.readyForReport = "Ready";
	         			}else if(x.cad == null){
	         				x.readyForNdt = "Complete";
	         				x.readyForReport = "Complete";
	         			}
	         			break;
         		}
         	}

        });

        return Inspection;
    });
