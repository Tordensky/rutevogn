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

Backbone.history.start();

(function() {
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
})();