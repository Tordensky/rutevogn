var RuteVogn = RuteVogn || {};

RuteVogn.Application = {
    run: function () {
        var router = new RuteVogn.Router();

        var mainView = new RuteVogn.MainView({
            el: $("#app")
        });

        mainView.render();
    }
};