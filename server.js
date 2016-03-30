var express = require('express');
var app = express();

var port = 3030;

app.use(express.static('build'));

app.listen(port, function(error) {
	if (error) {
		console.error(error);
	} else {
		console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	}
});
