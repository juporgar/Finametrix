 const Mongoose = require('mongoose');

 let vaSchema = Mongoose.Schema({
   isin: String,
   nombre: String,
   divisa: String,
   familia: String
 });

 let va = Mongoose.model('va', vaSchema);
 module.exports = va;