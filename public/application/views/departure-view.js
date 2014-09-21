var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    BussStopCollection = require('../models/buss-stop-collection');

Backbone.$ = $;


module.exports = BaseView.extend({
    templateName: "departure-template",

    events: {
        "click .departure" : "onBusStopClick",
    },

    initialize: function(options) {
        this.el = options.el;

        this.busStopsCollection = new BussStopCollection();

    },

    showPage: function() {
        _gaq.push(['_trackPageview', '/home']);
        this.getBusStops()
    },

    getBusStops: function() {
        var that = this;
        this.busStopsCollection.fetch({
            success: function(){
                that.onBusStopsResult();
            }
        });
    },

    onBusStopsResult: function () {
        var stops = {stops: this.busStopsCollection.toJSON()};
        var screenInfo = {title:"Jeg reiser fra", favoriteButtonTitle:"Mine favoriter"};
        this.render(stops, screenInfo);
    },

    onBusStopClick: function(event) {
        var stopId = $(event.currentTarget).data('id');
        var stopName = $(event.currentTarget).data('name');
        console.log("Are you here");
        // Click Tracking for google analytics
        _gaq.push(['_trackEvent', 'ButtonClick', 'Traveling-From', stopName + " (from)"]);
        window.RuteVogn.Router.navigate('destination/'+stopId, true);
    }
});
