const express = require('express');
const airport = require('./airport');
const cors = require('cors'); 
const app = express();
const port = 8080;

app.use(cors()); // 모든 요청에 대해 cors 허용시키기

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/airport', (req, res) => {
	// console.log(airport)
	res.send(Object.keys(airport).map(code=>airport[code]));
})

app.get('/search/name', (req, res) => {
	const name = req.query.name;
	const countryList = Object.values(airport) 
	const arr = countryList.filter(element => 
		element.name.includes(name) || 
		element.korean.includes(name) ||
		element.english.toUpperCase().includes(name.toUpperCase())
	);
	res.send(arr);
})

app.get('/search/code', (req, res) => {
	const code = req.query.code;
	const countryList = Object.values(airport) 
	const arr = countryList.filter(el => el.IATA.includes(code.toUpperCase()));
	
	res.send(arr);
})

app.get('/search/country', (req, res) => {
	const country = req.query.country; // query(? 뒤에 오는 문자)가 country인 것의 값 
	const countryList = Object.values(airport); // 객체를 배열로 바꾸는 코드
	
	let i = 0;
	let arr = [];
	while(i < countryList.length) {
		if(countryList[i].country.includes(country)) {
			arr.push(countryList[i]);
		};
		i++
	}
	res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});