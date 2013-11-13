var RuteVogn = RuteVogn || {};

RuteVogn.DepartureView = RuteVogn.BaseView.extend({
    templateName: "stops-template",

    events: {
        "click #buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
        console.log(this.el);

        this.bussStopsCollection = new RuteVogn.BussStopCollection();

        this.getBusStops();
    },

    getBusStops: function() {
        var that = this;
        this.bussStopsCollection.fetch({
            success: function(){
                that.onBusStopsResult();
            }
        });
    },

    onBusStopsResult: function () {
        var stops = {stops: this.bussStopsCollection.toJSON()};
        console.log(stops);
        this.render(stops);
    },

    onBusStopClick: function(event) {
        var stopId = $(event.currentTarget).data('id');
        RuteVogn.router.navigate('destination/'+stopId, true);
    }
});
