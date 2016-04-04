define([
    'app',
    'marionette',
    'templates/mainContainer',
    'templates/nav',
    'views/inspectionDetails/inspectionDetailFormView',
    'routers/navigationRouter',
    'controllers/navController'
], function(app, Marionette, Maincontainer, NavTemplate, inspectionDetailsFormView,navigationRouter, navController){
    console.log('Module:Pages => Loading...');
    var PagesModule = app.module("Pages", function(Pages) {
        this.startWithParent = false;
        this.addInitializer(function(){
            console.log('Module:Pages => initialized');
            this.router = new navigationRouter({ controller: navController });
        });
    });
    return PagesModule;
});