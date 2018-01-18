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

// Add a energyvalue to a converter

routes.put('/locations/:id/:converterid/energyvalue', function (req, res) {
    const locationId = req.params.id;
    const converterId = req.params.converterid;
    const body = req.body;

    Location.findOne({
        _id: locationId
    })
    .then(location => {
        console.log(location);
        var converter = location.converters.forEach(item => {
            console.log('item._id = ' + item._id + ' convID = ' + converterId);
            if(item._id.toString() === converterId) {
                console.log("_id gevonden");
                item.energyValue.push(body);
            } else {
                console.log('geen match');
            }
        })
        return location;    
    })
    .then(location => {
        console.log("location ontvangen: " + location);
        res.status(200).json({message: "Energyvalue successfully added to the converter"})
        location.save();
    })
    .catch(error => {
        console.log("error " + error);
        
    })
});

routes.delete('/locations/:id/:converterid/:energyvalueid', function (req, res) {
        const locationId = req.params.id;
        const converterId = req.params.converterid;
        const energyvalueId = req.params.energyvalueid;
        const body = req.body;
    
        Location.findOne({
            _id: locationId
        })
        .then(location => {
            console.log(location);
            var energyValue = location.converters.forEach(item => {
                //console.log('item._id = ' + item._id + ' energyvalueId = ' + energyvalueId);
                if(item._id.toString() === converterId) {
                    console.log('converter ontvangen: ' + item);
                    item.energyValue.forEach(value => {
                        if(value._id.toString() === energyvalueId) {
                        console.log("energyvalue_id gevonden");
                        item.energyValue.remove(value);
                        }
                    })
                } else {
                    console.log('geen match');
                }
            })
            return location;    
        })
        .then(location => {
            console.log("location ontvangen: " + location);
            res.status(200).json({message: "Energyvalue successfully deleted"})
            location.save();
        })
        .catch(error => {
            console.log("error " + error);
            
        })
    });

module.exports = routes;