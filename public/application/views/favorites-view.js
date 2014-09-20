var RuteVogn = RuteVogn || {};

RuteVogn.FavoritesView = RuteVogn.BaseView.extend({
    templateName: "change-city-template",

    events: {
        "click #change-city-button" : "onChangeCityClick",
    },

    initialize: function(options) {
        this.el = options.el;
    },

    showPage: function() {
        this.getFavorites();
    },

    getFavorites: function() {
        var that = this;
        this.cityCollection.fetch({
            success: function(){
                that.onFavoritesResult();
            }
        });
    },

    onFavoritesResult: function () {
        var cities = {cities: this.cityCollection.toJSON()};
        var screenInfo = {title: "Velg by"};
        this.render(cities, screenInfo);
    },

    onFavoriteSelected: function(event) {
        var cityId = $(event.currentTarget).data('id');
        var cityName = $(event.currentTarget).data('name');
        console.log("onChangeCityClick", cityId, cityName);
        var favorites = window.localStorage.getItem("favorites");

        RuteVogn.router.navigate('trip/' + this.departureId + '/'+ destinationId, true);

    },

    onSearchForFavorite: function(event){
        
    },

    onNewFavoriteAdded: function(event){
        window.localStorage.setItem("favorites", "Kiellands Plass -> Brugata");
    }
});
