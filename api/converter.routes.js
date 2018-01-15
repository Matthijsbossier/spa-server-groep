var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Converter = require('../model/converter.model');


routes.get('/locations', function(req, res){
    res.contentType('application/json');
    Location.find({})
        .then((values) => {
            res.status(200).json(values);
        })
        .catch((error) => res.status(401).json(error));
});

routes.get('/locations/converter', function (req, res, next) {
    res.contentType('application/json');
    const converter = req.params.converters;

    Location.findOne({converters : converter})
    .then ((values) => {
        res.send(values);
    })
    .catch(next);
});

 routes.get('/locations/:id/converter', function (req, res, next) {
     res.contentType('application/json');
     const energyvalueID = req.params.id;
     const converter = [];

    Location.findOne({'_id': { $in: converters}})
     .then (function(converters) {
        res.status(200).json(converters);
    })
    .catch((error) => {
      res.status(400).json(error);
    })
});

 
 routes.post('/locations/converters', function(req, res, next) {
     res.contentType('application/json');
     let newConverter = new Converter(req.body);
    
     Location.create(newConverter)
         .then(converter => res.send(converter))
         .catch(next);
     newConverter.save();
 });

 routes.put('/locations/:id/converter', function (req, res) {
    var locationId = req.params.id;
    var body = req.body;
    Location.findOneAndUpdate({
        _id: locationId
    }, {$push: {converters: body}}).then(function (location) {
        res.status(200).json(location);
    }).catch((error) => {
        res.status(400).json(error);
    })
});

routes.get('/locations/converters', function(req, res) {
    res.contentType('application/json');
  
    var converter = req.params.converters;
  
    Location.find({'location.converters': converters})
      .then(function (locations) {
        res.status(200).json(locations);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });

 routes.put('/locations/:id', function(req, res, next) {
     res.contentType('application/json');
     const locationID = req.params.id;
     const updateLocation = req.body;

     Location.findByIdAndUpdate({_id: locationID}, updateLocation)
     .then(() => Location.findById({_id: locationID}))
     .then((location) => res.send(location))
     .catch(next);
 });

 routes.delete('/locations/:id', function(req, res, next) {
     res.contentType('application/json');
     const locationId = req.params.id;

     Location.findByIdAndRemove(locationId, (err, todo) => {
         let response = {
             message: "Successfully deleted",
             //id: location._id
         };
         res.status(200).send(response);
     });
 });

module.exports = routes;