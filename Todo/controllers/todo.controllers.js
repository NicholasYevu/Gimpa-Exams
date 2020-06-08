// jshint esversion:6
// ===================== node modules ====================== 
const mysql= require("mysql");

const sql = mysql.createConnection({
    host: "localhost",
    user: " DB_A2A9C5_db_admin",
    password: "pass@word123",
    database: "dricm"
});

sql.connect(function (err) {
    if(err){
        console.log("error");
    }else{
        console.log("connected");
    }
});

console.log('connected as id ' + connection.threadId);

// exports
exports.createTodo = (req, res, next) => {
    console.log(`Create todo Account`);
    console.log(req.body);
    let sqlQuery = `INSERT INTO table (title, description)
                    VALUES( '${req.body.title}' , '${req.body.description}');`;
    sql.query(sqlQuery, function (err, res) {
        console.log(query);
        if(err) {
            console.log("error");
        }
        else{
            console.log(res.insertId);
        }
    });
};

exports.deleteTodoById = (req, res, next) => {
    console.log('Delete todo item by id.');    
    console.log(req.body);
    let sqlQuery = `DELETE FROM TblTodoRecord WHERE id = '${req.body.id}';`;
    sql.query(sqlQuery,  function (err, res) {
        console.log(query);
        if(err) {
            console.log("error");
        }
        else{
            console.log(res.insertId);
        }
    });
};

exports.getAllTodos = (req, res, next) => {
    console.log(`Get All todo Account`);
    console.log(req.body);
    let sqlQuery = `SELECT * FROM TblTodoRecord;`;
    sql.query(sqlQuery,  function (err, res) {
        console.log(query);
        if(err) {
            console.log("error");
        }
        else{
            console.log(res.insertId);
        }
    });
};