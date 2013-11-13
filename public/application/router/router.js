var RuteVogn = RuteVogn || {};

RuteVogn.Router = Backbone.Router.extend({
    routes: {
        '': "home",
        'destination/:id': "destination",
        'trip': "trip"

    },

    departureView: null,
    bussStopInfo: null,

    home: function() {
        this.departureView = new RuteVogn.DepartureView({
            el: $("#app")
        });
    },

    destination: function(id) {
        if (this.departureView == null) {
            this.navigate('', true);
        }
        console.log("destination", id);

        var el = $("#app");
        el.empty();

        var that = this;
        new RuteVogn.DestinationView({
            el: el,
            departureId: id,
            busStopData: that.departureView.bussStopsCollection
        });
    },

    trip: function(fromId, toId) {
        // TODO fix this shit
    }

});