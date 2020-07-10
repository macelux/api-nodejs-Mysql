// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000,
//     mongoose = require('mysql'),
//     Task = require('./api/models/todoListModel'), //created model loading here
//     bodyParser = require('body-parser');

// // mongoose instance connection url connection
// //mongoose.Promise = global.Promise;
// //mongoose.connect('mongodb://localhost/Tododb');




// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// var routes = require('./api/routes/todoListRoutes'); //importing route
// routes(app); //register the route

// app.use(function(req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found' })
// });

// app.listen(port);


// console.log('todo list RESTful API server started on: ' + port);



const express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project_tracker'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/appRoutes'); //importing route
routes(app); //register the route