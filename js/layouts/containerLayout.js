define([
	'marionette'],
	function(Marionette){
		return Marionette.LayoutView.extend({
		template:"#mainView",
		regions:{
			nav:"#nav",
			content:"#content",
			leftsidebar: "#leftsidebar"	
		}
	});
});