const express = require('express')
const airport = require('./airport')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/airport', (req, res) => {
	res.send(airport);
})

app.get('/search', (req, res) => {
	const name = req.query.name;
	res.send(req.query)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})