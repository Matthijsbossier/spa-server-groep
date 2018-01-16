const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InfoSchema = require('./info.model');

const EnergyValueSchema = new Schema({

    converter_id: String,
    timestamp: Date,
    info: InfoSchema

});

const EnergyValue = mongoose.model('energyvalue', EnergyValueSchema);

module.exports = EnergyValueSchema