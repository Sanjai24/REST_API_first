var database = require('../utils/database');

const UserModel = {
    async CreateUser(userData){
        let sql = `INSERT INTO users(name, designation, phone_num) VALUES('${userData.name}', '${userData.designation}', ${userData.phone_num})`;
        console.log(`'${userData.name}', '${userData.designation}', ${userData.phone_num} db side`);
      return await database.promise().query(sql);
    },
    async GetUser(data){
        if(data.user_id){
            let sql = `Select * from users where user_id = ${data.user_id}`;
            return query = await database.promise().query(sql);
        }
        else if(data.phone_num){
            return query = await database.promise().query(`Select * from users where phone_num = ${data.phone_num}`);
        }
        else if(data.name){
            let sql = `Select * from users where name = '${data.name}'`;
            return query = await database.promise().query(sql);
        }
        else if(data.designation){
            return query = await database.promise().query(`Select * from users where designation = ${data.designation}`);
        }
        

    },
    async GetAllUsers(){
        return query = await database.promise().query(`Select * from users order by user_id`);
    },
    async UpdateUser(data){
        //let sql = `UPDATE users SET name = '${data.name}', designation = '${data.designation}', phone_num = '${data.phone_num}' where user_id = ${data.user_id}`;
        let sqlconcat = '';
        if(data.name){
            sqlconcat += `UPDATE users SET name = '${data.name}' where user_id = ${data.user_id};`;
        }
        if(data.designation){
            sqlconcat += `UPDATE users SET designation = '${data.designation}' where user_id = ${data.user_id};`;
        }
        if(data.phone_num){
            sqlconcat += `UPDATE users SET phone_num = '${data.phone_num}' where user_id = ${data.user_id};`;
        }
        
        return database.promise().query(sqlconcat);
    },
    async DeleteUser(data){
        let sql = `DELETE from users where user_id = ${data}`;
        return database.promise().query(sql);
    }
}

module.exports = UserModel;