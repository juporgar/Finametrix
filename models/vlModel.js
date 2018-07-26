const Mongoose = require('mongoose');

let vlSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    fecha: String,
    precio: Number
});

let vl = Mongoose.model('vl', vlSchema);
module.exports = vl;