var express = require("express");
var upload = require("multer")();

var PORT = (process.env.PORT || 5000);

var app = express();

app.use(express.static("public"));

app.post("/api/fileanalyse/", upload.any(), function (req, res) {
	res.json(req.files[0]);
});

app.listen(PORT, function () {
	console.log("Node app is running on port", PORT);
});