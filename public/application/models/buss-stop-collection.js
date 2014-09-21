var $ = require('jquery-browserify'),
	BussStopModel = require('./buss-stop-model'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Collection.extend({
    model: BussStopModel,
    url: "stops"
});

