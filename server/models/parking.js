const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const parkSchema = new Schema({
    name: String,
    latitude: String,
    longitude: String,
    price: Number,
  
});

module.exports = mongoose.model('parking', parkSchema, 'parking');