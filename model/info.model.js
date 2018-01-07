const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InfoSchema = new Schema({
    energyvalue: Number,
    alert_info: String
});

 const Info = mongoose.model('info', InfoSchema);

 module.exports = {
    Info: Info,
    InfoSchema: InfoSchema
}