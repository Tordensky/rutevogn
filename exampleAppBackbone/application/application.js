var Basic = Basic || {};

Basic.Application = {
    run: function () {
        var basicRouter = new Basic.Router();

        var basicView = new Basic.DepartureView({
            el: $("#app")
        });
        basicView.render();
    }
};