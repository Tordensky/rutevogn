var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var CitySchema = new Schema({
    name : { type: String, required: true},
});

module.exports = mongoose.model('City', CitySchema);