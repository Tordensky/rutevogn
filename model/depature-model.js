var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var DepatureSchema = new Schema({
    fromId : { type: Schema.Types.ObjectId, ref: 'Stop'},
    toId: { type: Schema.Types.ObjectId, ref: 'Stop'},
    date : { type: Date, required: true},
    arrival : { type: Date, required: true},
    route : { type: Number, required: true}
});

module.exports = mongoose.model('Depature', DepatureSchema);