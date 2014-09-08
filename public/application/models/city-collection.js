var RuteVogn = RuteVogn || {};

RuteVogn.CityCollection = Backbone.Collection.extend({
    model: RuteVogn.CityModel,
    url: "cities"
});