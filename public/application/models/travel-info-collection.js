var	Backbone = require('Backbone'),
	TravelInfoModel = require('./travel-info-model'),
	$ = require('jquery-browserify');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    model: TravelInfoModel,
    url: "departure"
});

