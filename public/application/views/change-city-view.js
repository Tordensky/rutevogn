var $ = require('jquery-browserify'),
    BaseView = require('./base-view'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    CityCollection = require('../models/city-collection');

Backbone.$ = $;

module.exports = BaseView.extend({
    templateName: "change-city-template",

    events: {
        "click .citybutton" : "onChangeCityClick",
    },

    initialize: function(options) {
        this.el = options.el;
        this.cityCollection = new CityCollection();
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
        var cityId = $(event.currentTarget).data('id');
        var cityName = $(event.currentTarget).data('name');
        window.localStorage.setItem("city", cityName);
        window.RuteVogn.Router.navigate('depature/' + cityName, true);

    }
});
