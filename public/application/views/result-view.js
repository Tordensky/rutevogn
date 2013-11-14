
RuteVogn.ResultView = RuteVogn.BaseView.extend({
    templateName: "result-view",

    events: {
        "click #new-search-button" : "goToStartPage",
        "click #destination-buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
        this.travelInfoCollection = new RuteVogn.TravelInfoCollection()
    },

    showView: function(fromId, toId) {
        var date = new Date().toJSON();
        var that = this;
        this.travelInfoCollection.fetch({
            data: {
                from: fromId,
                to: toId,
                date: date
            },
            success: function(){
                that.parseTravelInfo();
            }
        });
    },

    parseTravelInfo: function() {
        var data = [];
        var that = this;
        this.travelInfoCollection.each(function(route) {
            var depTime = new Date(route.get("date"));
            var arrTime = new Date(route.get("arrival"));
            var routeNum = route.get("route");
            var travelTime = that.createRemainingTimeStringFromMs(arrTime.getTime() - depTime.getTime());

            data.push({
                route: routeNum.toString(),
                departureTime: that.getTimeString(depTime),
                arrivalTime: that.getTimeString(arrTime),
                travelTime: travelTime.toString()
            });
        });
        this.render({routes: data});
    },

    goToStartPage: function() {
        RuteVogn.router.navigate('', true);
    },

    getTimeString: function(date) {
        var hh = date.getHours();
        hh = hh < 10 ? "0" + hh.toString() : hh.toString();

        var mm = date.getMinutes();
        mm = mm < 10 ? "0" + mm.toString() : mm.toString();

        return hh+":"+mm.toString();
    },

    createRemainingTimeStringFromMs: function(ms) {
        var seconds = ms / 1000;
        var hours = Math.floor(seconds / 3600);
        var minutes = Math.floor((seconds-(hours*3600)) / 60);
        seconds = seconds - -(hours*3600) - (minutes*60);

        var timeString = "";
        if (seconds == 0 && hours == 0 &&minutes == 0){
            timeString = "Nå"
        } else {
            if (hours) {
                timeString += hours.toString() +"timer " + minutes + "min ";
            }
            else if (minutes) {
                timeString +=  minutes + "min ";
            }
            if (seconds) {
                timeString += seconds + "sek";
            }
        }
        return timeString
    }
});
