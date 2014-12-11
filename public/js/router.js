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
		atna.helpers.apiKey    = 'da1213cb709d4b012442e39d58ec6234';
		atna.helpers.searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';
		
		// get our config objects from the API
		$.getJSON('http://api.themoviedb.org/3/configuration?api_key=' + atna.helpers.apiKey, function(apiConfig) {
			var baseURL    = apiConfig.images.base_url,
				posterSize = apiConfig.images.poster_sizes[1];
			
			atna.helpers.mainURL = baseURL + posterSize + '/';
			
			// render our main view when the get request is done
			atna.views.mainView = new atna.views.atna;
		});
	}
});