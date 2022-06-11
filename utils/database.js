var mysql = require('mysql2');

let database =  mysql.createPool({
    user: 'root',
    password: 'mypassword',
    host: 'localhost',
    database: 'user_model', 
    multipleStatements: true, 
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = database;