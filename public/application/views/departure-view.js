var RuteVogn = RuteVogn || {};

RuteVogn.DepartureView = RuteVogn.BaseView.extend({
    templateName: "departure-template",

    events: {
        "click #buss-stop-button" : "onBusStopClick",
    },

    initialize: function(options) {
        this.el = options.el;

        this.busStopsCollection = new RuteVogn.BussStopCollection();

    },

    showPage: function() {
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
        RuteVogn.router.navigate('destination/'+stopId, true);
    }


});
