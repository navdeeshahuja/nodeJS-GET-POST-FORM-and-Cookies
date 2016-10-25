var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies['username'] && req.cookies['last-login'])
  {
    var newDate  = new Date();
    var prevDate = req.cookies['last-login'];
    res.cookie('last-login', ""+newDate, { maxAge: 90000000, httpOnly: true });
    res.writeHead(200, {'Content-Type' : 'text/html'});
  	res.write('Your name is '+ req.cookies['username'] + '<br>Your last login time is '+ prevDate);
  	res.write('<br><br>It will be again set to '+newDate);
    res.end();

  }
  else
  {
  	res.render('getCookies', {});

  }
});

router.post('/setCookie', function(req, res, next){

	res.cookie('username', req.body.username, { maxAge: 90000000, httpOnly: true });
	res.cookie('last-login', ""+Date(), { maxAge: 90000000, httpOnly: true });

	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('cookieStored :)<br>');
	res.end('<a href="/">Go to HomePage</a>');
	

});

module.exports = router;
