var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
    Backbone = require('backbone'),
    _ = require('underscore');

Backbone.$ = $;

module.exports = BaseView.extend({
    templateName: "about-template",

    initialize: function(options) {
        this.el = options.el;
    },

    showPage: function() {
        console.log("undefineed?");
        this.render();
    },
});
