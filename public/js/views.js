/*
|----------------------------------------------------------
| ATNA VIEWS
|----------------------------------------------------------
*
*/
var movieIdList = [];

// ===== main view =====

atna.views.atna = Backbone.View.extend({
	el: '#atna',
	
	initialize: function() {
		this.render();
		
		// fire app when dropdown changes
		$('select').on('change', function() {
			
			// make our request for movies titles from database
			$.get('/year/' + $(this).val(), function(data) {
				var dataObject = JSON.parse(data);
				
				// create instance of our results view
				atna.views.resultsView = new atna.views.movieResults(dataObject);
			});
		});
	},

	render: function() {
		// grab our template and append it to the dom
		this.$el.html( $('#main-template').html() );
		
		// render the years for the dropdown
		this.makeYears();
		
		// initialize the dropdown js plugin
		$('select#year').customSelect();
	},
	
	makeYears: function() {
		// have jquery create our option dropdowns
		var year = $('#year');
		
		for(var count = 2015; count >= 1928; --count) {
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
			
			var year = $('select').val();
			var misYear = year - 1;

			// encode the title for use in the API call
			var encoded = encodeURIComponent(title);
			// get the data from the api
			$.getJSON(atna.helpers.searchURL + atna.helpers.apiKey + '&query=' + encoded + '&year=' + year, function(data) {
				data = data.results[0];
				
				if(!data){

					$.getJSON(atna.helpers.searchURL + atna.helpers.apiKey + '&query=' + encoded + '&year=' + misYear, function(data) {
						data = data.results[0];
						
						
						atna.views.singleView = new atna.views.movieView(data);
					})
					
				}

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

		var that = this;
		$.getJSON(atna.helpers.movieURL + this.data.id + '?api_key=' + atna.helpers.apiKey + '&append_to_response=trailers', function(trailerData) {
			that.movieInfo = {
				title: that.data.title,
				poster: atna.helpers.mainURL + that.data.poster_path,
			}
			if(trailerData.trailers.youtube[0]) {

				that.movieInfo.trailer_id = trailerData.trailers.youtube[0].source

			} else {
				that.movieInfo.trailer_id = 0
			}			

			that.render();

		});
	},
	
	render: function() {
		
		this.$el.html(this.template(this.movieInfo)).appendTo('#results-list');
		
		var video_id = this.movieInfo.trailer_id, 
			iframeDiv = $('.iframe_div'), 
			iframe = $('#iframe-'+video_id),
			windowHeight = $(window).height(), 
			winWidth = $(window).width();

				if(winWidth<768)
				{
					var fancyWidth = $('.fancybox-inner').width();
					var fancyHeight = $('.fancybox-inner').height();
					iframe.css({ 'width': fancyWidth + 'px'});
					iframe.css({ 'height': fancyHeight + 'px'});
				}
				else
				{
					iframe.css({ 'width': '640px'});
					iframe.css({ 'height': '390px'});
				}
		//fancybox
		$('.view-trailer').fancybox({
			padding: 3,
			aspectRatio: true
		});

	}

	
});

// $(window).load(function(){
	
	// afterShow:function(){

				
	// 		}
	
	
	// 	<iframe id="fancy_iframe"

	

	// else if(winWidth>1850)
	// {
		
	// }

// })












	



















