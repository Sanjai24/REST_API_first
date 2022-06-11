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
            var leng = UserData.phone_num.toString().length;

            if(UserData){
                if(leng<11){
                    let [User] = await UserModel.CreateUser(UserData);
                
            res.send(`User with name ${UserData.name}, ${ UserData.phone_num} added successfully`);
                }
                else{
                    res.send('Phone number cannot be more than 10 digits')
                }
                
            //console.log(User.name, User.designation, User.phone_num);
            }
            
            
        }
        catch(err){
            res.send(err.message) ;
        }
        
    },
    async getUser(req, res){
        try{
            // let [getUser] = await UserModel.GetUser(req.body);
            // if(getUser.length){
            //     res.send(getUser);
            //     console.log(getUser);
            // }
            // else{
            //     res.send('No user with such credentials');
            //     console.log('No such user');
            // }
            res.send("Json");
        }
        catch(err){
            res.send(err);
        }

    },
    async getAllUsers(req, res){
        try{
            let [getAllUsers] = await UserModel.GetAllUsers();
            if(getAllUsers){
                console.log("getallusers accessed");
                res.send(
                    {
                        status: true, 
                        message: "Successfull",
                        data: getAllUsers
                    }
                    );
                
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
        try{
            let {user_id} = req.query;
        let{
            name,
            designation, 
            phone_num
        } =  req.body;

        var UserData = {
            user_id,
            name, 
            designation, 
            phone_num
        };

        if(UserData){
            await UserModel.UpdateUser(UserData);
            res.send(`User with id ${user_id} has been updated`);
        }
        else{
            res.send("No Data Received");
        }
        }
        catch(err){
            res.send(err.message);
        }
    },
    async deleteUser(req, res){
        try{ 
        let {user_id} = req.query;
        
        console.log(user_id);
        console.log(req.query);
        if(user_id){
            await UserModel.DeleteUser(user_id);
            res.send(`User with id ${user_id} is deleted.`);
        }
        else{
            res.send("This id does not exist");
        }
}
        catch(err){
            res.send(err.message);
        }
       

    }
}

module.exports = user_controller;