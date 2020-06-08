// jshint esversion: 6
// ===================================== requiring modules ===================================== //
// node modules
const express = require(`express`);
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
// custom modules
const db = require(`./config/db.config`);

// ================================== express app configurations ==================================== //
//creating app
const app = express();

// creating video routes
const router = express.Router();

// passing router to app
app.use(router);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// serving static files in express
app.use(express.static(__dirname));
app.use(express.static(`public`));

// ====================================== db configurations ========================================= //
mongoose.Promise = global.Promise;

const connectDB = async () => {
    await mongoose.connect(db.url, db.options);
    console.log(`DB Connected....`);
};

connectDB();

//====================================== registering required routes ========================================//
require(`./routes/material.routes`)(app);

// ========================================== app routes ============================================ //
app.all(`/`, (req, res) => {
    res.send({msg: `Construction firm.`});
});

// ====================================== app listening port ======================================== //
let port = process.env.PORT||8080;
app.listen(port, function() {
    console.log(`app started on port: ${port}`);
    console.log(`Open app on http://localhost:8080/`);
});
