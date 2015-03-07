var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	companyName: String,
	description: String,
	projects: [{type: mongooseSchema.Types.ObjectId, ref: 'Project'}]
});

mongoose.model('Customer', CustomerSchema);