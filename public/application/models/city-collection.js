var $ = require('jquery-browserify'),
	CityModel = require('./city-model'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    model: CityModel,
    url: "cities"
});