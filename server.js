var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'), //connecting database
  Task = require('./api/models/todoListModel') //created modelling loading here
  bodyParser = require('body-parser');

  //moongoose instance connection url connection
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/Tododb');

  app.use(bodyParser.urlencoded({ extenden: true}));
  app.use(bodyParser.json());
  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + 'not found'})
  });
  var routes = require('./api/routes/todoListRoutes'); //importing route
  routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
