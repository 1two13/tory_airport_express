const fs = require('fs')

// 동기적으로 파일 읽기
const airportString = fs.readFileSync('airport.json', 'utf-8');
// 파일을 문자열 => JSON 으로 변경
const airport = JSON.parse(airportString);
// airport 파일 exports
module.exports = airport;