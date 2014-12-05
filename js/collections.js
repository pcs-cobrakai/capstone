/*
|----------------------------------------------------------
| ATNA COLLECTIONS
|----------------------------------------------------------
*
*/

atna.collections.movies = Backbone.Collection.extend({
	
	model: atna.models.movie/*,
	url: // enter a url to get the movies from the database*/
	
});

atna.data = {
	"1980": ["Title 1", "Title 2", "Title 3"],
	"1981": ["Title 4", "Title 5", "Title 6"],
	"1982": ["Title 7", "Title 8", "Title 9"]
};

atna.getYear = function(year) {
	return atna.data[year];
}

// console.log(atna.getYear('1980'));

// api key: da1213cb709d4b012442e39d58ec6234

// api config url: http://api.themoviedb.org/3/configuration?api_key=da1213cb709d4b012442e39d58ec6234
// example url: https://api.themoviedb.org/3/search/movie?api_key=da1213cb709d4b012442e39d58ec6234&query=interstellar

// use both the config and the example url to piece together images and such...