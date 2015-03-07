var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
require('./models/Customers');
require('./models/Projects');
var Project = mongoose.model('Project');
var Customer = mongoose.model('Customer');

router.get('/customers', function(req, res, next) {
  Customer.find(function(err, customers){
    if(err){ return next(err); }

    res.json(customers);
  });
});


module.exports = router;
