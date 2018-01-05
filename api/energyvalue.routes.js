var express = require('express');
var routes = express.Router();
var mongodb = require('../config/mongo.db');
var Location = require('../model/location.model');


routes.get('/energyvalues', function(req, res){
    res.contentType('application/json');
    Location.find({})
        .then((values) => {
            res.status(200).json(values);
        })
        .catch((error) => res.status(401).json(error));
});

// routes.get('/energyvalues/:id', function (req, res, next) {
//     res.contentType('application/json');
//     const energyvalueID = req.params.id;

//     Location.findOne({_id : energyvalueID})
//     .then ((values) => {
//         res.send(values);
//     })
//     .catch(next);
// });

// routes.post('/artists', function(req, res, next) {
//     res.contentType('application/json');
//     let newArtist = new Artist(req.body);
    
//     Artist.create(newArtist)
//         .then(artist => res.send(artist))
//         .catch(next);
//     newArtist.save();
// });

// routes.put('/artists/:id', function(req, res, next) {
//     res.contentType('application/json');
//     const artistID = req.params.id;
//     const updateArtist = req.body;

//     Artist.findByIdAndUpdate({_id: artistID}, updateArtist)
//     .then(() => Artist.findById({_id: artistID}))
//     .then((artist) => res.send(artist))
//     .catch(next);

//     //save();
// });

// routes.delete('/artists/:id', function(req, res, next) {
//     res.contentType('application/json');
//     const artistID = req.params._id;

//     Artist.findByIdAndRemove(req.params._id, (err, todo) => {
//         let response = {
//             message: "Successfully deleted",
//             id: artist._id
//         };
//         res.status(200).send(response);
//     });
// });




module.exports = routes;