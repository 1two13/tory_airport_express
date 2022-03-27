const express = require('express')
const airport = require('./airport')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/airport', (req, res) => {
	res.send(Object.keys(airport).map(code=>airport[code]));
})

app.get('/search/name', (req, res) => {
	const name = req.query.name;
	const countryList = Object.values(airport) // 객체를 배열로 바꾸는 코드
	const arr = countryList.filter(element => 
		element.name.includes(name) || 
		element.korean.includes(name) ||
		element.english.toUpperCase().includes(name.toUpperCase())
	);
	res.send(arr)
})

app.get('/search/code', (req, res) => {
	const code = req.query.code;
	const countryList = Object.values(airport) // 객체를 배열로 바꾸는 코드
	const arr = countryList.filter(element => element.IATA.includes(code.toUpperCase()));
	
	// let i = 0;
	// let arr = [];
	// while(i < countryList.length) {
	// 	if(countryList[i].IATA.includes(code)) {
	// 		arr.push(countryList[i]);
	// 	}
	// 	i++
	// }
	res.send(arr)
})

app.get('/search/country', (req, res) => {
	const country = req.query.country; // query가 country인 값
	const countryList = Object.values(airport) // 객체를 배열로 바꾸는 코드
	
	let i = 0;
	let arr = [];
	while(i < countryList.length) {
		if(countryList[i].country.includes(country)) {
			arr.push(countryList[i]);
		}
		i++
	}
	res.send(arr);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})