var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Location = require('../model/location.model');
var Converter = require('../model/converter.model');


routes.get('/locations', function(req, res){
    res.contentType('application/json');
    Location.find({})
        .then((values) => {
            res.status(200).json(values);
        })
        .catch((error) => res.status(401).json(error));
});

 routes.get('/locations/:id', function (req, res, next) {
     res.contentType('application/json');
     const locationID = req.params.id;


     Location.findOne({_id : locationID})
     .then ((values) => {
         res.send(values);
     })
     .catch(next);
 });

 routes.post('/locations', function(req, res, next) {
     res.contentType('application/json');
     let newLocation = new Location(req.body);
    
     Location.create(newLocation)
         .then(location => res.send(location))
         .catch(next);
     newLocation.save();
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

// Add a converter to a location

routes.put('/locations/:id/converter', function (req, res) {
    var locationId = req.params.id;
    var body = req.body;
    Location.findOneAndUpdate({
        _id: locationId
    }, {$push: {converters: body}}).then(function (location) {
        res.status(200).json({message: "Converter successfully added to the location"});
    }).catch((error) => {
        res.status(400).json(error);
    })
});



module.exports = routes;