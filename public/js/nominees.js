
var $submit = $('.submit');

$submit.on('click', function(event){
	event.preventDefault();
	console.log('making Request for jsonp');
	
			$('.info').load("./nominees.html").then(function(data,status,xhr){
				console.log(data, "DATAAA");
			})
	
});


// http://awardsdatabase.oscars.org/ampas_awards/DisplayMain.jsp?curTime=1417166662798


// http://api.wolframalpha.com/v2/query?input=best+picture+nominees+1998&appid=6GAH42-U3AAHKQRAL

// var test = {
// 	load: function() {
// 		$.get("/api","Request");
// 		// CURL equvalent:
// 		// curl -X GET -d "Request" localhost:1337/api
// 	},
// 	save: function() {
// 		$.post("/api","Data");
// 		// CURL equivalent:
// 		// curl -X POST -d "Data" localhost:1337/api
// 	}
// }

