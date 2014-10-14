var Backbone = require('backbone');
var $ = require('jquery-browserify');
var Router = require('./router');
var RuteVogn = {};

Backbone.$ = $;
require('fastclick')(document.body);

var RuteVogn = {};
RuteVogn.Router = new Router();
window.RuteVogn = RuteVogn;
Backbone.history.start();

// var body = $("body"),
//     mask = document.createElement("div"),
//     toggleSlideLeft = document.querySelector( ".toggle-slide-left" ),
//     slideMenuLeft = document.querySelector( ".slide-menu-left" ),
//     activeNav = "";

// mask.className = "mask";    // dimming

// /* slide menu left */
// toggleSlideLeft.addEventListener( "click", function(){
//     body.addClass("sml-open");
//     document.body.appendChild(mask);
//     activeNav = "sml-open";
// });

// document.querySelector("body").addEventListener('click', function (e){
//     if(activeNav !== "" && !$("#showMenuButton").is(e.target)){
//         body.removeClass(activeNav);
//         activeNav = "";
//         document.body.removeChild(mask);
//     }
// });

if (/mobile/i.test(navigator.userAgent)) {
    $(".buss-stop-button:hover").css("background-color", "#38b1ff");
    $(".buss-stop-button:active").css("background-color", "#79c8ff");
}



var setFooter = function setFooter() {
    var windowHeight = $(window).height();
    var headerHeight = $("#header").outerHeight();
    var footerHeight = $("#footer").outerHeight();
    var appHeight = windowHeight - (headerHeight + footerHeight);
    $("#app").css("min-height", appHeight);
};

setFooter();

window.onresize = function() {
    setFooter();
};
