var RuteVogn = RuteVogn || {};

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

        this.hasUpdatetTableForThisMinutte = false;
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
        var showNumberOfResults = 7;

        this.travelInfoCollection.each(function(route) {
            var depTime = new Date(route.get("date"));
            var arrTime = new Date(route.get("arrival"));
            var routeNum = route.get("route");
            var travelTime = that.createRemainingTimeString(depTime.getTime() - currentTimeInMs, false);

            if (depTime.getTime() >= currentTimeInMs && showNumberOfResults > 0){
                showNumberOfResults -= 1;
                data.push({
                    depTimeInMs: depTime.getTime(),
                    route: routeNum.toString(),
                    departureTime: that.getTimeString(depTime),
                    arrivalTime: that.getTimeString(arrTime),
                    travelTime: travelTime.toString(),
                    fromName: route.get("from"),
                    toName: route.get("to")
                });
            }
        });
        if (data.length > 0) {
            this.nextDepTime = data[0].depTimeInMs;
            var fromName = data[0]["fromName"];
            var toName = data[0]["toName"];

            var depTime = this.createRemainingTimeString(data[0].depTimeInMs - currentTimeInMs, true);
            this.render({routes: data, nextDepartureTime: depTime, title: "Bussen min går om", from: fromName, to: toName});
        } else {
            this.nextDepTime = null;
            this.render({nextDepartureTime: "Ingen avganger"})
        }
    },

    startCountDownForNextDeparture: function() {
        if (this.countDownTimer != null) {
            window.clearInterval(this.countDownTimer);
        }

        if (this.nextDepTime != null) {
            var $depDiv = this.$el.find("#departure-in");
            this.updateCountDown($depDiv);

            var that = this;
            this.countDownTimer = setInterval(function(){
                that.updateCountDown($depDiv);
            }, 1000);
        }
    },

    isOnWholeMinute: function (currentTimeInMs) {
        return (Math.floor(currentTimeInMs / 1000) % 60) == 0;
    },

    hasDeparted: function (currentTimeInMs) {
        return (this.nextDepTime - currentTimeInMs) < 0;
    },

    updateCountDown: function(targetDiv) {
        var currentTimeInMs = new Date().getTime();
        var timeRemaining = this.createRemainingTimeString(this.nextDepTime - currentTimeInMs, true);

        if (this.hasDeparted(currentTimeInMs)) {
            this.showView(this.fromId, this.toId);
        }

        // Quick fix for having count down in each table cell
        if (this.isOnWholeMinute(currentTimeInMs)) {
            if (this.hasUpdatetTableForThisMinutte == false) {
                this.parseTravelInfo();
                this.hasUpdatetTableForThisMinutte = true;
            }
        } else {
            this.hasUpdatetTableForThisMinutte = false;
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

    createRemainingTimeString: function(ms, showSeconds) {
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
                timeString += hours.toString() +"t " + minutes + "min ";
            }
            else if (minutes) {
                timeString +=  minutes + "min ";
            }
            if (seconds && showSeconds) {
                timeString += seconds + "sek";
            }
        }
        return timeString
    },

    onRenderComplete: function() {
        this.startCountDownForNextDeparture();
    }
});
