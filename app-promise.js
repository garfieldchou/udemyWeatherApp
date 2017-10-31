const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://mapsgoogleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDKrHnCompmZxME-PpqnsTYiZjGEWdg10k`;

axios.get(geocodeUrl).then((response) => {
	console.log(response.data);
}).catch((e) => {
	if (e.code === 'ENOTFOUND') {
		console.log('Unable to connect to API servers.')
	}
});