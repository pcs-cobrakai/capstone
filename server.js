var http 		= require("http"),
	Router  	= require("routes-router"),
	st 			= require('st'),
	router 		= Router(),
	fs			= require('fs'),
	config 		= (process.env.HEROKU)? 
	{ 
		dbKey:     process.env.DBKEY
	}:
	require('./public/config.js');



router.addRoute("/year/:year",
{

	GET: function(req, res, opts)
	{

		var year = opts.params.year, obj;

		fs.readFile('./public/js/nomineeYears.json', function(err, data)
		{
		    if(err)
		    {
		    	throw err
		    }
		    obj = JSON.parse(data)

		    for (var i = obj.results.length - 1; i >= 0; i--)
		    {
		    	if(year === obj.results[i].path.key)
		    	{
					res.end(JSON.stringify(obj.results[i].value));
		    	}
		    };

		})

	}
})


router.addRoute("/*", st({

	path: __dirname + "/public",

	index:'/index.html',
}))

var port = (process.env.PORT || 5000);

http.createServer(router).listen(port)

console.log('server listening on port ' + port);
