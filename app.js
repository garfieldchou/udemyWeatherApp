// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
// 	.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });

// f974596b02271d0dc0041b49d6c1ef51
// https://api.darksky.net/forecast/f974596b02271d0dc0041b49d6c1ef51/37.8267,-122.4233

const request = require('request');

request({
	url: 'https://api.darksky.net/forecast/f974596b02271d0dc0041b49d6c1ef51/37.8267,-122.4233',
	json: true
}, (error, response, body) => {
	if (!error && response.statusCode === 200) {
		console.log(body.currently.temperature);
	} else {
		console.log('Unable to fetch weather.');
	}
});
