const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EnergyValueSchema = require('./energyvalue.model').EnergyValueSchema;


const ConverterSchema = new Schema({

    serialNumber: String,
    deviceName: String,
    online: Boolean,
    Location: String,
    deviceModel: String,
    displaySoftwareVersion: String,
    masterControlSoftwareVersion: String,
    slaveControlVersion: String,
    energyValue: [EnergyValueSchema]
});

const Converter = mongoose.model('converter', ConverterSchema);


module.exports = {
    Converter: Converter,
    ConverterSchema: ConverterSchema
 }