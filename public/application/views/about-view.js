var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
    Backbone = require('backbone'),
    _ = require('underscore');

Backbone.$ = $;

module.exports = BaseView.extend({
    templateName: "about-template",

    events: {
         "click #back-button" : "goToStartPage",

    }, 

    initialize: function(options) {
        this.el = options.el;
    },

    showPage: function() {
        console.log("undefineed?");
        this.render();
    },
    
    goToStartPage: function(event) {
        window.RuteVogn.Router.navigate('', true);
    },
});
