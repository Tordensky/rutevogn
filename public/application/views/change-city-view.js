var RuteVogn = RuteVogn || {};

RuteVogn.ChangeCityView = RuteVogn.BaseView.extend({
    templateName: "change-city-template",

    events: {
        "click #change-city-button" : "onChangeCityClick",
    },

    initialize: function(options) {
        this.el = options.el;
        this.cityCollection = new RuteVogn.CityCollection();
    },

    showPage: function() {
        this.getCities();
    },

    getCities: function() {
        var that = this;
        this.cityCollection.fetch({
            success: function(){
                that.onCitiesResult();
            }
        });
    },

    onCitiesResult: function () {
        var cities = {cities: this.cityCollection.toJSON()};
        var screenInfo = {title: "Velg by"};
        this.render(cities, screenInfo);
    },

    onChangeCityClick: function(event) {
        console.log("onChangeCityClick");
    }
});
