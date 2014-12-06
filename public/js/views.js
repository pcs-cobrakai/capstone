/*
|----------------------------------------------------------
| ATNA VIEWS
|----------------------------------------------------------
*
*/


// ===== main view =====

atna.views.atna = Backbone.View.extend({
	el: '#atna',
	
	initialize: function() {
		this.render();
		
		// fire app when dropdown changes
		$('select').on('change', function() {
			
			// make our request for movies titles from database
			$.get('/year/' + $(this).val(), function(data) {
				dataObject = JSON.parse(data);
				// render our results view
				atna.views.resultsView = new atna.views.movieResults(dataObject);
			});
		});
	},

	render: function() {
		this.$el.html( $('#main-template').html() );
	}
});


// --------------------------------------------------------


// ===== movie results view =====

atna.views.movieResults = Backbone.View.extend({
	el: '#atna',
	
	initialize: function(data) {
		this.data = data;
		this.render();
		
		$.each(this.data.titles, function(index) {
			atna.views.singleView = new atna.views.movieView;
		});
	},

	render: function() {
		this.$el.append('<div id="results-view">I\'m the results view!</div>');
	}
});


// --------------------------------------------------------


// ===== individual movie view =====

atna.views.movieView = Backbone.View.extend({
		
	el: '#results-view',
	
	initialize: function() {
		this.render();
	},
	
	render: function() {
		this.$el.append('<p>I\'m a movie view</p>')
	}
	
});