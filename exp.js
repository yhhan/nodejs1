const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello!!" });
});

console.log("Server is starting..");
console.log("333");
console.log("444");
console.log("555");
console.log("666");

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


