var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
       _ = require('underscore'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports  = BaseView.extend({
    initialize: function(options) {
        this.el = options.el;
    },

    showView: function() {
        console.log("ready to render");
    }
});