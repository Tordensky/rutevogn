var RuteVogn = RuteVogn || {};

RuteVogn.Router = Backbone.Router.extend({
    routes: {
        '': "home",
        'destination/:id': "destination",
        'trip/:fromId/:toId': "trip"

    },

    departureView: null,
    destinationView: null,
    resultView: null,
    bussStopInfo: null,

    home: function() {
        if (this.departureView == null) {
            this.departureView = new RuteVogn.DepartureView({
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

        el.empty();

        if (this.destinationView == null) {
            this.destinationView = new RuteVogn.DestinationView({
                el: el
            });
        }
        this.destinationView.showPage(id, this.departureView.busStopsCollection);
    },

    trip: function(fromId, toId) {
        var el = $("#app");
        el.empty();

        if (this.resultView == null) {
            this.resultView = new RuteVogn.ResultView({
                el: el
            });
        }

        this.resultView.showView(fromId, toId);
    }
});