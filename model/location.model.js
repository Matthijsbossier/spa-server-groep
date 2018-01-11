const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ConverterSchema = require('./converter.model').ConverterSchema;
const EnergyValueSchema = require('./energyvalue.model').EnergyValueSchema;
const InfoSchema = require('./info.model').InfoSchema;
var today = new Date();

const LocationSchema = new Schema({

    name: String,
    street: String,
    houseNumber: Number,
    city: String,
    zipCode: String,
    country: String,
    Owner: String,
    installationDate: Date,
    installer: String,
    contactPerson: String,
    converters: [ConverterSchema]
});

const Location = mongoose.model('location', LocationSchema);

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

const location1 = new Location({
    name: 'Avans Beukenlaan',
    street: 'Beukenlaan',
    houseNumber: 1,
    city: 'Bavel',
    zipCode: '4854 TA',
    country: 'Netherlands',
    Owner: 'Avans Zonnepanelen',
    installationDate: today,
    installer: 'Tenten Solar',
    contactPerson: 'bart@tentensolar.nl',
    converters: [{
        serialNumber: 'testnumber',
        deviceName: 'Avans Beukenlaan 1 Bavel (dak 1)',
        online: true,
        Location: 'Avans Beukenlaan',
        deviceModel: 'Suntrio-TL20K-SED-A',
        displaySoftwareVersion: 'STV1.237',
        masterControlSoftwareVersion: 'V1.161',
        slaveControlVersion: 'V1.16',
        energyValue: [{
            converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
            timestamp: ('2017-05-12T21:43:12'),
            info: [{
                energyvalue: 3.4792531896286,
                alert_info: "Slave Phase1 No Grid Error" 
            }] 
        }, {
            converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
            timestamp: ('2017-12-05T21:43:13'),
            info: [{
                energyvalue: 3.4792531896286,
                alert_info: null 
            }] 
        }]
    }]
}); //.save();

const location2 = new Location({
    name: 'Avans Hogeschoollaan',
    street: 'Hogeschoollaan',
    houseNumber: 1,
    city: 'Breda',
    zipCode: '4818 CR',
    country: 'Netherlands',
    Owner: 'Avans Zonnepanelen',
    installationDate: today,
    installer: 'Tenten Solar',
    contactPerson: 'bart@tentensolar.nl',
    converters: [{
        serialNumber: 'testnumber',
        deviceName: 'Avans Hogeschoollaan 1 Breda (dak 1)',
        online: true,
        Location: 'Avans Beukenlaan',
        deviceModel: 'Suntrio-TL20K-SED-A',
        displaySoftwareVersion: 'STV1.237',
        masterControlSoftwareVersion: 'V1.161',
        slaveControlVersion: 'V1.16',
        energyValue: [{
            converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
            timestamp: ('2017-05-12T21:43:12'),
            info: [{
                energyvalue: 3.4792531896286,
                alert_info: "Slave Phase1 No Grid Error" 
            }] 
        }, {
            converter_id: "4c16e24f-286d-4e6e-b4d1-c63bbb0303aa",
            timestamp: ('2017-12-05T21:43:13'),
            info: [{
                energyvalue: 3.4792531896286,
                alert_info: null 
            }] 
        }]
    }]
}).save();


module.exports = Location;