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
		// grab our template and append it to the dom
		this.$el.html( $('#main-template').html() );
		
		// render the years for the dropdown
		this.makeYears();
	},
	
	makeYears: function() {
		// have jquery create our option dropdowns
		var year = $('#year');
		
		for(var count = 2013; count >= 1980; --count) {
			$('<option>' + count + '</option>').appendTo(year);
		}
	}
});


// --------------------------------------------------------


// ===== movie results view =====

atna.views.movieResults = Backbone.View.extend({
	el: '#results-list',
	
	initialize: function(data) {
		this.data = data;
		this.render();
		
		var me = this;
		
		$.each(me.data.titles, function(index) {
			var title = me.data.titles[index];
			
			// encode the title for use in the API call
			var encoded = encodeURIComponent(title);
			
			// get the data from the api
			$.getJSON(atna.helpers.searchURL + atna.helpers.apiKey + '&query=' + encoded, function(data) {
				data = data.results[0];
				
				if(data) {
					atna.views.singleView = new atna.views.movieView(data);
				}
			});
		});
	},

	render: function() {
		this.$el.html('');
	}
});


// --------------------------------------------------------


// ===== individual movie view =====

atna.views.movieView = Backbone.View.extend({
		
	tagName: 'article',
	
	className: 'results-list-item',
	
	template: _.template($('#movie-template').html()),
	
	initialize: function(data) {
		this.data = data;
		console.log(this.data);
		this.movieInfo = {
			title: this.data.title,
			poster: atna.helpers.mainURL + this.data.poster_path
		}
		this.render();
	},
	
	render: function() {
		this.$el.html(this.template(this.movieInfo)).appendTo('#results-list');
	}
	
});