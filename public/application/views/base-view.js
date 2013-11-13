var RuteVogn = RuteVogn || {};

RuteVogn.BaseView = Backbone.View.extend({
    getTemplate: function(templateName, callback) {
        $.get('application/templates/' + templateName + '.mustache', function(data) {
            callback(data)
        }, 'html');
    },

    render: function(){
        console.log("render main view");
        var that = this;
        this.getTemplate(this.templateName, function(html){
            var temp = Mustache.render(html, {});
            that.$el.html(temp);
        });
    }
});
