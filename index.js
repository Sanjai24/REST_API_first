var express = require('express');
var userRoutes = require('./routes/users.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.json());
app.use('/', userRoutes);
var PORT = 5036;
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`The server is running in http://localhost:${PORT}`);
});