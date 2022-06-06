var UserModel = require('../models/user.model');
const user_controller = {
    async createUser(req, res){
        try{
            let{
                name,
                designation, 
                phone_num
            } =  req.body;

            var UserData = {
                name, 
                designation, 
                phone_num
            };

            console.log(UserData.name, UserData.designation, UserData.phone_num, 'Checking');

            if(UserData){
                let [User] = await UserModel.CreateUser(UserData);
            }
            res.send(`User with name ${UserData.name} added successfully`)
            
        }
        catch(err){
            throw err;
        }
        
    },
    async getUser(req, res){

    },
    async getAllUsers(req, res){
        try{
            let [getAllUsers] = await UserModel.GetAllUsers();
            if(getAllUsers){
                res.send(getAllUsers);
                
            }
            else{
                res.send('No data fetched');
            }
        }
        catch(err){
            throw err;
        } 
    },
    async updateUser(req, res){

    },
    async deleteUser(req, res){

    }
}

module.exports = user_controller;