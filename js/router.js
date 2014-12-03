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
		console.log('hello from the index page!');
	}
});