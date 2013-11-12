var Basic = Basic || {};

Basic.Application = {
    run: function () {
        var basicRouter = new Basic.Router();

        var basicView = new Basic.MainView({
            el: $("#app")
        });
        basicView.render();
    }
};