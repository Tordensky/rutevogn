var RuteVogn = RuteVogn || {};

RuteVogn.TravelInfoCollection = Backbone.Collection.extend({
    model: RuteVogn.TravelInfoModel,
    url: "departure",

    parse: function(data){
    	console.log(data);
    	return data;
    }
});