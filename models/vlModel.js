const Mongoose = require('mongoose');

let vlSchema = Mongoose.Schema({
    tipo: String,
    isin: String,
    fecha: Number,
    precio: Number
});

let vl = Mongoose.model('vl', vlSchema);
module.exports = vl;