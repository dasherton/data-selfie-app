const Express = require('express');
const Datastore = require('nedb');

app = Express();

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

app.use(Express.static('public'));
app.use(Express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
	const data = request.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;

	database.insert(data);

	response.json({
		status: 'success',
		timestamp: timestamp,
		latitude: request.body.latitude,
		longitude: request.body.longitude
	});
});
