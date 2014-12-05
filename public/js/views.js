/*
|----------------------------------------------------------
| ATNA VIEWS
|----------------------------------------------------------
*
*/


// ===== main view =====

atna.views.atna = Backbone.View.extend({
	initialize: function() {
		console.log('the view is rendering \n==>(views.js line 13)');
		new atna.views.movieView;
	}
});


// --------------------------------------------------------


// ===== individual movie view =====

atna.views.movieView = Backbone.View.extend({
		
	tagName: 'p',
	
	initialize: function() {
		console.log('individual movie view \n==>(views.js line 30)');
	}
	
});



// main view
// query view
// result view
// individual movie view