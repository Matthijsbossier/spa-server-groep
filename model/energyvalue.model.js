const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InfoSchema = require('./info.model').InfoSchema;

const EnergyValueSchema = new Schema({

    converter_id: String,
    timestamp: Date,
    info: [InfoSchema]

});

const EnergyValue = mongoose.model('energyvalue', EnergyValueSchema);

////testdata for mongoDb
// const testEnergyValue1 = new EnergyValue({
//     converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
//     timestamp: ('2017-05-12T21:43:12'),
//     info: [{
//         energyvalue: 3.4792531896286,
//         alert_info: "Slave Phase1 No Grid Error" 
//     }]   
// }).save();

// const testEnergyValue2 = new EnergyValue({
//     converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
//     timestamp: ('2017-12-05T21:43:13'),
//     info: [{
//         energyvalue: 3.4792531896286,
//         alert_info: null 
//     }]   
// }).save();


module.exports = EnergyValue;