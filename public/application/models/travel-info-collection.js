var RuteVogn = RuteVogn || {};

RuteVogn.TravelInfoCollection = Backbone.Collection.extend({
    model: RuteVogn.TravelInfoModel,
    url: "departure"
});/**
 * Created with PyCharm.
 * User: Simon
 * Date: 11/14/13
 * Time: 3:52 PM
 * To change this template use File | Settings | File Templates.
 */
