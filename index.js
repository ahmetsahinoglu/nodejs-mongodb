const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();


mongoose.connect('mongodb://localhost/userdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/api", require("./routes/Api"));

app.use(function (error,req,res,next) {
    res.status(422).send({error:error.message})
});

app.listen(process.env.port || 4000, function () {
    console.log("now listening for requests")
});