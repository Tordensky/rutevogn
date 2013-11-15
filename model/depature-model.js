var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DepatureSchema = new Schema({
    fromId : { type: Schema.Types.ObjectId, ref: 'Stop'},
    from : {type: String, required: true},
    toId: { type: Schema.Types.ObjectId, ref: 'Stop'},
    to: {type: String, required: true},
    date : { type: Date, required: true},
    arrival : { type: Date, required: true},
    route : { type: Number, required: true},
    hash : { type: String, index: {unique: true, dropDups: true}}
});

module.exports = mongoose.model('Depature', DepatureSchema);