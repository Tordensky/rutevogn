"use strict";

var $ = require('jquery-browserify'),
    Backbone = require('backbone');

Backbone.$ = $;

var DepartureView = require('./views/departure-view'),
    DestinationView = require('./views/destination-view'),
    ResultView = require('./views/result-view'),
    InfoView = require('./views/info-view');

module.exports = Backbone.Router.extend({
    routes: {
        '': "home",
        'destination/:id': "destination",
        'trip/:fromId/:toId': "trip",
        'info': "info"
    },

    departureView: null,
    destinationView: null,
    resultView: null,
    infoView: null,

    home: function() {
        if (this.departureView == null) {
            this.departureView = new DepartureView({
                el: $("#app")
            });
        }
        this.departureView.showPage();
    },

    destination: function(id) {
        if (this.departureView == null) {
            this.navigate('', true);
            return;
        }

        var el = $("#app");

        if (this.destinationView == null) {
            this.destinationView = new DestinationView({
                el: el
            });
        }
        this.destinationView.showPage(id, this.departureView.busStopsCollection);
    },

    trip: function(fromId, toId) {
        var el = $("#app");

        if (this.resultView == null) {
            this.resultView = new ResultView({
                el: el
            });
        }

        this.resultView.showView(fromId, toId);
    },

    info: function() {
        console.log("goes to info");
        var el = $("#app");
        if (this.infoView == null) {
            this.infoView = new InfoView({
                el: el
            })
        }
        this.infoView.showView();
    }
});