var $ = require('jquery-browserify'),
    Backbone = require('backbone');

Backbone.$ = $;
 
module.exports = Backbone.Model.extend({
   url: "/stops"
});