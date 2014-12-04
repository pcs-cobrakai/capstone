var http = require("http");

var config = require('./public/config');

var Router = require("routes-router");

var sendHtml = require("send-data/html");

var nominees = require('./public/nomineeYears.js')

var fs = require("fs");

var st = require('st');

var db = require("orchestrate")(config.dbKey);

var router = Router();

router.addRoute("/api", {

	GET: function(req, res, opts){
			console.log("getting. . . ");
			db.get('nominees', results.values[0])
.then(function (res) {
  console.log(res.body);
})
.fail(function (err) {});
			console.log(JSON.stringify(opts));
			res.end("Got it!")
	},

	POST: function(req, res, opts){
			console.log("putting. . . ");
			console.log(JSON.stringify(opts));
			res.end("It's posted!")
	}
})


router.addRoute("/", function(req,res){

	fs.readFile('./public/dropdown.html', {encoding:'utf8'}, function (err, data){

		if(err) console.log("ERROR :" + err)

	sendHtml(req,res,data)
	});

});

router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))


http.createServer(router).listen(4004)

console.log('server listening on port #4004');
