import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import mysql from 'mysql';
import db from './db.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/', usersRoutes);

app.get('/', (req, res) => {
    console.log('Home Page');
    res.send('Welcome to the Homepage');
});


app.listen(PORT, () => {
    console.log(`The server is connected to http://localhost/${PORT}`);
});