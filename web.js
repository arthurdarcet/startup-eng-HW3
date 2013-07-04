var data = require('fs').readFileSync('index.html').toString();
require('express').createServer().listen(process.env.PORT || 5000).get('/', function(res, req) {
	req.send(data);
});
