
RuteVogn.ResultView = RuteVogn.BaseView.extend({
    templateName: "result-view",

    events: {
        "click #new-search-button" : "goToStartPage",
        "click #destination-buss-stop-button" : "onBusStopClick"
    },

    initialize: function(options) {
        this.el = options.el;
        this.travelInfoCollection = new RuteVogn.TravelInfoCollection()

        this.nextDepTime = null;
        this.countDownTimer = null;

        this.fromId = null;
        this.toId = null;
    },

    showView: function(fromId, toId) {
        var date = new Date().toJSON();
        var that = this;

        this.fromId = fromId;
        this.toId = toId;

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

        var currentTimeInMs = new Date().getTime();
        this.travelInfoCollection.each(function(route) {
            var depTime = new Date(route.get("date"));
            var arrTime = new Date(route.get("arrival"));
            var routeNum = route.get("route");
            var travelTime = that.createRemainingTimeStringFromMs(arrTime.getTime() - depTime.getTime());

            if (depTime.getTime() >= currentTimeInMs){
                data.push({
                    depTimeInMs: depTime.getTime(),
                    route: routeNum.toString(),
                    departureTime: that.getTimeString(depTime),
                    arrivalTime: that.getTimeString(arrTime),
                    travelTime: travelTime.toString()
                });
            }
        });
        this.nextDepTime = data[0].depTimeInMs;
        var depTime = this.createRemainingTimeStringFromMs(data[0].depTimeInMs - currentTimeInMs);
        this.render({routes: data, nextDepartureTime: depTime});

    },

    startCountDownForNextDeparture: function() {
        if (this.countDownTimer != null) {
            window.clearInterval(this.countDownTimer);
        }

        var $depDiv = this.$el.find("#departure-in");
        this.updateCountDown($depDiv);

        var that = this;
        this.countDownTimer = setInterval(function(){
            that.updateCountDown($depDiv);
        }, 1000);
    },

    updateCountDown: function(targetDiv) {
        var currentTimeInMs = new Date().getTime();
        var timeRemaining = this.createRemainingTimeStringFromMs(this.nextDepTime - currentTimeInMs);
        if ((this.nextDepTime - currentTimeInMs) < 0) {
            this.showView(this.fromId, this.toId);
            console.log("HURRA");
        }

        targetDiv.html(timeRemaining);
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
        var seconds = Math.floor(ms / 1000);

        var hours = Math.floor(seconds / 3600);
        seconds -= hours * 3600;

        var minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;

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
    },

    onRenderComplete: function() {
        this.startCountDownForNextDeparture();
    }
});
