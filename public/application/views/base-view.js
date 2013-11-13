var RuteVogn = RuteVogn || {};

RuteVogn.BaseView = Backbone.View.extend({
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

        var that = this;
        this.getTemplate(this.templateName, function(html){
            var temp = Mustache.render(html, allDicts);
            that.$el.html(temp);
        });
    }
});
