
(function() {
	
	/*
	|----------------------------------------------------------
	| ATNA app
	|----------------------------------------------------------
	*
	* this creates a namespace for our app and allows
	* us to easily identify each piece of our app
	* as well as organize it within an object.
	*
	*/
	
	window.atna = {
		models: {},
		collections: {},
		views: {},
		router: {},
		helpers: {}
	};
	
	/*
$.getJSON('/year/1980', function(data) {
		
	});
	
	
	
	// variables for holding data and results
	var winners = atna.getYear('1980'),
		results = [];
	
	// loop through each result from the database
		$.each(winners, function(index) {
		
		// encode the title for use in the API call
		var encoded = encodeURIComponent(winners[index]);
		
		// get the results
		$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + encoded, function(data) {
			results.push(data);
			console.log(data);
		});
	});
	
	
	
	
	// api config url: https://api.themoviedb.org/3/configuration?api_key=da1213cb709d4b012442e39d58ec6234
	// example url: https://api.themoviedb.org/3/search/movie?api_key=da1213cb709d4b012442e39d58ec6234&query=interstellar
	
	// use both the config and the example url to piece together images and such...
*/

})();