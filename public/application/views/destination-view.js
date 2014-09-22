var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
    Backbone = require('backbone'),
    _ = require('underscore');

Backbone.$ = $;

module.exports  = BaseView.extend({
    templateName: "arrival-template",

    events: {
        "click #back-button" : "goToStartPage",
        "click .destination" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
    },

    showPage: function(departureId, busStopsCollection){
        // window._gaq.push(['_trackPageview', '/destination']);
        this.departureId = departureId;
        this.busStopsCollection = busStopsCollection;

        this.renderPossibleDestinations();
    },

    renderPossibleDestinations: function() {
        var that = this;
        var departureStop = this.busStopsCollection.find(function(busStop) {
            var id = busStop.get("_id");
            return (id == that.departureId);
        });

        var pageInfo = {
            title: "og skal til",
            from: departureStop.get("name"),
            backButtonTitle: "Tilbake"};

        var stops = departureStop.get("destinations");

        stops = _.sortBy(stops, function(stop){
            return stop.name;
        });
        this.render(pageInfo, {stops: stops});
    },

    onBusStopClick: function(event) {
        var destinationId = $(event.currentTarget).data('id');

        var destinationName = $(event.currentTarget).data('name');
        console.log("onBusStopClick");
        // Click Tracking for google analytics
        // window._gaq.push(['_trackEvent', 'ButtonClick', 'Traveling-To',  destinationName  + " (dest)"]);
        window.RuteVogn.Router.navigate('trip/'+this.departureId+'/'+destinationId, true);
    },

    goToStartPage: function(event) {
        window.RuteVogn.Router.navigate('', true);
    },

    onRenderComplete: function() {
        // create margin bottom for not rendering buss stops over the button menu
        var containerHeight = this.$el.find("#page-button-container").outerHeight();
        this.$el.find("#buss-stop-container").css("margin-bottom", containerHeight);
    }
});
