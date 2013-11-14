
RuteVogn.ResultView = RuteVogn.BaseView.extend({
    templateName: "result-view",

    events: {
        "click #new-search-button" : "goToStartPage",
        "click #destination-buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
    },

    showView: function(fromId, toId) {
        // TODO get data and render to screen
        this.render();
    },

    goToStartPage: function(event) {
        RuteVogn.router.navigate('', true);
    }
});
