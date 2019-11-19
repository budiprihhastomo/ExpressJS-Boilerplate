const express = require("express");
const app = express();
const db = require("./config/config");

// Import : Controller
app.use("/", (req, res) => {
    let UserModel = db.model('users', {name: String, email: String, password: String});
    UserModel.find({}, (err, data) => console.log(data))
});

module.exports = app;
