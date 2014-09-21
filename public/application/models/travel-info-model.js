var $ = require('jquery-browserify'),
	Backbone = require('Backbone');

Backbone.$ = $;

module.exports = Backbone.Model.extend({
    url: "/departure"
});