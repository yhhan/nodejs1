const express = require("express");
const bodyParser = require("body-parser");
const res = require("express/lib/response");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello!!" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


