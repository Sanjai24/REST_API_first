import express from 'express';
import mysql from 'mysql';
import db from '../db.js';

const router = express.Router();

const users = [
    {
        firstName: "Sanjai",
        lastName: "S",
        age: 20
    },
    {
        firstName: "San",
        lastName: "Jai",
        age: 19
    }
];

//POST ROUTER
router.post('/adduser', (req, res) => {
    db.add_user(req.body.firstName, req.body.lastName, req.body.age);
    res.send(`The user ${req.body.firstName} has been created successfully`);
});

//GET ALL ROUTER
router.get('/users', (req, res)=>{
    let [get_users] = db.get_all();
    console.log(get_users);
    res.send(get_users);
    
});

//GET USER ROUTER
router.get('/users/:id', (req, res) => {
    let [get_user] = db.get_user(req.params.id);
    console.log(get_user);
    res.send(get_user);
});

//UPDATE ROUTER
router.put('/update/:id', (req, res) => {
    db.update_user(req.params.id, req.body.age);
    res.send(`User with id ${req.params.id} has been updated successfully`);
});
    
//DELETE ROUTER
router.delete('/delete/:fname', (req, res)  => {
    db.delete_user(req.params.fname);
    res.send(`${req.params.fname} has been del...`);
});
export default router;