'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors'),
  Client = mongoose.model('Client'),
  _ = require('lodash');

/**
 * Create a client
 */
exports.create = function(req, res) {
  var client = new Client(req.body);
  client.user = req.user;

  client.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(client);
    }
  });
};

/**
 * Show the current client
 */
exports.read = function(req, res) {
  res.jsonp(req.client);
};

/**
 * Update a client
 */
exports.update = function(req, res) {
  var client = req.client;

  client = _.extend(client, req.body);

  client.save(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(client);
    }
  });
};

/**
 * Delete an client
 */
exports.delete = function(req, res) {
  var client = req.client;

  client.remove(function(err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(client);
    }
  });
};

/**
 * List of clients
 */
exports.list = function(req, res) {
  Client.find({user: req.user}).sort('-created').populate('user', 'displayName').exec(function(err, clients) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.jsonp(clients);
    }
  });
};


/**
 * client middleware
 */

exports.uniqueClientName = function(req, res, next){
   var clientName = req.body.name;
   console.log('name', clientName);
   Client.find().exec(function(err, clients){
    console.log('clients', clients);
    _.forEach(clients, function(client, key){
        console.log(client.name);
      if(clientName === client.name){
        console.log('error');
          return res.status(400).send({
            message: 'Client Name Exist'
          });
      }
    });
   });
   next();

 };

exports.clientById = function(req, res, next, id) {
  console.log('welcome here');
  console.log('params', req.params.clientId);
  Client.findOne({_id: req.params.clientId}).populate('user', 'displayName').exec(function(err, client) {
    if (err) return next(err);
    if (!client) return next(new Error('Failed to load client ' + id));
    req.client = client;
    next();
  });
};


/**
 * client authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
  if (req.client.user.id !== req.user.id) {
    return res.status(403).send('User is not authorized');
  }
  next();
};
