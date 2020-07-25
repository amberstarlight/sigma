const express = require("express");
const app = express();

const port = 9999; // ENVIRONMENT VARIABLE THING

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.listen(port);