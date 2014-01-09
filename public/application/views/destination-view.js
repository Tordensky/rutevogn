var RuteVogn = RuteVogn || {};

RuteVogn.DestinationView = RuteVogn.BaseView.extend({
    templateName: "arrival-template",

    events: {
        "click #back-button" : "goToStartPage",
        "click #destination-buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
    },

    showPage: function(departureId, busStopsCollection){
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

        // Click Tracking for google analytics
        _gaq.push(['_trackEvent', 'ButtonClick', 'Traveling-To',  destinationName  + " (dest)"]);

        RuteVogn.router.navigate('trip/'+this.departureId+'/'+destinationId, true);
    },

    goToStartPage: function(event) {
        RuteVogn.router.navigate('', true);
    },

    onRenderComplete: function() {
        // create margin bottom for not rendering buss stops over the button menu
        var containerHeight = this.$el.find("#page-button-container").outerHeight();
        this.$el.find("#buss-stop-container").css("margin-bottom", containerHeight);
    }
});
