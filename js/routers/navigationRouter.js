define([
    'marionette'],
    function(Marionette){
        return Marionette.AppRouter.extend({
            appRoutes:{
                '':'showComplianceGrid',
                ':role/':'showComplianceGrid',
                'details/:sapID/' : 'details'
            }
    });
});       