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
		// store our API key for calls to the API
		var apiKey = 'da1213cb709d4b012442e39d58ec6234';
		
		// get our config objects from the API
		$.get('http://api.themoviedb.org/3/configuration?api_key=' + apiKey, function(apiConfig) {
			var baseURL    = apiConfig.images.base_url,
				posterSize = apiConfig.images.poster_sizes[0];
			
			atna.helpers.mainURL = baseURL + posterSize + '/';
			
			// render our main view when the get request is done
			atna.views.mainView = new atna.views.atna;
		});
	}
});