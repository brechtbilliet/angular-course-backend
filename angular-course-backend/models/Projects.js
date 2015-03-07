var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
	title: String,
	description: String,
	customer: {type: mongooseSchema.Types.ObjectId, ref: 'Customer'}
});

mongoose.model('Project', ProjectSchema);