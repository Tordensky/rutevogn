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
            title: "velg din destinasjon",
            from: departureStop.get("name"),
            backButtonTitle: "TILBAKE"};

        var stops = {stops: departureStop.get("destinations")};
        this.render(pageInfo, stops);
    },

    onBusStopClick: function(event) {
        var destinationId = $(event.currentTarget).data('id');
        RuteVogn.router.navigate('trip/'+this.departureId+'/'+destinationId, true);
    },

    goToStartPage: function(event) {
        RuteVogn.router.navigate('', true);
    }
});
