const request = require('request');

request({
	url: 'https://mapsgleapis.com/maps/api/geocode/json?address=1301%20lombard%20philadelphia&key=AIzaSyDKrHnCompmZxME-PpqnsTYiZjGEWdg10k',
	json: true
}, (error, response, body) => {
	console.log(JSON.stringify(error, undefined, 2));
});
