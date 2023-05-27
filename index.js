
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const dbConfig = require("./db.js");

const app = express();
app.set('view engine', 'ejs');

const conn = dbConfig.init();

dbConfig.connect(conn);

app.get("/", function (req, res) {
  res.send("index");
});

app.get("/list", function (req, res) {
  var sql = "SELECT * FROM user";
  conn.query(sql, function (err, rows, fields) {
    if (err) console.log("query is not excuted. select fail...\n" + err);
    else {
      res.render("index.ejs", { list: rows });
      // res.send({ list: rows });
    }
  });
});

app.listen(8000, () => console.log("포트 3000번에서 시작"));
