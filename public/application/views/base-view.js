var $ = require('jquery-browserify'),
    Mustache = require('mustache'),
    _ = require('underscore'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.View.extend({
    events: {
        "click #info-button" : "onInfoButtonPress"
    },

    templateRawData: null,

    getTemplate: function(templateName, callback) {
        $.get('application/templates/' + templateName + '.mustache', function(data) {
            callback(data)
        }, 'html');
    },

    render: function(){
        var allDicts = {};
        _.each(arguments, function(arg){
            _.extend(allDicts, arg);
        });

        if (this.templateRawData == null) {
            var that = this;
            this.getTemplate(this.templateName, function(html){
                that.templateRawData = html;
                that.renderMustache(allDicts);
                that.onRenderComplete();
            });
        } else {
            this.renderMustache(allDicts);
            this.onRenderComplete();
        }

    },

    renderMustache: function(siteData) {
        var temp = Mustache.render(this.templateRawData, siteData);
        this.$el.html(temp);
    },

    // callback when render is completed
    onRenderComplete: function() {
        // implement in super class if something needs to be done when render is completed
    },

    onInfoButtonPress: function(event) {
        event.preventDefault();
        console.log("info button pressed");
    }
});