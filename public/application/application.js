var RuteVogn = RuteVogn || {};

RuteVogn.router = new RuteVogn.Router();

RuteVogn.Application = {
    run: function () {
        Backbone.history.start();
    }
};