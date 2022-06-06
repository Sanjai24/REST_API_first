var database = require('../utils/database');

const UserModel = {
    async CreateUser(userData){
        let sql = `INSERT INTO users(name, designation,  phone_num) VALUES('${userData.name}', '${userData.designation}', ${userData.phone_num})`;
      return await database.promise().query(sql);
      console.log("User created");
    },
    async GetUser(data){
        if(data.name){
            let sql = `Select * from users where name = '${data.name}'`;
            return query = await database.promise().query(sql);
        }
        if(data.phone_num){
            return query = await database.promise().query(`Select * from users where phone_num = ${data.phone_num}`);
        }

    },
    async GetAllUsers(){
        return query = await database.promise().query(`Select * from users order by user_id`);
    },
    async UpdateUser(data){
        let sql = `UPDATE users SET name = '${data.name}', designation = '${data.designation}', phone_num = '${data.phone_num}' where user_id = ${data.user_id}`;
        return database.promise().query(sql);
    },
    async DeleteUser(data){
        let sql = `DELETE from users where user_id = ${data.user_id}`;
        return database.promise().query(sql);
    }
}

module.exports = UserModel;