const fs = require('fs')

const airportString = fs.readFileSync('airport.json', 'utf-8');
const airport = JSON.parse(airportString);

module.exports = airport;