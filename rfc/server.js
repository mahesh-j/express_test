'use strict';

const rfcClient = require('node-rfc').Client;

// ABAP system RFC connection parameters
const abapSystem = {
	user: 'mjagannath',
	passwd: 'N@ch1keth',
	ashost: 'he3.utegration.com',
	sysnr: '00',
	client: '300',
	lang: 'EN',
};

// create new client
const client = new rfcClient(abapSystem);

// echo SAP NW RFC SDK and nodejs/RFC binding version
console.log('Client version: ', client.version);

// open connection
client.connect(function(err) {
	if (err) {
		// check for login/connection errors
		return console.error('could not connect to server', err);
	}

	// invoke ABAP function module, passing structure and table parameters

	// ABAP structure
	const structure = {
		RFCINT4: 345,
		RFCFLOAT: 1.23456789,
		// or RFCFLOAT: require('decimal.js')('1.23456789'), // as Decimal object
		RFCCHAR4: 'ABCD',
		RFCDATE: '20180625', // in ABAP date format
		// or RFCDATE: new Date('2018-06-25'), // as JavaScript Date object
	};

	// ABAP table
	let table = [structure];

	client.invoke('STFC_STRUCTURE', { IMPORTSTRUCT: structure, RFCTABLE: table }, function(err, res) {
		if (err) {
			return console.error('Error invoking STFC_STRUCTURE:', err);
		}
		console.log('STFC_STRUCTURE call result:', res);
	});
});