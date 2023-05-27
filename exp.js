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
<<<<<<< HEAD
console.log("fresh 1");
=======
console.log("666");
console.log("777");
>>>>>>> 5e7fb87515748cd7bc822ad2fde7f738e3bd160a

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


