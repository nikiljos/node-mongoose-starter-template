const mongoose = require("mongoose");
const { Schema } = mongoose;

// const fb = require("../services/firebase.js");

mongoose.connect(process.env.atlasURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("connection successful");
});

const mySchema = new Schema({
    something: String,
});

const mine = mongoose.model("myModel", sessionSchema, "mine");


module.exports={
    mine
}
