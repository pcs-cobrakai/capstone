var http 		= require("http"),
	config  	= require('./config'),
	Router  	= require("routes-router"),
	nominees 	= require('./public/nomineeYears.js'),
	st 			= require('st'),
	db 			= require("orchestrate")(config.dbKey),
	router 		= Router();

// for(key in nominees){ 
// 	db.put("capstone", key, {
// 		titles: nominees[key]
// 	})
// };


router.addRoute("/year/:req", {

	var year = opts.params.year;

	GET: function(req, res, opts){
			console.log("getting. . . ");
			db.get('nominees', "req")
			.then(function (res) {
  				console.log(res.body);
			})
			.fail(function (err) {});
			
			res.end("Got it!")
	}
})


router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))


http.createServer(router).listen(4004)

console.log('server listening on port #4004');
