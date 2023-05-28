
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
      res.send({ list: rows });
      // res.json({ list: rows });
      // res.render("index.ejs", { list: rows });
    }
  });
});


const PORT = 8000;
app.listen(PORT, () => console.log(`포트 ${PORT}번에서 시작`));
