var RuteVogn = RuteVogn || {};

RuteVogn.BussStopCollection = Backbone.Collection.extend({
    model: RuteVogn.BussStopModel,
    url: "stops"
});