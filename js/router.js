/*
|----------------------------------------------------------
| ATNA ROUTER
|----------------------------------------------------------
*
*/

atna.router = Backbone.Router.extend({
	routes: {
		'': 'index'
	},
	
	index: function() {
		console.log('hello from the index page! \n==>(router.js line 14)');
		new atna.views.atna;
	}
});