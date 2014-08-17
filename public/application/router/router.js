var RuteVogn = RuteVogn || {};

RuteVogn.Router = Backbone.Router.extend({
    routes: {
        '': "home",
        'destination/:id': "destination",
        'trip/:fromId/:toId': "trip",
        'info': 'info',
        'depature/:name': 'depature'
    },

    departureView: null,
    destinationView: null,
    resultView: null,
    bussStopInfo: null,
    infoView: null,
    cityView: null,

    home: function() {
        if (this.cityView == null) {
            this.cityView = new RuteVogn.ChangeCityView({
                el: $("#app")
            });
        }
        this.cityView.showPage();
    },

    depature: function(cityName){
        if (this.departureView == null) {
            this.departureView = new RuteVogn.DepartureView({
                el: $("#app")
            });
        }
        this.departureView.showPage(cityName);
    },

    destination: function(id) {
        if (this.departureView == null) {
            this.navigate('', true);
            return;
        }

        var el = $("#app");

        if (this.destinationView == null) {
            this.destinationView = new RuteVogn.DestinationView({
                el: el
            });
        }
        this.destinationView.showPage(id, this.departureView.busStopsCollection);
    },

    trip: function(fromId, toId) {
        var el = $("#app"); 

        if (this.resultView == null) {
            this.resultView = new RuteVogn.ResultView({
                el: el
            });
        }

        this.resultView.showView(fromId, toId);
    },

    info: function() {
        console.log("goes to info");
        var el = $("#app");
        if (this.infoView == null) {
            this.infoView = new RuteVogn.InfoView({
                el: el
            })
        }
        this.infoView.showView();
    }
});