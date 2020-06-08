// jshint esversion: 6
// ===================================== requiring modules ===================================== //
// node modules
const express = require(`express`);
const bodyParser = require(`body-parser`);
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
// custom modules
const db = require(`./config/db.config`);

// ================================== express app configurations ==================================== //
//creating app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// serving static files in express
app.use(express.static(__dirname));
app.use(express.static(`public`));

// ====================================== db configurations ========================================= //
connection.on('connect', function (err) {
    if (err) {
      console.log(err)
    } else {
        console.log(`DB Connected....`);
    }
  })

//====================================== registering required routes ========================================//
require(`./routes/todo.routes`)(app);

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
