var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Location = require('../model/location.model');


routes.get('/locations', function(req, res){
    res.contentType('application/json');
    Location.find({})
        .then((values) => {
            res.status(200).json(values);
        })
        .catch((error) => res.status(401).json(error));
});

// routes.get('/locations/:id', function(req, res, next){
//     res.contentType('application/json');
//     const LocationName = req.params.id;
//     Location.find({name: LocationName})
//     //Location.findOne({name: LocationName})
//     .then((values) => {
//         res.status(200).json(values);
//     })
//     .catch(next)

// });


// routes.get('/energyvalues/:id', function (req, res, next) {
//     res.contentType('application/json');
//     const energyvalueID = req.params.id;

 routes.get('/locations/:id', function (req, res, next) {
     res.contentType('application/json');
     const energyvalueID = req.params.id;


     Location.findOne({_id : energyvalueID})
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


module.exports = routes;