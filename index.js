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
	console.log(request.body);
	database.insert(request.body);
	console.log(database);

	response.json({
		status: 'success',
		latitude: request.body.latitude,
		longitude: request.body.longitude
	});
});
