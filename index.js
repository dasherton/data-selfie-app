const express = require('express');

app = express();

app.listen(3000, () => {
	console.log('Listening on port 3000');
})

app.use(express.static('public'));
