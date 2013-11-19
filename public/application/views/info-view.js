var RuteVogn = RuteVogn || {};

RuteVogn.InfoView = RuteVogn.BaseView.extend({
    initialize: function(options) {
        this.el = options.el;
    },

    showView: function() {
        console.log("ready to render");
    }
});