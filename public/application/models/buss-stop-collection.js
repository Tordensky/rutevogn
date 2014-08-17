var RuteVogn = RuteVogn || {};

RuteVogn.BussStopCollection = Backbone.Collection.extend({
    model: RuteVogn.BussStopModel,
 	url: "stops/:city"	// this does not work. set when inited instead
 });