var Stop = require('../model/stop-model.js');


exports.getStops = function(req, res){
	Stop.find().populate('destinations')
        .exec(function (err, destinations) {
          if (err) winston.log('error', err);

          console.log('The visitors is %j', destinations);
          // prints "The creator is Aaron"
          res.jsonp(destinations);
    });
}