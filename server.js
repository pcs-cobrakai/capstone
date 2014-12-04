var http = require("http");

var config = require('./public/config');

var Router = require("routes-router");

var nominees = require('./public/nomineeYears.js')

var st = require('st');

var db = require("orchestrate")(config.dbKey);

var router = Router();
			

router.addRoute("/year", function(){


	// GET: function(req, res, opts){
	// 		console.log("getting. . . ");
	// 		db.get('nominees', "results")
	// 		.then(function (res) {
 //  				console.log(res.body);
	// 		})
	// 		.fail(function (err) {});
			
	// 		res.end("Got it!")
	// },

	// POST: function(req, res, opts){
	// 		console.log("putting. . . ");
	// 		console.log(JSON.stringify(opts));
	// 		res.end("It's posted!")
	// }
})


// router.addRoute("/year/:name", function (req,res,opts) {
//     var name = opts.params.name;
//     res.end("hello, "+name+"!")
// })

router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))


http.createServer(router).listen(4004)

console.log('server listening on port #4004');
