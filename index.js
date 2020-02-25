const Express = require('express');

app = Express();

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

app.use(Express.static('public'));
app.use(Express.json({limit: '1mb'}));

const database = [];

app.post('/api', (request, response) => {
	console.log(request.body);
	database.push(request.body);
	console.log(database);

	response.json({
		status: 'success',
		latitude: request.body.latitude,
		longitude: request.body.longitude
	});
});
