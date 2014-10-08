'use strict';

var Backbone = require('backbone');
var $ = require('jquery-browserify');
var Router = require('./router');
var RuteVogn = {};

Backbone.$ = $;

var attachFastClick = require('fastclick');
attachFastClick(document.body);

var RuteVogn = {};
RuteVogn.Router = new Router();
window.RuteVogn = RuteVogn;
console.log("inside application js");

Backbone.history.start();

    console.log("doucment ready");
    var body = $("body"),
        mask = document.createElement("div"),
        toggleSlideLeft = document.querySelector( ".toggle-slide-left" ),
        slideMenuLeft = document.querySelector( ".slide-menu-left" ),
        activeNav = "";

    mask.className = "mask";    // dimming

    /* slide menu left */
    toggleSlideLeft.addEventListener( "click", function(){
        body.addClass("sml-open");
        document.body.appendChild(mask);
        activeNav = "sml-open";
    } );

    $(document).touchstart(function (e){
        var container = $("menulist");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            if(activeNav.length > 0){
                body.removeClass(activeNav);
                activeNav = "";
                document.body.removeChild(mask);
            }
        }
    });

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
