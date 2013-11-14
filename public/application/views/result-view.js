
RuteVogn.ResultView = RuteVogn.BaseView.extend({
    templateName: "result-view",

    events: {
        "click #new-search-button" : "goToStartPage",
        "click #destination-buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
        this.travelInfoCollection = new RuteVogn.TravelInfoCollection()
    },

    showView: function(fromId, toId) {
        // TODO get data and render to screen

        var date = new Date().toJSON();
        console.log("Travel info", fromId, toId, date);
        this.travelInfoCollection.fetch({
            data: {
                from: fromId,
                to: toId,
                date: date
            },
            success: function(){
                console.log("HURRA");
                this.render();
            }
        });
    },

    goToStartPage: function(event) {
        RuteVogn.router.navigate('', true);
    }
});
