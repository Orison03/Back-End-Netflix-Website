const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const path = require("path");

const handleLoginController = (req, res) => {
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.password);
  res.send(`You can proceed`);
};

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({ extended: false }));

server.post("/login", handleLoginController);
server.listen(5000, "localhost", () => {
  console.log("server is good to go");
});
