const express = require("express");
const airport = require("./airport");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors()); // 모든 요청에 대해 cors 허용시키기

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/airport", (req, res) => {
  res.send(Object.keys(airport).map((code) => airport[code]));
});

app.get("/search", (req, res) => {
  const query = req.query.query;
  const list = Object.values(airport);
  const arr = list.filter(
    (el) =>
      el.IATA.includes(query?.toUpperCase()) ||
      el.country.includes(query) ||
      el.location.includes(query) ||
      el.korean.includes(query) ||
      el.english.toUpperCase().includes(query?.toUpperCase())
  );

  res.send(arr);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
