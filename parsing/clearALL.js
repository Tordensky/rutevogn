//SHOULD ONLY BE USED FOR TEST PURPOSES

var mongoose = require('mongoose');

mongoose.connect(require('./configcommon').mongodbUrl);

var Depature = require('../model/depature-model');
var Stop = require('../model/stop-model.js');

Depature.remove({}, function(err) {
    console.log('collection removed');
    removeStop();
});

function removeStop(){
    Stop.remove({}, function(err){
        console.log('collection removed');
        process.exit(0);
    });
}