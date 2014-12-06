var http 		= require("http"),
	config  	= require('./public/config'),
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



router.addRoute("/year/:year", {

	GET: function(req, res, opts){

		var year = opts.params.year;
			
			db.get('capstone', year).then(function (dbRes) {
  				
  				console.log(dbRes.body);

  				res.end(JSON.stringify(dbRes.body));
			
			}).fail(function (err) {
				
				res.end(err);
			});
	}
})


router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))


http.createServer(router).listen(4004)

console.log('server listening on port #4004');
