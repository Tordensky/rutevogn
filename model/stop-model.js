var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StopSchema = new Schema({
    name : { type: String, required: true},
    city : { type: String, required: true},
    destinations : [{type: Schema.Types.ObjectId, ref: 'Stop'}],
    sort_id : {type: Number, required: true}
});

module.exports = mongoose.model('Stop', StopSchema);