var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('formDisplayData', {
  	title : "Successfully Submitted Using GET Request",
  	name : req.query.name,
  	email : req.query.email,
  	phone : req.query.phone,
  	address : req.query.address,
  	zipcode : req.query.zipcode,
  	country : req.query.country,
  	cardType : req.query.cardType,
    cardNumber : req.query.cardNumber,
  	cvv : req.query.cvv,
  	nameOnTheCard : req.query.nameOnTheCard

  });
});

router.post('/', function(req, res, next) {
  res.render('formDisplayData', {
  	title : "Successfully Submitted Using POST Request",
  	name : req.body.name,
  	email : req.body.email,
  	phone : req.body.phone,
  	address : req.body.address,
  	zipcode : req.body.zipcode,
  	country : req.body.country,
  	cardType : req.body.cardType,
    cardNumber : req.body.cardNumber,
  	cvv : req.body.cvv,
  	nameOnTheCard : req.body.nameOnTheCard

  });
});


module.exports = router;
