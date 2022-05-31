
import mysql from 'mysql';

var str;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users'
});

//POST
const add_user = (fname, lname, ag) => {
    db.query(`INSERT INTO users values("","${fname}", "${lname}", ${ag})`, (err, result) =>{
        if(err) console.log(err);
        console.log(`The user ${fname} has been added`);
    });
}

//GET_ALL
const get_all = ()=>{
    db.query('SELECT * FROM users', (err, result)=>{
        if(err) throw err;
        console.log(result);
        str = result;
        
    });
    return str;
};

//GET
const get_user = (id)=>{
    db.query(`SELECT * FROM users WHERE id = ${id}`, (err, result) => {
        if(err) throw err;
        str = result;
    });
    
    return str;
}

//UPDATE
const update_user = (id, age)=>{
    db.query(`UPDATE users SET age = ${age} WHERE id = ${id}`, (err, result) => {
        if(err) throw err;
        console.log(`User with id ${id} has been updated successfully`);
    });
};

//DELETE
const delete_user = function(name){
    db.query(`DELETE FROM users WHERE firstName = "${name}" `, (err, result) => {
        if(err) throw err;
        console.log(`User ${name} has been deleted successfully`);
    });
};

var obj = {
    add_user: add_user,
    get_all: get_all,
    get_user: get_user,
    delete_user: delete_user,
    update_user: update_user
};

export default obj;